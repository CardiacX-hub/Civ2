# Custom browser engine visual-quality setup

Kingdoms at War now renders live 3D geometry by default, consuming the same single-player and authoritative multiplayer simulation. The original source meshes have been exported to 106 GLB assets with articulated rigs, sampled animation, PBR color/normal/roughness textures and material batching. The Canvas overlay preserves fog, input coordinates, selection, health bars, mine occupancy, construction timers, effects and the minimap. Classic sprites remain a selectable compatibility/battery option. The calibration lab at `graphics/lab.html` remains available. This is a real renderer migration, not a claim that procedural source assets have AAA production art fidelity.

## 1. Run and inspect

1. Use Node 22 or newer. Run `npm ci` then `npm start`.
2. Open `http://localhost:3000` (or your configured PORT). Choose Settings → Visual quality. Choose Live 3D or Classic sprites. Live 3D uses the lighting/post pipeline below at maximum device-pixel ratios 1/1.25/1.5. Classic sprites use the Canvas/GPU presentation path described below. Ground moisture changes live PBR material response without changing gameplay. Phones default to Low. WebGL failure/context loss preserves Canvas gameplay and controls.
3. Open `http://localhost:3000/graphics/lab.html`. Change quality, wetness and weathering. This live scene validates shaders and shadows using original calibration primitives; it does not replace battlefield units.
4. Edit the well-commented `graphics/modern-renderer.js`, `graphics/terrain-material.js`, or `visual-quality.js`. Run `npm run build:graphics` after editing the 3D modules. Commit the generated bundle; Pages and Render serve it without downloading external browser dependencies.

## 2. Integrate original 3D assets

```js
import {createPipeline, createTerrainMaterial, AnimationMixer} from './graphics/modern-renderer.bundle.js';
const pipeline = createPipeline(document.querySelector('canvas'), {quality:'balanced'});
const asset = await pipeline.loadAsset('assets/my-original-character.glb');
asset.scene.position.set(0, 0, 0);
// GLTFLoader reads standard PBR material/texture color-space metadata.
// Drive animation with AnimationMixer in your host application;
// update the mixer before pipeline.render().
function frame() { pipeline.render(); requestAnimationFrame(frame); }
requestAnimationFrame(frame);
// Call pipeline.dispose() when tearing down the scene.
```

The battlefield adapter (`graphics/live-battlefield.js`) already connects the original source geometry to gameplay. It uses a 45-degree orthographic camera scaled at 0.1 renderer units per simulation unit, so a point projects to `(worldX - cameraX, worldY - cameraY - elevation)` exactly. Screen bounds of rendered models drive unit/building picking. Simulation terrain collision and server ownership rules stay authoritative. Fog and remembered enemy-building markers are composited after rendering; hidden enemies/miners are removed from the visible scene before any shadow pass. Online snapshots reuse the same scene keyed by lobby, with interpolated unit positions and animation time. The calibration lab itself includes no RTS logic.

For a supplied Three.js geometry/material, `pipeline.prepare(object)` adds the object, enables shadows and registers materials. `prepareMaterial(material,{sss:.2,rim:.1})` must be called before adding a foliage/skin mesh if you want thin-surface scattering; otherwise set `mesh.userData.sss=.2` before prepare. Custom ShaderMaterials require their own CSM/depth integration.

## 3. Lighting and shadows

The sun is a directional CSM rig with intensity 3.1 and warm color; hemisphere fill is 1.1, and filtered environment fill is 0.35. These are scene calibration values, not universal physical lux. Tune the ratio before increasing exposure. ACES exposure starts at 1.0.

| Preset | Shadow map per cascade | Cascades | Shadow cutoff | GTAO / bloom | Maximum DPR |
|---|---:|---:|---:|---|---:|
| Low | 1024² | 2 | 180 | Off | 1 |
| Balanced | 2048² | 3 | 260 | On | 1.25 |
| High | 4096² | 4 | 350 | On | 1.5 |

World units are authored consistently in the lab; adapt distances to your world scale. CSM uses practical splits, fade transitions, PCF filtering, normal bias 0.025 and depth bias -0.0002. Test grazing-angle surfaces before changing bias. GPU maximum texture size caps shadow resolution. Casters beyond the configured distance stop casting; frustum culling also remains enabled. Reconstruct the pipeline to switch presets so shadow targets are released properly.

GTAO supplies depth/normal-based contact darkening and small-scale occlusion. It is not screen-space directional contact-ray tracing. Thin surfaces and offscreen geometry still have the normal limitations of screen-space AO.

`pipeline.emissiveLight(position,color,intensity,distance)` adds a bounded real-time point light. A luminous material alone does not illuminate neighbors. The cap is eight lights; they stop contributing at the shadow-distance cutoff and have no point-light shadow maps. Author emissive surfaces with `emissiveIntensity > 1` for restrained HDR bloom.

## 4. PBR, rim, scattering and weather

Standard/Physical materials use Three.js's physically based metallic/roughness lighting. Imported GLB metal/roughness maps are retained. Metal roughness must stay above 0.08 to avoid unstable glints. Color textures use sRGB; normal, roughness, metallic and AO maps are linear. Never bake direct sunlight into albedo for the live renderer.

The material hook adds a small view-dependent rim before tone mapping. Start with strength 0.1–0.12, not a bright contour around every object. Team markers and selection rings remain separate gameplay UI in sprite matches.

Thin-surface wrap scattering is supplied for foliage/reeds and restrained skin accents. **This is not full volumetric or diffusion-profile SSS.** Real skin SSS would require thickness/profile inputs and a diffusion pass. The engine-neutral `graphics/shaders/SurfacePBR.hlsl` supplies documented GGX, Schlick Fresnel, rim, wetness, thin scattering and terrain blending math for a future HLSL port; the running browser renderer uses GLSL material hooks, not that HLSL include.

`pipeline.weather.wetness.value` ranges 0–1: darkens diffuse by at most 12% and reduces roughness toward a bounded wet response. `weathering.value` reduces metallic response and adds subtle localized corrosion. `createTerrainMaterial(pipeline)` blends grass/dirt with world-space procedural masks and rock from slope. Replace the procedural path mask with authored splat maps for production terrain. Use uniform asset scale or supply inverse-transpose world normals when adapting it to nonuniformly scaled terrain. These effects also run in live matches; the moisture slider updates the shared weather uniform. Classic sprites retain their baked textures.

## 5. Post effects and readability

Live 3D order: HDR scene → GTAO → subtle bloom → optional cinematic DOF → OutputPass (ACES + sRGB) → SMAA. SMAA avoids temporal ghosting on small troops. TAA is not enabled; correct TAA requires camera jitter, history rejection and per-object motion vectors, including animated limbs.

DOF defaults off. Set `{cinematic:true}` only for menus or cinematics and tune focus/aperture to the camera. RTS play keeps units and terrain sharply readable. Avoid color grading that washes out team colors; validate against both bright grass and dark fog.

The optional Classic-sprite GPU layer has no depth buffer: it applies gentle display-space grading and bright-pixel bloom, not SSAO, physical lights, SSS, DOF or CSM. Atlases are already tone mapped, so no second ACES transform is applied. It samples only the final fog-masked battlefield, cannot reveal hidden enemy meshes, and does not filter menus, text, minimap or command panels. Its contrast-gated edge smoothing is not SMAA/TAA. Sustained CPU presentation/upload cost over 8 ms for 90 frames automatically restores the Canvas path and DPR 1; this safeguard is not a GPU timer benchmark. Touch/picking coordinates remain on the original canvas.

## 6. Performance and asset standards

- `pipeline.addInstances(geometry,material,matrices)` uses one InstancedMesh per batch. Instance transforms are uploaded once; recompute bounds when moving a batch. Batch by material and spatial region so distant clusters can be culled.
- `pipeline.addLOD([{object:near,distance:0},{object:mid,distance:80},{object:far,distance:160}])` uses distance LOD. Author silhouettes first; reduce small bolts/scales at distance. The helper requires actual simplified meshes, not three copies of the same mesh.
- Shadow distance culling, bounded emissive lights and capped pixel ratio prevent unlimited work. High is an opt-in desktop preset, not a promise of 60 FPS on every GPU.
- Profile `pipeline.renderer.info` and browser GPU timings on target hardware. Aim for a 16.7 ms total frame at 60 Hz, reserve CPU time for simulation, and reduce AO/resolution before sacrificing unit readability.
- Give every original asset a shared scale, facing convention, pivot, UV density, normal-map convention and three LODs. Validate roughness and material response under neutral lighting before stylized grading. Art fidelity depends on authored geometry/textures/animation as much as the renderer.

## 7. Verification and publishing

Run `npm test`, `npm run build:graphics`, and `tools/check-live-battlefield.cjs` with your Playwright installation. The latter checks desktop/phone picking, projection, move/stop, rotation, Classic fallback and stable online snapshots. Verify no shader compile warnings, GL errors, missing assets, blank canvases, swapped vertical orientation, broken fog or input offsets. Test Low fallback, lost WebGL context and orientation changes. Compare dry/wet captures and all quality levels in the lab.

Pages publishes the checked-in bundle, graphics lab and game files. Render's static allowlist exposes the lab/bundle and GLB files in assets, not build-tool source. For online gameplay deploy the latest commit on Render as usual. Three.js and its bundled addons use the MIT license included under `licenses/Three-renderer-MIT.txt`; the supplied Covenant menu image is the user's original attachment.

## Rebuilding live source assets

Run `npm run build:exporter`, start the local game server, then run `ART_URL=http://localhost:3000 PLAYWRIGHT_MODULE=/path/to/playwright node tools/export-live-models.cjs`. Pass a comma-separated model-name list to export only changed assets. The exporter samples 16 poses per animated cycle, turns rigid hierarchy parts into a shared skeleton, merges by material response using vertex colors, reduces primitive tessellation and embeds 128px detail textures. Tools reuse the original model source, not atlas images. No exporter code runs during matches.

Models load on demand. While a newly required model loads, the complete sprite frame remains playable; no missing unit is silently invisible. Offscreen instances release bone textures after 45 seconds. Renderer changes/menu exit release scene buffers and textures. WebGL context loss restores the classic path. The 106 GLBs total approximately 104 MB on disk, but the game fetches only assets needed in view. This tradeoff favors compatibility and original geometry; future KTX2/Meshopt compression can reduce network cost further.

Typical character models use 10–16 material batches instead of around 100 individual meshes; the Carrion Rider has 22 batches. Benchmark with `KawBattlefield.stats` (all composer/shadow passes are counted), not just the final post-pass draw call. Fixed Low/Balanced/High profiles remain preferable to promising a frame rate without target-device GPU measurements.
