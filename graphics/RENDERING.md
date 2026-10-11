# RTS rendering pipeline (Three.js / WebGL2)

This game uses a custom browser renderer built on Three.js 0.180, not Unity or
Unreal. The following modules are integrated into the live 3D battlefield.
The techniques are standard graphics algorithms; calibration textures and shader
code are original. Three.js and its addons remain under their MIT license.
This is a rendering foundation: final fidelity also depends on authored meshes,
textures, animation, art direction, and the GPU. It does not guarantee AAA visuals
or a particular frame rate.

## Setup and controls

1. `npm ci`, `npm run build:graphics`, `npm start`; open http://localhost:3000.
2. Use the live 3D renderer. Settings → Graphics detail independently controls
   shadows, texture filtering, wind grass, GTAO/bloom, SSR, atmosphere, and DOF.
3. SSR, atmosphere and DOF default off to preserve the existing gameplay budget.
   Enable SSR and atmosphere for the full pipeline; DOF is restricted to explicitly cinematic cameras;
   gameplay cameras stay sharp even if an old saved preference enables it. Options persist between sessions.
4. Build the bundles again after editing graphics sources. GitHub Pages publishes
   these bundles; it cannot resolve bare `three` imports in source modules.

Pipeline order: opaque depth + optional surface normals/reflectivity → HDR scene
with CSM → GTAO → SSR → volumetric atmosphere → bloom → optional DOF → ACES/output
conversion → SMAA. Multisampling resolves geometry before the screen-space AA.
Color operations happen in linear HDR until OutputPass; never apply ACES twice.
Fog of war is a separate gameplay visibility mask and remains above the scene.
Atmospheric haze never reveals enemies or changes visibility rules.

## Lighting and surface materials

`modern-renderer.js` owns the renderer, sun, environment, passes and lifetime.
A hemisphere fill and prefiltered environment balance the dominant directional
sun. CSM uses practical (logarithmic/uniform blended) splits, two to four cascades,
PCF filtering, fade transitions, and 180–350 world-unit shadow distance budgets.
The independent shadow setting caps maps at 1024 or 2048; the high preset can use
4096 when not overridden. Shadow distance culls casters. GTAO adds short-range
contact occlusion; it is not a separate contact-shadow ray tracer.

```js
import {createPipeline, createTerrainMaterial, Vector3} from './modern-renderer.js';
const graphics = createPipeline(canvas, {quality:'balanced', cameraType:'orthographic'});
graphics.setSun({direction:new Vector3(-1,-1,-.5), intensity:3, color:0xffecd0});
graphics.weather.wetness.value = .3; // 0..1: darker, smoother wet surfaces
// Thin-surface wrap is an approximation, not a true volumetric SSS solver.
graphics.prepareMaterial(material, {rim:.08, sss:.15});
graphics.prepare(assetRoot);
graphics.render(simulationTimeSeconds);
// On teardown: graphics.dispose();
```

Sun direction points along the incoming sunlight, towards the ground. The BRDF
is Three's standard energy-conserving GGX/Smith/Schlick implementation. Roughness
is clamped above .08 to avoid unstable highlights. Metallic weathering lowers
metallic coverage; wetness lowers roughness and darkens the surface. Restrained
view-angle rim lighting helps silhouettes without drawing screen-wide outlines.
Up to eight local, unshadowed lights may accompany emissive surfaces; emissive
materials alone do not illuminate neighboring geometry or provide dynamic GI.

## Terrain and authored PBR layers

`terrain-material.js` blends three grass/dirt/rock layers. `terrain-layers.js`
generates small seamless calibration maps shared by all terrain chunks. Replace
these with authored DataArrayTextures; each array has three equal-size layers:

| Array | Channels | Color space |
| --- | --- | --- |
| albedoHeight | RGB base color, A height | sRGB RGB; alpha remains linear |
| normal | RGB tangent normal, A unused | linear / NoColorSpace |
| orm | R roughness, G metallic, B ambient occlusion | linear / NoColorSpace |
| optional splatmap | RGB grass/dirt/rock coverage | linear / NoColorSpace |

All layer images must share dimensions and order. Height is normalized 0..1 and
is only a blending signal, not mesh displacement. The optional splatmap maps the
world's XZ square from zero to `mapSize`. Without it, slope and low-frequency
variation choose rock on cliffs and grass/dirt on flatter areas.

```js
const terrain = createTerrainMaterial(graphics, {
  layers: {albedoHeight, normal, orm}, splatmap,
  mapSize:400, tileScale:.18, heightBlend:.18
});
```

Triplanar weights are `abs(worldNormal)^4`, normalized to sum to one. Signed
axis projections sample YZ/XZ/XY planes and transform each tangent normal back
into world space; this prevents steep-cliff UV stretching and mirrored-normal
errors. Height weights use `max(height + coverage - peak + blendWidth, 0) *
coverage`, then normalize. ORM and normals use the same blend weights as albedo.
There are up to 27 filtered layer samples per terrain pixel; texture arrays keep
sampler use to three. Use mipmaps, capped anisotropy, modest tile frequency and
texture dimensions. Keep terrain world transforms unscaled or uniformly scaled;
nonuniform terrain scaling needs an inverse-transpose world-normal matrix.
Caller-supplied textures are borrowed and remain the caller's disposal responsibility.

## Water, wind and screen-space buffers

`gerstner-waves.js` contains matching CPU and GLSL wave definitions. For each
wave, `k=2π/wavelength`, `ω=sqrt(g*k)`, and phase is `k*dot(direction,xz)-ω*t`.
Vertical displacement is `A*sin(phase)`; horizontal displacement is
`Q*A*direction*cos(phase)`. The sum of `Q*k*A` stays below one to avoid loops.
The live river mesh is subdivided across and along its banks; its visual riverbed
is lowered without changing gameplay navigation. Waves use world-unit amplitudes.
River vertices are already in world coordinates (identity mesh transform); use
that convention when reusing this deformation hook.

`water-surface.js` reconstructs view position from opaque hardware depth and
inverse projection. Optical thickness is bed distance minus water distance.
Beer–Lambert `exp(-absorption * thickness)` shades water; shoreline alpha and
moving foam fade at small depth differences. Physical material IBL supplies
stable Fresnel highlights; `screen-effects.js` adds actual screen-space hits.
SSR marches reflected view-space rays, detects depth crossings, refines hits
with binary search, and fades by distance, screen edge and Schlick Fresnel.
Misses retain environment lighting. Hidden/offscreen geometry cannot reflect;
this is not ray tracing, a planar reflection camera or a GI solution.

`vertex-deformation.js` shares deformation between beauty, shadow, opaque-depth
and normal passes. `landscape-detail.js` bends grass quadratically from the root
and uses height-weighted tree crown gusts. All use simulation time, so pause,
replay and reduced-motion settings remain consistent. CustomDepthMaterial keeps
tree shadow silhouettes in the same pose. For new foliage, attach the deformation
and call `attachShadowDeformation(mesh)`; material arrays should share one pose.
The stock GTAO internal normal prepass does not apply custom vertex deformation;
its small wind discrepancy is bounded by the subtle displacement amplitudes.

`render-buffers.js` captures half-resolution opaque depth and surface normals/
reflectivity, using cached override materials with alpha cutouts and animation.
It restores materials, visibility, renderer state and targets in a finally block.
Unused cache entries are periodically disposed. Buffers are resized and disposed
with the renderer; borrowed asset textures are never disposed by overrides.

## Atmosphere and post processing

The atmosphere pass integrates single scattering along the camera ray, with
height falloff, drifting density, Beer–Lambert transmission, Henyey–Greenstein
forward scattering, and visibility from the far sun cascade. Six samples are
used by low/balanced, twelve by high. This is a bounded fullscreen integration,
not a temporally accumulated volumetric grid or multiple-scattering solution.
Extinction is capped at 12% to preserve battlefield contrast.
It supports orthographic and perspective projection. ACES filmic tone mapping,
subtle HDR bloom and SMAA use maintained Three addons. Camera matrices are bound
by reference, not captured at pass construction, so resizing stays correct.

```js
graphics.effects.reflections.enabled = true;
graphics.effects.atmosphere.enabled = true;
graphics.effects.atmosphere.uniforms.density.value = .0015;
graphics.setDepthOfField({enabled:true, focus:160, aperture:.000015, maxblur:.006});
```

DOF uses the addon Bokeh pass and is adjustable only on a pipeline created with
`cinematic:true`. Calling setDepthOfField on a gameplay pipeline cannot enable
blur. SSR surface masks use nearest filtering to avoid bleeding reflections over
unit and building silhouettes.

## Budgets and validation

SSR costs one normal/depth capture plus a bounded 16/32-step fullscreen shader.
Water depth and enabled atmosphere share one opaque capture. With both optional
effects off, water still needs opaque depth; normal capture is skipped. No CPU
readback occurs in normal play. Low/balanced/high render at 1/1.25/1.5 DPR, which
stays fixed during zoom. Spatially chunked instancing, rigid unit batches, existing
LOD, capped local lights and distance-culling reduce draw and shadow work. Measure
on target hardware before increasing texture sizes, DPR, steps or shadow ranges.

`npm test` checks simulation and shader math. `node tools/check-render-pipeline.cjs`
compiles/runs WebGL2 shaders in Chromium, checks both projections, surface masks,
visible SSR pixel changes, animated buffers, DOF and render-state restoration.
The script needs Playwright and Chromium installed at the paths specified in it;
`CHECK_URL` defaults to the local validation server on port 3084. Software-GPU
results prove compatibility, not gaming performance. The existing live water,
commander UI and multiplayer checks validate integration separately.
