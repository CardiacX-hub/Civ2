# Frontier character artwork

These WebP animation sheets are rendered directly from the character models in the user's Frontier game at https://cloudhop-gan7b0.katie-mentz.chatgpt.site/renderer3d.js (reference retrieved October 5, 2026), at the user's request. They reuse its paladin, berserker, ranger, wizard, necromancer and monk appearances. Dominion variants use green skin and tribal armor colors. The Frontier renderer is used during asset capture; its bundled rendering engine is not shipped or loaded by Kingdoms at War.

Each sheet has 144×192 pixel cells: 16 animation frames horizontally; idle, walk and attack groups vertically, each containing eight facing directions. Direction zero faces east. The browser uses static sheets for efficient crowded RTS battles and retains procedural models for siege engines and flying units.

The battalion update adds hand-attached worker axe/pick/hammer variants, a bow-free marksman musket, artillery vehicles, gryphon/wyvern/phoenix/dragon wing animation, and PBR world sprites. All use the same Frontier light rig, painted material maps, and render settings. Character atlases remain 2304×4608 (16 frames × 8 directions × 3 action phases); world sprites are 384×384 with transparency. The offline renderer and mesh additions are in `../tools/`.

The Covenant update adds original procedural shell armor, woven reed clothing, clay-and-shell architecture, six-legged beetles and burrowers, moths and wasps, and specialist models. The meshes are defined in `../tools/covenant-art.js` and captured through the same painted renderer. These designs do not import artwork from Warcraft. New atlases retain eight directions and sixteen frames per action phase; the runtime uses cached WebP sheets and never loads the offline 3D renderer.
