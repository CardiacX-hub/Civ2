# Civ2 — Kingdoms at War


A dependency-free 2D browser RTS. Run `npm start`, then open the served game on port 3000. Run `npm test` for simulation smoke tests.

Choose the human **Dawnward** or the orc/troll **The Dominion**, customize banners, and play against one or two AI opponents. Each side begins with a stronghold and four collectors. Victory requires destroying every opposing stronghold; losing your own ends the game.

Click or drag to select friendly units. Shift-click adds to selection. **Right-click** the map to move selected units. Choose **Move** (or press **M**) and right-click to force movement even when pointing at a target. Left-click selects units and never issues movement. Use **Attack / gather** to target an enemy, resource, or construction site. Right-click an enemy to attack, a resource to gather, or a damaged Stronghold to repair. A destination ring and message confirm the order. Collectors choose buildings from the right-hand construction section. Buildings begin as construction sites and require a nearby collector until completed. Finished production buildings train units through timed queues. WASD or arrows pan the camera; clicking the minimap recenters it. Escape cancels placement. Pause freezes the simulation.

- Stronghold: collectors.
- Infantry Lodge: durable melee, balanced ranged, and fragile high-damage ranged infantry.
- Siege Works: slow artillery with splash damage.
- Sky Roost: fast flying units.
- Hero Sanctum: one unique faction hero. Dawnward Sun Marshal grants 30% damage reduction within 190 units. Dominion Stormcaller grants 30% attack damage within 190 units.
- Harvest Guild: three gathering-speed upgrades.
- Infantry Armory: three infantry attack and armor upgrades.
- Artillery Foundry: three artillery damage upgrades.

The unexplored map stays hidden. Explored areas dim outside friendly sight; enemies only appear when currently visible, with red dots on the minimap. AI collects, constructs, trains, upgrades, and attacks after building an army. Ground units route around walls; other scenery uses direct movement; flying units have distinctive visuals and faster movement, and all combat units can attack air targets. Resources are credited while collectors gather rather than transported to base.

No accounts, secrets, external services, or build step are required.

## Publish and play on GitHub Pages

The game runs directly in a browser; GitHub Pages does not need Node.js.

1. Open this repository on GitHub and go to **Settings → Pages**.
2. Under **Build and deployment**, select **GitHub Actions** as the source.
3. Open **Actions → Publish game to GitHub Pages → Run workflow** on `main`. Subsequent pushes to `main` publish automatically.
4. When deployment completes, open **https://cardiacx-hub.github.io/Civ2/** to play.

For local play, run `npm start` and visit `http://localhost:3000`.

## Unit artwork and rally points

Units have faction-specific armor, leather details, weapons, walking cycles, and flying mounts with animated wings. Collectors swing axes while chopping lumber and pickaxes while mining gold. Melee units swing their weapons; ranged units fire arrows, spears, bullets, or magical bolts; siege engines recoil or launch rocks. Animations pause with the simulation.

Select a Stronghold, Infantry Lodge, Siege Works, Sky Roost, or Hero Sanctum and choose **Set rally point**, then click the destination. Right-clicking with a production building selected also sets its rally point. A flag and dashed line identify the destination while the building is selected. Newly trained units automatically move there. A Stronghold rallied to a visible tree or gold deposit assigns its new collectors to gather that resource. **Clear rally point** restores spawning beside the building. Existing units keep their current orders.

## Defenses and battle effects

Select a collector to build a **Watchtower** (140 gold, 160 lumber) or **Siege Bastion** (280 gold, 240 lumber). Watchtowers have 1,000 health and fire every 1.1 seconds for 22 damage within 290 units, including at flying enemies. Siege Bastions have 1,600 health and fire every 2.6 seconds for 60 damage within 340 units, with reduced splash damage to nearby enemies. Defenses target enemies automatically without friendly fire. Select a defense to see its attack radius. AI opponents also build defenses. Human defenses use stone battlements; Dominion defenses use timber, spikes, and tribal banners.

Detailed troop artwork includes riveted armor, leather aprons, ammunition pouches, quivers, mount scales, and siege machinery. Attacks display swing trails, impact sparks, muzzle smoke, magical particles, and explosions. Chopping produces wood chips; mining produces gold and stone sparks. Effects respect fog of war and pause, and their count is capped for performance.

## Group selection and scenery

Double-click a friendly unit to select **all living friendly units of that exact type currently on screen**. Offscreen units are excluded. Shift-double-click adds that type to your current selection. Enemy entities are excluded. Double-clicking a friendly building selects all onscreen buildings of its exact type. You can click the head or body of a unit to select it.

The battlefield features cached grass and soil textures, moss, pebbles, flowers, varied tree canopies, bark, and faceted gold deposits. Buildings feature stone or timber courses, tiled roofs, doors, windows, moving faction banners, and specialized details such as turning harvest-mill blades, glowing sanctum crystals, smoking forge chimneys, and sky-roost nests.

## Directional poses, attack targeting, and walls

Troops are now polygon-based 3D models, projected into the 2D battlefield with directional lighting and depth-sorted faces. Their bodies rotate continuously, including all eight compass directions. Articulated limbs and equipment animate during movement, work, and attacks.

With troops selected, right-click an enemy to attack, or use the Attack / gather button and click an enemy. Right-click also works. Hovered enemies and active attack targets show red rings; confirmed attack orders have a red destination marker. Targets remain marked while selected troops attack them and the enemy is visible.

Collectors can build **Wall** segments for 15 gold and 35 lumber each. Human walls have stone battlements; Dominion walls have spiked timber. Placement snaps to a 32-unit grid and stays active for consecutive segments; press Escape to finish. Each segment has 700 health and can be destroyed. Walls block ground troops of every faction; ground troops find paths around them, while flying troops pass over. Leave gaps for access—fully enclosed areas cannot be reached by ground troops until a wall is destroyed. Ranged weapons can fire over walls.

## Construction, spacing, and the global work queue

Units maintain spacing rather than stacking at a shared destination. Ground and air units occupy separate movement layers. Group commands use spaced formation destinations.

Select a collector and place a building site. The assigned builder travels to it and must remain nearby to advance construction; moving the builder away or losing it pauses progress. Right-click an unfinished friendly site with a collector selected to resume. Multiple wall sites queue on the assigned collector. Walls take 10 seconds each; other buildings take 30–65 seconds of on-site work. Incomplete buildings cannot train, research, attack, or block movement.

Upgrades take 25, 35, or 45 seconds and apply only when finished. Duplicate research of the same upgrade is prevented. The left **Production & Work** panel lists every friendly construction site, training queue entry, and active upgrade with a progress bar and timer. Resource gathering is excluded. Use its −/+ button to minimize or expand it. Queued troops show their estimated waiting time. Construction without a nearby builder displays its paused state.

Double-left-click a friendly building to select every friendly building of that type currently on screen. Troop training commands are routed to the selected completed building with the shortest queue. Setting a rally point applies to all selected production buildings.

## Economy, sequential tasks, minimap orders, and fire arrows

- Collectors take **10 seconds** to train. Each player begins with a **16-collector cap**, including collectors already queued at all Strongholds. Harvest Guild capacity research adds four slots per tier, up to 28. Losses free capacity.
- Base harvesting is **0.75 gold or lumber per second**, with the Harvest Guild's existing upgrades increasing the rate. A tree supports one active collector; additional collectors seek nearby free trees or wait. Gold supports multiple collectors.
- **Shift-right-click** appends a task. Move waypoints finish on arrival, attacks finish when the target dies, gathering finishes when the resource runs out, and construction finishes when the site completes. Ordinary orders replace the sequence. Stop clears it. Shift placing a construction site queues it after current work.
- **Right-clicking the minimap with troops selected** sends them to that map location. Shift adds the minimap destination to their sequence. Right-click works too. Left-click pans the camera; **Alt-left-click** always pans. Production-building rally points can also be placed through the minimap using Set rally point or right-click.
- Snowcapped **mountain ranges** block construction and ground movement. Ground troops route around them; flying units pass over. Fog of war hides unexplored ranges, and discovered ranges appear on the minimap.
- Human players can research **Fire arrows** at the Infantry Armory for **200 gold, 150 lumber, and 35 seconds**. Longbow Rangers then fire flaming arrows that ignite enemies for **5 damage per second for 4 seconds**. Repeated hits refresh the burn rather than stacking it. Other infantry retain their normal weapons.

## Allegiance banners and lower starting resources

Every player now starts with **100 gold and 100 lumber**. Base gathering has been reduced another 75%, from 3 to **0.75 resources per second**; Harvest Guild upgrades still multiply that rate. Select a collector to order it to a nearby resource. Its selection ring turns **green while actively gathering**, and returns to its normal color when traveling, waiting, or doing another task.

The faction menu identifies your chosen allegiance in a banner. Dawnward's card shows an animated, attack-ready knight beneath a golden sun; the orc/troll faction is named **The Dominion** throughout the menu and opponent selectors, with an armored orc carrying an axe on its menu banner. Menu animation respects the browser's reduced-motion preference.

The menu portraits use larger, layered artwork with armor plates, chainmail, rivets, engraved weapons, weathering, heraldry, and facial details. The knight braces behind his shield with his sword ready; the orc snarls and brandishes a raised axe. Both characters shift their weight and move their weapons continuously, with animated cloth and drifting particles. Reduced-motion settings preserve static combat poses.


## Battlefields, progression, and production controls

After faction selection, choose **Shattered Highlands**, **Frostbound Frontier**, or **Ember Canyon**. Each has different terrain colors and mountain positions. Players receive shuffled corner starting locations every match; the camera begins at your own Stronghold.

Strongholds can be upgraded **three times**, from level 1 through level 4, gaining health and visible tower details. Tier 2 research requires a completed level 2 Stronghold; tier 3 requires level 3. These requirements also apply to Harvest Guild collector-capacity research.

Use **Cancel** beside a training or research job in the Production & Work panel to stop it and receive its full gold and lumber cost back. Other queued units remain in order.

Selecting a character displays damage, attack range, speed, armor, attack interval, and vision, plus gathering rates or researched fire-arrow effects where applicable. Collector construction buttons include small building illustrations. Buildings feature shaded side walls, roof depth, masonry, and equipment specific to their purpose. Construction sites progress through foundations, walls, scaffolds, and roof timbers with material piles, builder effects, and timers.

The menu Dominion warrior actively swings a sharp spiked axe; the Dawnward knight holds a planted combat stance. Reduced-motion settings disable menu animation.

## Combat poses and match clock

Menu warriors keep their bodies and feet planted. The Dominion orc performs a fast overhead axe chop with a windup and recovery; the knight holds a steady sword-and-shield guard. Buildings have weathered masonry, roof seams, buttresses, recessed doors, iron hinges, lamps, and facility-specific extensions. Units have additional layered armor, straps, seams, and fasteners. The header match clock counts active gameplay, beginning after the countdown and stopping during pause or after victory/defeat.

## Stylized battlefield artwork

Troops use exaggerated 3D mesh proportions with bulky Dominion fighters, broad Dawnward armor, oversized spiked axes, large heraldic shields, and team-colored shoulder tabs and back panels. Painted edge highlights complement directional shading. Attacks follow windup, rapid strike, and recovery phases; torsos and arms follow through while stationary feet remain planted. Archers draw their bowstrings, heroes raise glowing staves, and factions have different walking cadences. Facility silhouettes include workshop chimneys, lodge wings, sanctum spires, roost towers, and Dominion perimeter spikes. The menu orc uses a coordinated torso-and-axe attack with fixed legs; the knight holds guard with a subtle grip adjustment.

## Stronghold repairs and Dawnward castle

Select peasants, choose **Repair Stronghold**, then left-click your damaged Stronghold. Right-clicking a damaged friendly Stronghold also assigns repairs. Workers travel into range, hammer, and restore **20 health per second each**, without a resource cost. Repairs stop at full health; Shift appends repairs to an existing task sequence. Move mode continues to issue only movement orders.

The human Stronghold now has a dedicated castle design: a tall central keep, four roofed towers, crenellated walls, an arched portcullis, a stone ramp, illuminated windows, torches, and team banners. Dawnward knights have closed visors and colored helmet plumes; Dominion armored fighters have larger shoulder spikes and horned helmets.

## Frontier character transfer and hero powers

Ground characters now use animation sheets rendered from the actual 3D models in your **Frontier** game: paladin knights, berserker orcs, rangers, casters, and monk-style workers. Dominion variants have green skin and tribal armor colors. Each character has eight facing directions and 16 frames each for idle, walking and attacking. Team pennants identify ownership. Siege engines and flying units keep their purpose-built RTS models. WebP artwork is bundled locally and requires no connection to Frontier while playing.

Select your hero to activate a Frontier-inspired power. **Aegis Shield** protects nearby Dawnward troops for five seconds, halving incoming direct combat damage. **Dominion Cleave** deals 55 damage to enemies within 150 units. Each power has a 20-second cooldown. These abilities complement the existing faction auras; match rules, resource economy, building progression and RTS controls remain in place.

## Organized commands, production queues, and tactical AI

Peasant actions are grouped into **Unit Commands**, **Defenses**, **Troop Production**, **Economy**, and **Research**. Selecting production buildings displays a separate queue for each building, including training progress, waiting times, active research, and cancellation controls. Unit buttons show **gold, lumber, and training time**. The global Production & Work queue remains available.

Right-click movement replaces an attack or current task immediately; **Shift-right-click** appends it instead. Units follow explicit Move orders without stopping to acquire enemies. **Stop** clears combat, animation, movement, and queued tasks, and prevents new attacks until another order is given. **Hold position** still allows attacks within weapon range.

Choose **Easy**, **Normal**, or **Hard** before launching a match. AI balances gold/lumber collectors, completes one construction project at a time, places defenses, fields mixed armies, counters observed air units, repairs its Stronghold, retreats wounded soldiers, and scouts to discover enemy buildings. Difficulty adjusts collector targets, decision frequency, retreat thresholds, and raid timing. Opponents receive no extra starting resources or resource multipliers.

Facility artwork now uses continuous shaded roof planes, clean masonry courses, restrained outlines, distinct equipment, and coherent foundations; defensive towers have shaded side walls and plinths.

## High-resolution rendering and reliable Stop controls

Battlefield and terrain rendering use **2× resolution on each axis**, giving four times the rendered pixels at the same map scale. Frontier artwork now uses **144×192 pixels per frame** instead of 96×128 (2.25× the pixels), with **16 frames** per animation instead of eight. Eight facing directions are retained. WebP sheets reduce download size while preserving transparency.

The command panel and construction catalog are independent panels. Unit commands stay visible while peasants browse buildings. The field manual has been removed. Selected heroes display their aura's effect, percentage, radius, and troop-only restriction.

**Stop** activates on press and puts selected troops into a persistent idle state, clearing attack targets, animation, movement and queued tasks. **X** is its keyboard shortcut. Infantry stop damaging building targets; a new order releases the idle state. Shift orders on stopped troops execute immediately.

When peasants are selected, their bottom action panel shows commands on the left and construction choices on the right, separated by a vertical gold line. The field manual has been removed.

### Battalion update

Equipment is now rendered as part of each character's hand hierarchy in all eight directions and 16 animation frames. Workers switch between an axe for lumber, a pick for gold, and a hammer for construction or repair. The Royal Marksman carries a two-handed musket with no bow. Units, artillery vehicles, buildings, walls, construction stages, trees, mountains and timber-framed gold mines share the Frontier renderer's painted PBR materials and lighting.

Discovered enemy buildings keep red square markers on the minimap and a red last-seen marker in the battlefield fog. Enemy units appear only while visible. A remembered building disappears when its location is revisited and its destruction is confirmed.

Selected groups are listed under Commands, organized by unit type with individual IDs, health values and health bars. Formation buttons sit to the right of the command buttons: **Battle line**, **Compact ranks**, **Spearhead**, and **Spread out**. Choosing a formation orders the group to assemble facing its current heading, then hold position. Subsequent right-click movement uses that formation facing the destination; melee troops occupy the front ranks, archers follow, and marksmen/artillery stay farther back. Shift-right-click still queues movement. Individual troops pursue targets during combat; formations organize assembly and movement destinations.

The Sky Roost trains a second flying unit: the Dawnward's **Fire Phoenix** and the Dominion's **Dominion Dragon**. Each costs 280 gold and 180 lumber, takes 20 seconds to train, has 340 health, and breathes fire for 42 base damage plus a non-stacking 5 damage/second burn lasting 4 seconds. Both ignore ground obstacles, follow rally points and can be trained by the AI.

Artwork regeneration is available through `tools/render-art.cjs` using Playwright, Chromium, and a running local game server. `tools/frontier-source.js` preserves the user's Frontier renderer and its Three.js MIT license; `tools/frontier-art-extension.js` contains the Kingdoms mesh additions. The renderer is used offline to create the WebP assets and is not shipped as a runtime dependency.
