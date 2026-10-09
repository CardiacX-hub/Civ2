# Frontier character artwork

These WebP animation sheets are rendered directly from the character models in the user's Frontier game at https://cloudhop-gan7b0.katie-mentz.chatgpt.site/renderer3d.js (reference retrieved October 5, 2026), at the user's request. They reuse its paladin, berserker, ranger, wizard, necromancer and monk appearances. Dominion variants use green skin and tribal armor colors. The Frontier renderer is used during asset capture; its bundled rendering engine is not shipped or loaded by Kingdoms at War.

Each sheet has 144×192 pixel cells: 16 animation frames horizontally; idle, walk and attack groups vertically, each containing eight facing directions. Direction zero faces east. The browser uses static sheets for efficient crowded RTS battles and retains procedural models for siege engines and flying units.

The battalion update adds hand-attached worker axe/pick/hammer variants, a bow-free marksman musket, artillery vehicles, gryphon/wyvern/phoenix/dragon wing animation, and PBR world sprites. All use the same Frontier light rig, painted material maps, and render settings. Character atlases remain 2304×4608 (16 frames × 8 directions × 3 action phases); world sprites are 384×384 with transparency. The offline renderer and mesh additions are in `../tools/`.

The Covenant update adds original procedural shell armor, woven reed clothing, clay-and-shell architecture, six-legged beetles and burrowers, moths and wasps, and specialist models. The meshes are defined in `../tools/covenant-art.js` and captured through the same painted renderer. These designs do not import artwork from Warcraft. New atlases retain eight directions and sixteen frames per action phase; the runtime uses cached WebP sheets and never loads the offline 3D renderer.

The Covenant infantry atlases `frontier-cov-shellguard`, `frontier-cov-archer` and `frontier-cov-resin` now contain original walking oak, venom viper and five-headed fire hydra meshes respectively. These replace the earlier humanoid meshes; their corresponding portraits are regenerated from the same models.

`covenant-menu-battle.jpg` is the exact user-supplied 1280×720 walking-tree and hydra battlefield image. It replaces the procedural faction-card illustration.

`model-*.glb` (108 assets) contain the original live source meshes, batched PBR materials with embedded normal/roughness detail, and rigid-part skeleton animation where applicable. They are generated from the same authored model code as the atlases; atlas/portrait files remain for Classic rendering and command UI.

The 20261008-living-fog revision rebuilds `cov-shellguard`, `cov-archer` and `cov-resin` models, atlases and portraits with bark/foliage detail and continuous reptile scale textures. Hydra spines are original low-sided meshes attached to its animated necks and torso.

The winged-vermin revision adds original articulated wasp/green-stinger variants, an eight-legged fang-bearing spider, and a flying centipede. Source geometry is in `tools/covenant-art.js`; `tools/render-arthropod-sheet.cjs` captures the wasp studio sheet from the same game mesh.

The stone-and-web revision replaces `cov-captain` with the original Granite Guardian mesh and boulder-throw animation, authored in `tools/covenant-art.js`. Its GLB, portrait and Classic atlas share the same source geometry.

The Rootspire update replaces all seventeen Covenant building models and their Classic images with original ivory-and-gold woodland architecture based on the user’s castle reference. All four stronghold tiers have progressively larger geometry. Architecture texture resolution is 256 pixels; geometry is batched into at most eight materials per building.

The woodland collector update replaces all five `cov-worker` task variants with original bark-and-leaf collector meshes inspired by the user's reference: carved wooden faces, emerald eyes, branching crowns, leaf armor, ivory/green tree-emblem clothing, woven packs, and attached tools. Their Classic atlases and portraits use the same source models and retain eight directions and sixteen frames per action.

The iron-and-wind update replaces `cov-beetle` with an original six-legged armored mechanical beast and `cov-weaver` with an original animated wind elemental. Corresponding atlases and portraits use the same meshes. `world-trap-covenant` is the translucent wind trap; `world-trap-resin` preserves the previous resin model and sprite for Dominion trappers. The asset set now contains 109 live GLB models.
