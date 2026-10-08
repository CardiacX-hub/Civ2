# Custom browser engine visual-quality setup

Kingdoms at War currently draws pre-rendered 3D atlases into a Canvas 2D battlefield. A modern live-geometry pipeline is supplied separately, with a runnable calibration scene at `graphics/lab.html`. This is a working migration foundation, not a claim that the existing sprite match has AAA lighting or that its assets have been rebuilt in 3D. A renderer cannot recover hidden geometry, physical materials, normals or depth from a color sprite.

## 1. Run and inspect

1. Use Node 22 or newer. Run `npm ci` then `npm start`.
2. Open `http://localhost:3000` (or your configured PORT). Choose Settings → Visual quality. Low uses Canvas directly at a maximum device-pixel ratio of 1; Balanced/High add GPU grading, restrained bloom and contrast-gated edge smoothing with maximum ratios 1.25/1.5. Phones default to Low. WebGL failure/context loss preserves Canvas gameplay and controls.
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

The custom source geometry used by the atlas tools is not automatically present at runtime. Export your original meshes to GLB to use this pipeline across those assets. Keep sprite gameplay intact until a 3D camera, picking, animation, fog masking and terrain collision integration have been verified. The rendering lab includes no RTS networking or fog logic. Do not overlay its scene on an authoritative multiplayer match without implementing the same visibility rules.

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

`pipeline.weather.wetness.value` ranges 0–1: darkens diffuse by at most 12% and reduces roughness toward a bounded wet response. `weathering.value` reduces metallic response and adds subtle localized corrosion. `createTerrainMaterial(pipeline)` blends grass/dirt with world-space procedural masks and rock from slope. Replace the procedural path mask with authored splat maps for production terrain. Use uniform asset scale or supply inverse-transpose world normals when adapting it to nonuniformly scaled terrain. These material effects run in the 3D lab; existing sprite materials retain their baked textures.

## 5. Post effects and readability

Live 3D order: HDR scene → GTAO → subtle bloom → optional cinematic DOF → OutputPass (ACES + sRGB) → SMAA. SMAA avoids temporal ghosting on small troops. TAA is not enabled; correct TAA requires camera jitter, history rejection and per-object motion vectors, including animated limbs.

DOF defaults off. Set `{cinematic:true}` only for menus or cinematics and tune focus/aperture to the camera. RTS play keeps units and terrain sharply readable. Avoid color grading that washes out team colors; validate against both bright grass and dark fog.

The Canvas GPU layer has no depth buffer: it applies gentle display-space grading and bright-pixel bloom, not SSAO, physical lights, SSS, DOF or CSM. Atlases are already tone mapped, so no second ACES transform is applied. It samples only the final fog-masked battlefield, cannot reveal hidden enemy meshes, and does not filter menus, text, minimap or command panels. Its contrast-gated edge smoothing is not SMAA/TAA. Sustained CPU presentation/upload cost over 8 ms for 90 frames automatically restores the Canvas path and DPR 1; this safeguard is not a GPU timer benchmark. Touch/picking coordinates remain on the original canvas.

## 6. Performance and asset standards

- `pipeline.addInstances(geometry,material,matrices)` uses one InstancedMesh per batch. Instance transforms are uploaded once; recompute bounds when moving a batch. Batch by material and spatial region so distant clusters can be culled.
- `pipeline.addLOD([{object:near,distance:0},{object:mid,distance:80},{object:far,distance:160}])` uses distance LOD. Author silhouettes first; reduce small bolts/scales at distance. The helper requires actual simplified meshes, not three copies of the same mesh.
- Shadow distance culling, bounded emissive lights and capped pixel ratio prevent unlimited work. High is an opt-in desktop preset, not a promise of 60 FPS on every GPU.
- Profile `pipeline.renderer.info` and browser GPU timings on target hardware. Aim for a 16.7 ms total frame at 60 Hz, reserve CPU time for simulation, and reduce AO/resolution before sacrificing unit readability.
- Give every original asset a shared scale, facing convention, pivot, UV density, normal-map convention and three LODs. Validate roughness and material response under neutral lighting before stylized grading. Art fidelity depends on authored geometry/textures/animation as much as the renderer.

## 7. Verification and publishing

Run `npm test`, `npm run build:graphics`, and browser checks on desktop/phone. Verify no shader compile warnings, GL errors, missing assets, blank canvases, swapped vertical orientation, broken fog or input offsets. Test Low fallback, lost WebGL context and orientation changes. Compare dry/wet captures and all quality levels in the lab.

Pages publishes the checked-in bundle, graphics lab and game files. Render's static allowlist exposes the lab/bundle and GLB files in assets, not build-tool source. For online gameplay deploy the latest commit on Render as usual. Three.js and its bundled addons use the MIT license included under `licenses/Three-renderer-MIT.txt`; the supplied Covenant menu image is the user's original attachment.
