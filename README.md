# Civ2 — Kingdoms at War


Rendering setup, shader modules, texture formats, controls and performance budgets: [RTS rendering guide](graphics/RENDERING.md).

A browser RTS with live 3D models and an optional Classic renderer. Run `npm start`, then open the served game on port 3000. Run `npm test` for simulation smoke tests.

Choose the human **Dawnward**, the orc/troll **The Dominion**, or the wilderness clans of **The Verdant Covenant**, customize banners, and play against up to five AI opponents. Each side begins with a stronghold and four collectors. Victory requires destroying every opposing stronghold; losing your own ends the game.

Click or drag to select friendly units. Shift-click adds to selection. **Right-click** the map to move selected units. Choose **Move** (or press **M**) and right-click to force movement even when pointing at a target. Left-click selects units and never issues movement. Use **Attack / gather** to target an enemy, resource, or construction site. Right-click an enemy to attack or a resource to gather. Carrying collectors turn in their cargo when you right-click your completed Stronghold or Resource Outpost. Use Repair for damaged Strongholds. Deselect (V) clears selection without stopping orders. A destination ring and message confirm the order. Collectors choose buildings from the right-hand construction section, organized into Economy, Troops, Defense and Research tabs. Each category displays at most four cards with pictures, both resource costs and tier requirements. Building shortcuts work across categories. Buildings begin as construction sites and require a nearby collector until completed. Finished production buildings train units through timed queues. WASD or arrows pan the camera; clicking the minimap recenters it. Escape cancels placement. Pause freezes the simulation.

Select collectors and **left-click a damaged or destroyed bridge** to repair it (tap on phones). Selected artillery exposes **Bombard bridge** under Artillery powers; choose it, then right-click a bridge or tap on a phone. Control groups are docked above the bottom command bar. Battle information, saves, and replays are in Settings. The top toolbar stacks compact idle-collector and all-fighter selectors. Income is docked to the upper-left edge; expand it for warnings and map pings. The global production/work queue is hidden by default; enable it in Settings → Battlefield & sound. Selected buildings retain their individual queues with cancellation controls; rally points can be set with right-click, and rally/cancel shortcuts remain available.

Selected troops now show numbered destinations and dotted routes for their current and Shift-queued orders. Turn these off in Settings → Readability & tactical overlays. Attack Move (A) fights enemies encountered on the way. When a ground route fails, selection information explains the blockage. Squads use separate approach positions around targets and match their slowest ground member while traveling; flying troops retain their own speed. Hard AI expands to a second Infantry Lodge earlier and maintains up to three pending troops per production building, subject to resources, Stronghold prerequisites and supply.

Unit role cards explain counters: close assault units gain 15% damage against ranged infantry, Dominion spears gain 25% against cavalry and iron beasts, and existing anti-air, coordinated ranged and siege bonuses remain. Click attack alerts to focus their location. Sounds are synthesized original effects with separate wood/metal gathering impacts, weapon timbres and faction acknowledgments. Battle reports include a fighter-count graph, peak army size, spending, Stronghold upgrades and major losses. Graphics presets are Performance, Balanced and High; the optional FPS display helps compare them. Grass uses larger pointed leaves, 256-pixel textures and filtered mipmaps with the same instanced triangle budget.

New faction specialists have original painted models, animated sprites and portraits:

| Faction | Unit / production building | Stronghold | Power |
| --- | --- | --- | --- |
| Dawnward | Siege Marshal / Siege Works | 2 | Deploy Aegis: 35% ranged protection for artillery within 140 for 8 seconds. |
| Dawnward | Storm Lancer / Infantry Lodge | 3 | Clear-ground charge: 65 impact damage and a one-second interruption. |
| Dominion | Chainbreaker / Infantry Lodge | 2 | Hooked Chain: pull a ground enemy along clear terrain, dealing 25 damage. |
| Dominion | Ash Shaman / Hero Sanctum | 2 | Ash Veil smoke; Blood Pact trades 40 health for 15% nearby allied damage for 8 seconds. |
| Verdant | Root Colossus / Infantry Lodge | 3 | Roots travel underground and erupt under ground targets. Root Down grants 20% damage, longer snaring and 20% vulnerability to artillery. Move uproots it. |
| Verdant | Bloom Weaver / Hero Sanctum | 2 | Plant destructible healing blooms or poisonous pods. Plants mature in 1.5 seconds, last 25 seconds, and share a 12-second planting cooldown; maximum six per faction. |

Standard Bearers are 50% larger visually. Dawnward phoenixes become glowing ashes on death and revive after two simulation seconds at half health. Enemy ground units within the ash pile trample it and prevent revival; allied units, buildings and flyers do not. Pending ashes retain the phoenix's supply reservation. Ashes, roots, cooldowns and planting modes are authoritative in online play and retained by saved matches. Destroyed phoenixes still count as losses; rebirth does not count as a newly trained fighter.

- Stronghold: collectors.
- Infantry Lodge: durable melee, balanced ranged, and fragile high-damage ranged infantry.
- Siege Works: slow artillery with splash damage.
- Sky Roost: fast flying units.
- Hero Sanctum: choose one hero for the entire match. Dawnward and Dominion have three choices; Verdant has Granite Guardian and Tideborn Elemental. Dawnward Sun Marshal grants 30% damage reduction within 190 units. Dominion Stormcaller grants 30% attack damage within 190 units.
- Harvest Guild: separate lumber and gold gathering upgrades, each with three levels.
- Infantry Armory: separate melee, ranged, and marksman/shadow-hunter training, with three ranks each.
- Artillery Foundry: three artillery damage upgrades.

The unexplored map stays hidden. Explored areas dim outside friendly sight; enemies only appear when currently visible, with red dots on the minimap. AI collects, constructs, trains, upgrades, and attacks after building an army. Ground units route around walls, cliffs, trees and rivers; flying units have distinctive visuals and faster movement, and all combat units can attack air targets. Collectors transport resources to a completed Stronghold or Resource Outpost before they are credited.

Single-player games require no accounts, secrets, external services, or build step. Online multiplayer requires the shared Node.js lobby server described below.

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

Equipment is now rendered as part of each character's hand hierarchy in all eight directions and 16 animation frames. Workers switch between an axe for lumber, a pick for gold, and a hammer for construction or repair. The Musketeer carries a two-handed musket with no bow. Units, artillery vehicles, buildings, walls, construction stages, trees, mountains and timber-framed gold mines share the Frontier renderer's painted PBR materials and lighting.

Discovered enemy buildings keep red square markers on the minimap and a red last-seen marker in the battlefield fog. Enemy units appear only while visible. A remembered building disappears when its location is revisited and its destruction is confirmed.

Selected groups are listed under Commands, organized by unit type with individual IDs, health values and health bars. Formation buttons sit to the right of the command buttons: **Battle line**, **Compact ranks**, **Spearhead**, and **Spread out**. Choosing a formation orders the group to assemble facing its current heading, then hold position. Subsequent right-click movement uses that formation facing the destination; melee troops occupy the front ranks, archers follow, and marksmen/artillery stay farther back. Shift-right-click still queues movement. Individual troops pursue targets during combat; formations organize assembly and movement destinations.

The Sky Roost trains a second flying unit: the Dawnward's **Fire Phoenix** and the Dominion's **Dominion Dragon**. Each costs 280 gold and 180 lumber, takes 20 seconds to train, has 340 health, and breathes fire for 42 base damage plus a non-stacking 5 damage/second burn lasting 4 seconds. Both ignore ground obstacles, follow rally points and can be trained by the AI.

Artwork regeneration is available through `tools/render-art.cjs` using Playwright, Chromium, and a running local game server. `tools/frontier-source.js` preserves the user's Frontier renderer and its Three.js MIT license; `tools/frontier-art-extension.js` contains the Kingdoms mesh additions. The renderer is used offline to create the WebP assets and is not shipped as a runtime dependency.

### Frontier hero and mining update

The Hero Sanctum now offers Frontier-inspired Paladin powers for the Dawnward and Berserker powers for the Dominion. All 14 nodes have three research ranks, require Stronghold level 3, and show their prerequisites and effects. Select your hero to cast researched powers; powers have cooldowns.

Gold miners enter the mine, load a 25-gold sack, emerge soot-covered, and deliver it to a friendly Stronghold before the treasury receives gold. Shift orders wait until delivery; Stop or an ordinary replacement order interrupts mining. Workers carrying gold have a Deliver gold command. Lumber retains its slow harvesting rate.

Melee infantry now move at 105 speed and have 20% base damage reduction, in addition to researched armor. Artillery damage increased from 65 to 95. Phoenix artwork has additional body, crest and wing feathers.

Open **Settings · Keybindings** from the main menu, or **Settings** during play. Click a shortcut and press its replacement; settings persist in this browser. Settings pause the match and restore its previous pause state when closed. WASD and arrow keys remain reserved for camera movement. Building-specific shortcuts are contextual.

Build revision: `20261005-frontier-tech`.

### Phone and tablet controls

- Tap a friendly unit or building to select it. Double-tap to select the same type on screen.
- With units selected, tap ground, enemies, resources or construction sites to move, attack, gather or build. Use **Order** to target friendly sites or give a minimap order.
- Drag the battlefield to pan the camera. Use **Group**, then drag a selection box, to select multiple units. **Pan** lets you explore without issuing orders.
- **Queue** makes new orders follow existing tasks and lets you add units to your selection. **Stop** cancels selected units' tasks.
- Use **Orders**, **Build**, **Map**, and **Unit info** below the battlefield to switch panels. Tap the minimap to reposition the camera; select **Order** first to send units there.

Touch controls support portrait and landscape layouts. Desktop mouse controls remain available. Build: `20261006-touch`.

Phone panel scrolling is contained within the game, including when reaching the top or bottom of construction options. Gold carrying capacity is now 25 per trip; extraction remains 0.75 gold per second before Harvest Guild upgrades. Build: `20261006-touch-scroll`.

### Highlands update — 20261006-highlands

Each map now has buildable plateaus at two heights. Ground troops reach them through marked ramps and route around cliff edges; flying troops cross cliffs and adjust flight height. More trees and denser painted grass detail fill the map. Tree trunks block ground movement, and depleted trees open paths.

Collectors carry up to 25 lumber or gold and deliver it to the nearest completed friendly Stronghold or **Resource Outpost** (90 gold, 70 lumber, 25-second construction). Lumber is credited only after delivery. Mines admit at most five workers across all factions, and mining is now 2.5 gold per second before Harvest Guild upgrades: a full gold load takes 10 seconds rather than about 33 seconds. Lumber retains its existing slower rate.

All buildings have 50% more base health. Strongholds at level 3 and above gain two independently firing defenses. Selecting a worker and tapping or left-clicking an unfinished friendly site resumes construction; Order mode and right-click remain available for explicit orders.

Dominion architecture uses tusks, timber defenses, skull ornaments and distinct facility silhouettes. Roofs have separate shingle meshes. Peons have square heads and pointed ears. Troll Spearthrowers have light blue skin, long ears, taller hunched proportions and animated spears; Shadow Hunters have purple skin, black hoods and purple projectiles with trails. Phoenixes have red fire effects; dragons have dark red hides and additional modeled scales.

Hard AI reacts faster and develops its economy; **Extreme** raids earlier, prioritizes economic targets, researches hero powers and receives a stated economy boost of 10 gold and 8 lumber per decision.

In **Settings**, enter `RYANISKING` and press **Apply code** to enable unlimited player resources for this browser session, including subsequent matches. The code affects the player's economy only.

### Lumber gathering fix — 20261006-lumber-fix

Collectors now approach trees precisely enough to reach chopping range at normal frame rates. Resource orders recognize visible tree canopies and mine artwork, including on high ground. Full lumber loads are normalized to 25 before delivery. Mouse and touch gathering were checked for both factions.

### Rivers and heroes — 20261006-rivers-heroes

Lumber gathering is twice as fast (1.5 per second), with 25 lumber carried per delivery. Gold loads are reduced to 15, taking six seconds at the base mining rate. The Harvest Guild now researches lumber harvesting and gold mining separately, with independent three-level upgrades.

Dawnward and Dominion each choose one of three heroes for the entire match: Dawnward's Sun Marshal (Paladin), Frontier Wizard and Frontier Ranger; The Dominion's Stormcaller (Berserker), Frontier Witch and Dragon Sovereign. Their selection panels describe nearby troop auras and unique active powers. Hero talent trees and Sanctum mastery were removed in the 20261008-orders-and-strategy update; innate auras and abilities remain. Stormcaller emits small lightning sparks. Dominion infantry can research Fire Spears, applying damage over time with Troll Spearthrower attacks.

Winding rivers divide each battlefield. Ground troops cross at wooden bridges; flying units cross freely. Riverbanks, contrasting grass, stones and flowers add terrain detail. Roof shingles cover both complete slopes, and Dominion horns use smaller curved shapes with visible mounting collars.

### Rainbow Laser Pig — 20261006-rainbow-pig

In Settings → Administrative code, enter `WHOLETTHEPIGSOUT` and press Apply code. A pink winged pig appears near your completed Stronghold. Select it and issue normal movement or attack orders: it flies across obstacles, leaves a fading seven-color rainbow trail while moving, and fires twin pink laser beams. It has 650 health, 60 base damage, 240 attack range and 150 movement speed. The code works for both factions and costs no resources. Entering it before a match enables one pig at the start of subsequent battles in this browser session; applying it during a match summons another pig.

## Multiplayer lobbies — 20261006-multiplayer

Choose **MULTIPLAYER · HOST / JOIN** from the main menu. Online battles support up to six total human and AI players, with at least one human. Each player has a unique banner color. The host chooses a map and can add a **4–64 character passcode**. Share the invitation link or seven-character lobby code; share the passcode separately. Guests mark themselves **Ready**, then the host starts the shared countdown. Normal mouse, keybinding and touch orders work during multiplayer, including gathering, construction, rally points, formations, research, training and cancellation.

The server runs the authoritative simulation, checks ownership and costs, and sends each player their own fog-of-war view. Passcodes are salted and hashed, never included in room listings or invitations. Sessions use randomly generated bearer tokens and reconnect after a page refresh. Administrative codes and global pause are disabled for multiplayer. Opening settings pauses your local controls while the online match continues.

### Host the multiplayer server

**GitHub Pages serves static files and cannot run lobbies.** Publishing the new menu does not create an online server. The included `server.js` serves both the game and multiplayer API; no extra dependencies or database are needed.

1. Open [Deploy on Render](https://render.com/deploy?repo=https://github.com/CardiacX-hub/Civ2), sign in or create an account, and deploy the included `render.yaml` blueprint. It selects the free Node web-service plan. Review the plan in Render before creating the service.
2. Wait for the service to become live. Copy its HTTPS service address, such as `https://your-service.onrender.com`. Its `/healthz` endpoint should report `kingdoms-multiplayer` and `ok: true`.
3. Open the GitHub Pages game, choose **Multiplayer**, and paste that address into **Multiplayer server**. Host a lobby and copy the invitation link. The invitation includes the server address, so guests can connect to the same service. The browser remembers the server address.

Render's free service may sleep when idle and take about a minute to wake; retry connecting once the service is awake. Rooms and matches are held in memory, so restarting or redeploying the server ends them. Run one server instance: lobbies are not shared across replicas. For sustained games, use an always-on service if your hosting provider supports one.

To host on another Node service or your own machine, use Node 22 or newer and run `npm start`. The server listens on the provider's `PORT` variable, or port 3000, on all network interfaces. Use an HTTPS reverse proxy when connecting from GitHub Pages. On a local network, guests can open the game directly at the host machine's reachable address and port; the server address fills automatically.

### Development and checks

Run `npm start`, then check `/healthz`, host a lobby in one browser and join it from another independent browser session. Use `npm test` for gameplay, lobby access-control, authoritative commands, fog-of-war, HTTP and multi-player victory tests. Multiplayer has no install step or external credentials for local development.

Rooms expire after three hours. Disconnected players have a 90-second reconnection window; after that their army is removed. Leaving an active battle eliminates that player. A host who leaves a waiting lobby passes hosting to the next player. Only the last remaining Stronghold wins. Server limits cap rooms, concurrent matches and request rates.

### Four-player mixed lobbies — 20261006-four-player-ai

Lobbies now have six total slots. Play with up to six people or any mixture of humans and AI, with at least one human. In the waiting lobby, the host uses **AI opponents · Host controls** to add, edit or remove computer players. Choose each AI's Dawnward/Dominion faction, banner color and Easy/Normal/Hard/Extreme difficulty. Select an existing AI in **AI slot** to edit or remove it. Remove an AI to free a slot for another human.

All human players must be connected and ready before the host starts; AI slots are always ready. Each participant gets a separate Stronghold, four collectors, randomized starting corner, and 100 gold/100 lumber. Server-controlled AI gathers, builds, recruits, researches and attacks using its own difficulty. AI never issues orders for human slots. Normal free-for-all victory requires being the final surviving Stronghold.

Deploy the latest `main` commit to the Render service as well as GitHub Pages. Render can do this automatically when **Auto-Deploy** is enabled; otherwise choose **Manual Deploy → Deploy latest commit**. `/healthz` now also reports `maxPlayers: 4` and `aiOpponents: true`. The updated client detects an older server and displays a deployment reminder instead of attempting unsupported lobby options.


### Steel and scales artwork / research queues (20261006)

The menu Dominion orc uses a dedicated high-resolution 16-frame model: planted, hunched, holding a silver spiked axe with both hands, with blood droplets falling from its edge. Dragon and wyvern models now have overlapping scales, belly plates and wing ribs. World materials have stronger surface detail and roughness variation while retaining the shared Frontier lighting.

Each research building can queue **three upgrades total**, including the active upgrade. Ranks run in order; completed Stronghold tiers still unlock higher research ranks. Every queued upgrade has its own progress/timer and Cancel button. Canceling a prerequisite rank also cancels and refunds dependent waiting ranks. Gold cargo is now **10.5 per trip**, exactly 30% below the previous 15, requiring 4.2 seconds inside the mine before upgrades. Treasury balances retain fractional gold.


### Guided tutorial and commercial review

Use **GUIDED TUTORIAL · LEARN TO PLAY** to practice either faction. Ten lessons advance after actual actions; each can be skipped. Tutorial-only funding, passive opponents and faster construction do not change campaigns or multiplayer. Settings includes credits, license links and a privacy summary. Fonts are now self-hosted.

See [RELEASE-REVIEW.md](RELEASE-REVIEW.md) for the commercial readiness findings and remaining work, and [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md) for asset/dependency notices. Build `20261006-tutorial-review`.


### Natural materials, obstacle routing and larger PC battlefield (20261007)

Character proportions are more natural and all exported models use worn, textured surfaces with physically based roughness and bump detail. Foliage has finer clusters, mountains use irregular rock volumes, grass uses curved blades, and unit ground shadows have softer falloff. These remain 3D-rendered sprite graphics viewed from an RTS camera.

Pathfinding now checks the full segment between navigation nodes, includes buildings, invalidates geometry caches when buildings change, and resolves blocked/unreachable movement destinations at reachable ground instead of walking endlessly. Units that begin inside an obstacle can move outward. Flying units still cross ground obstacles. Gathering, delivery, construction and attacks use the same movement logic.

PC command panels are compact and independently scrollable, giving the map more space. At 1440×900, the map height increases from about 512 to 664 pixels. The new **Fullscreen** button toggles fullscreen on supported PC browsers. **Expand map** hides the lower panels for a nearly full-height battlefield; **Show panels** restores them. Phone layouts retain their touch panels. Fixed malformed CSS left over from the local-font migration. Build `20261007-realism-routes`.


### Hero progression, forests and rivers — 20261007-heroes-forests

- Every map now has **13 gold mines** (the requested 25% increase from 10, rounded up): one within reach of each of the six possible starting positions, plus seven neutral mines. Trees grow in larger irregular groves with near-base patches; ramps and riverbanks remain clear.
- The Infantry Armory trains **Dawn Knights / Orc Ravagers**, **Longbow Rangers / Troll Spearthrowers**, and **Royal Marksmen / Shadow Hunters** independently. Each rank gives only that unit type +20% attack damage and +8 percentage points of armor. Rank 2 needs Stronghold 2; rank 3 needs Stronghold 3. Fire arrows/spears remain a separate ranged-unit upgrade. Three upgrades can be queued.
- The first successfully paid hero training order permanently locks that player's hero choice for the match, even if canceled. Only one living or queued hero is allowed across all Sanctums. After death, only that same hero can be recruited again. Starting a new match resets the choice.
- Heroes start at level 1 and gain experience from their army's kills within **600 map units**. Workers give 15 XP; normal troops 45; artillery and large flyers 70; heroes 100; buildings 90; Strongholds 180. Each level requires `100 × current level` XP and is capped at level 10. Hero talents were removed in the 20261008-orders-and-strategy update; innate auras and abilities remain.
- Death removes one hero level, down to a minimum of 1, and resets progress toward the next level. Retraining restores the remaining level at full health.
- Unit selection and troop training buttons show small portraits cropped from the same faction-specific 3D sprite atlases used on the battlefield.
- Rivers have layered depth colors, surface texture, downstream currents, moving sun glints, and occasional fish leaps with landing splashes. Bridges and elevation ramps use shaded round logs with bark grain, knots, end rings, supports, and contact shadows.
- Hero progression, choice locks, and unit-specific upgrades run on the authoritative multiplayer server as well as in single-player. Desktop and phone browser checks verify the controls and portraits; `npm test` covers progression, death/retraining, resource placement, research isolation, multiplayer ownership, and existing RTS behavior.


### Facing, worker controls, phone rotation and results — 20261007-controls-results

- Both factions' buildings and construction stages now face straight toward the bottom of the battlefield from the elevated camera.
- Maps have 13 mines: six starting-position mines and seven neutral mines. This rounds the requested 25% increase from 10 mines up to a whole mine.
- Selecting another friendly worker takes priority over overlapping tree artwork and pending commands. Selection uses the closest unit silhouette; phone taps on a friendly unit leave Order mode and select that unit.
- Group lumber orders assign individual accessible trees immediately. Walking, delivering and shift-queued workers reserve their trees. Workers wait rather than pile onto an occupied tree, and gathering approaches avoid other active collectors.
- Canvas size and touch coordinates follow actual layout changes using resize/orientation events and a ResizeObserver. Rotating cancels interrupted gestures; portrait/landscape layouts can be switched repeatedly. Phone **Hide panel / Show panel** controls collapse the lower selection/command area; choosing a panel opens it again.
- Victory and defeat show a scrollable statistics table: delivered gold and lumber, total resources gained, cumulative worker idle time, completed fighters, completed buildings, and enemy buildings destroyed. Starting resources, initial units/buildings, refunds and administrative resources do not count as production or gathering. Idle time sums seconds across all living workers without a task or on Stop/Hold.
- Multiplayer statistics are recorded by the server. Only your own statistics are sent while opponents are still playing; the full scoreboard is revealed when the match finishes.


### Six-player battlefields and Musketeer — 20261007-six-player-battlefields

- Maps are **3200 × 3200**, up from 2400 × 2400 (about 78% more area). Mountain ranges and plateaus span the larger terrain, rivers extend across it, and six separated starting positions support six participants. There are 13 mines: six starting mines and seven neutral mines, with larger forest coverage.
- Map selection previews draw the same river paths, bridges, mountains, forest patches, mine locations, raised plateaus and log ramps used by the simulation. Pale rings show possible starting positions, without identifying enemies.
- The banner and every opponent occupy separate rows. Single player supports up to five AI opponents; online lobbies support up to six total humans and AI. Passcodes, readiness, unique colors, fog, ownership checks and free-for-all victory still apply to every slot.
- **RYANISKING** enables unlimited resources and instant construction in single-player, including completing existing construction sites. Finished sites restore full building health, release builders, count once in statistics, and activate wall collision immediately. Unit training and research retain their timers. Administrative codes remain unavailable online.
- The former Royal Marksman is now the **Musketeer**, with a British-inspired red coat, white crossed belts, brass buttons, a black tricorn hat, and a wood-and-steel musket. The 8-direction, 16-frame idle/walk/attack atlas and selection portraits use the new uniform.
- **Hard** scouts after 20 seconds, raids from 40 seconds, evaluates tactics every 0.75 seconds, develops toward 24 collectors, targets known exposed resource buildings and researches flaming ammunition. It gets no free-resource bonus. **Extreme** remains harder, deciding every 0.5 seconds and raiding from 25 seconds with its advertised economy boost.

Forest movement: ground units route around closely spaced tree trunks instead of squeezing through narrow gaps. Workers can still harvest exposed forest edges, felled trees reopen paths, and flying units pass overhead.

Movement performance: spatial obstacle lookup and a priority queue keep forest routing responsive. Valid detours are reused until orders or obstacles change instead of being rebuilt every two seconds.

Starting areas are checked against rivers, mountains, cliffs and ramps before armies are placed. All six spawn slots have a clear ground-level area for their stronghold, workers and early expansion; map previews use the same validated locations.

Stronghold progression: level 2 unlocks Siege Works, Artillery Foundry, Siege Bastion and artillery training. Level 3 unlocks Sky Roost and flying-unit training, including the Dominion Dragon Sovereign. Workers deliver cargo to reachable edges of completed friendly strongholds or outposts, and can use another drop-off when the nearest is inaccessible.

The Dominion can train The Devoured at the Infantry Lodge: a heavy axe infantry unit (130 gold, 70 lumber, 320 health, 32 damage, 35% base armor, 12-second training) with spiked armor, skull trophies and its own Infantry Armory upgrades. It has eight facing directions and 16 frames for each idle, walking and axe-attack sequence.
River-safe starts now check the entire starting clearing against the river, including bends. Ground-unit production also checks the spawn footprint and an unobstructed exit on the building's terrain level; if every exit is blocked, the completed unit waits in its queue until there is safe ground.

Leaving an active match for the main menu asks for confirmation before clearing progress or leaving a multiplayer lobby. Rendering uses display-aware canvas resolution, cached viewport terrain, shadows and minimap terrain, and skips off-screen scene objects. Unit spacing checks use nearby spatial buckets instead of comparing every unit pair.

The Dawnward Royal Cavalier is a mounted counterpart to The Devoured, trained at the Infantry Lodge. Its armored horse, silver-and-gold plate, winged helmet, blue barding and sword have eight facing directions and 16-frame idle, horse-movement and mounted-attack sequences. Every base stat, cost, training time, armor value and collision size matches The Devoured. Royal Cavalier Training at the Infantry Armory follows the same three upgrade tiers and prices. Both AI and multiplayer support the faction-specific heavy infantry.

### Painted battlefield artwork (20261008)

The Royal Cavalier now wears silver plate with gold trim, a blue plumed helmet and heraldic cape, riding a plated horse with shaped blue barding, inspired by the supplied character sheet. All troop and worker variants, flying creatures, artillery, buildings, construction stages, mines, trees and mountains use a shared painted material treatment and faceted shading. Ground washes and clustered grass use the same warm highlight/cool shadow palette. The two uploaded faction photos remain on the selection menu.

Animation atlases retain eight directions and sixteen frames for idle, movement and attack. Mesh detail is baked offline so battles still render with cached terrain and sprite draw calls. Wider weapon/wing framing is compensated in world drawing and unit portraits, preserving gameplay scale and avoiding cropped equipment. Atlas resolution stays unchanged to avoid increasing decoded texture memory. Rebuild art with `PLAYWRIGHT_MODULE=<path-to-playwright> ART_URL=http://localhost:3018 node tools/render-art.cjs` after starting the game server; pass a comma-separated list of unit names or `world` to rebuild selected assets. The shared art direction is in `tools/painted-art-style.js`.

### Orders and strategy — 20261008-orders-and-strategy

- Right-click a completed friendly Stronghold or Resource Outpost to turn in carried gold and lumber, including workers returning from far away. Explicit Repair still repairs; Shift queues the return order.
- Royal Cavaliers and The Devoured require Stronghold level 3 in single-player and online games.
- Explored gold mines appear yellow on the minimap; undiscovered mines remain hidden.
- Stronghold levels 2, 3 and 4 add progressively wider wings, taller keeps, defensive towers and outer fortifications for both factions.
- AI fighters prioritize nearby opposing combat units, ranged troops retreat from nearby melee attackers, and wounded fighters withdraw.
- Crowd steering, wider formation spacing, open destinations and more forgiving route waypoints reduce unit congestion.
- Hero talents and Sanctum talent research are removed. Hero levels, death level loss, innate auras and innate abilities remain.
- Deselect clears the selected units/buildings and active placement without canceling orders; default shortcut **V**, configurable in Settings. Available on desktop and phone.

### Covenant and specialists — 20261008-covenant-and-specialists

The Verdant Covenant is a third playable faction in campaign, tutorial and six-player multiplayer lobbies, including AI slots. They are wilderness clans bonded with giant insects. Their buildings use clay, woven reeds and armored shells; they have no living buildings or tree creatures.

| Faction | New units and battlefield roles |
| --- | --- |
| Dawnward | Shieldwarden: protects troops within 100 from 25% of ranged damage; artillery ignores this aura. Field Medic: heals one nearby ally for 6 health/s while stationary. Siege Engineer: repairs artillery for 12 health/s and places temporary barricades. Pathfinder: fast, lightly armed ground scout. |
| Dominion | Troll Trapper: places visible, destructible traps that slow enemy ground troops. Bogbreaker: heavy infantry whose blows knock troops back and briefly stagger them. Carrion Rider: fast, fragile flying scout. |
| Covenant | Foragers, Ancient Treants, Venom Vipers, Fire Hydras, Resin Weavers, Ironback Riders, Burrowbreakers, Moth Scouts, and Stag Wasps. Vipers poison troops; hydras burn targets and can create protective smoke screens. Wasps apply poison damage over time. |

**Active unit abilities:** select the unit and click its ability, or press **Z** (changeable in Settings). Royal Cavalier **Royal Charge** and Ironback Rider **Ironback Rush** require a visible ground enemy 70–330 units away and an unobstructed path; impact deals 65 damage and a 1s stun, with an 18s cooldown. The Devoured's **Sweeping Strike** deals 55 damage in a forward arc within 85, excluding friendly and flying units, with a 12s cooldown. Their base stats remain equal.

Scouts have 420 vision; **Survey** temporarily expands it to 650 for six seconds, with a 20s cooldown. Unexplored territory stays hidden, and enemies disappear when they leave sight. Human scouts and support troops require Stronghold 2. Flying scouts, Bogbreakers, and elite cavalry require Stronghold 3. The Covenant's Moth Scout is trained at the Shell Lodge; the Wing Pavilion trains Stag Wasps.

Traps slow enemies by 60% for four seconds, deal 15 damage, expire after 90s, and are limited to six per player. Engineer barricades block ground movement, last 45s, and are limited to six. Both structures can be attacked and destroyed; workers cannot construct them through their normal menu. **Burrow Ambush** digs a Burrowbreaker in for 2.5s, then erupts for 60 damage to nearby ground enemies. A replacement move or Stop cancels a charge or burrow; Shift keeps the current order and queues movement.

Verdant heroes keep the one-hero-per-match rule with two choices: Granite Guardian and Tideborn Elemental. Smoke Alchemist and Trail Matriarch are removed from production; saved Matriarch choices migrate to the water hero. Tidal Wave travels 360 units forward through a 150-wide corridor, healing allies by 70 and dealing 90 damage to enemies once per wave, with a 24-second cooldown. Tideborn's restorative mist heals nearby allies at 1 health/s.

Research Sky Skitterer Smoke Shroud at the Wing Pavilion (Stronghold 3) to unlock a 6-second, 130-radius concealment cloud, with a 24-second cooldown. Ranged units cannot acquire concealed targets; nearby melee observers can reveal them to the player, and revealed targets remain available to melee attackers. Dawnward medics use Dawn of Light to dispel nearby smoke and stealth and grant allies clear sight for 6 seconds (25-second cooldown). Dominion Rock Hewers can choose Bombard, then select visible ground to shell repeatedly every 2.4 seconds. Blasts affect all units and buildings within 70, including concealed targets and allies; Stop or a new Move order cancels continued bombardment. Projectiles already launched still land.

Ancient Treants and Root Colossi have pointed, veined forest leaves with reflective sheen and wind motion. Treant eyes and facial glow turn red while fighting. Root Down switches the Colossus into a rooted trunk-and-leg form while its arms and head continue fighting. Bloom Weavers have pink blossoms and thorned vines. Fire Hydras have glossy scale textures, hooked fangs, sharper spines and articulated serpentine tails. Hard and Extreme AI launch infantry assaults without waiting for siege or aircraft, scout possible enemy starts, and avoid recalling an advancing wave merely because of a defensive personality.


The server health endpoint advertises the three factions and unit abilities. An older server is rejected with a deployment message rather than silently ignoring the new commands. On Render, **Manual Deploy → Deploy latest commit** updates the online server if automatic deployment is disabled.

Animation atlases load only when their units appear, and unused atlas references expire after 45s. Small standalone portraits keep training menus from decoding full animation sheets. This reduces the artwork memory added by the larger roster.

### Living Covenant infantry — 20261008-covenant-creatures

The Shellguard is now an Ancient Treant, a walking oak with root feet, branch arms and glowing green eyes. The Reed Archer is now a coiled Venom Viper that spits venom instead of arrows, poisoning enemy troops for 3 seconds; Potent Venom research extends that duration. The Resin Slinger is now a five-headed Fire Hydra with dark red scales, ivory horns and fire projectiles that burn targets for 4 seconds. The existing infantry training slots, prices and base stats remain, and the Hydra retains Smoke Screen. Original creature meshes have eight facing directions and 16 frames per idle, movement and attack cycle, with matching selection and production portraits.

### Modern visual setup — 20261008-modern-visuals

The Covenant menu now uses the supplied tree-and-hydra battlefield image. Settings includes Low, Balanced and High visual presets, with a lightweight GPU grading/bloom/edge-smoothing layer for sprite matches and automatic Canvas fallback. A separate working [live 3D rendering lab](graphics/lab.html) demonstrates PBR, cascaded shadows, GTAO contact shading, ACES, bloom, SMAA, emissive lights and wetness/weathering. Full modular source, reusable HLSL math and asset integration instructions are in [the visual-quality guide](docs/VISUAL_QUALITY.md). Live geometry is now integrated into matches; the separate lab remains a calibration tool. Run `npm ci` and `npm run build:graphics` when changing its modules.

### Live 3D battlefield — 20261008-live-battlefield

Matches now use the original source meshes in live 3D with continuous articulated animation, dynamic cascaded shadows, PBR normal/roughness detail, GTAO, ACES, bloom and SMAA. Terrain elevation, flowing rivers, log ramps/bridges and instanced grass use actual geometry. The fog/selection/health/effects overlay and minimap preserve gameplay readability. Settings lets you select Classic sprites for compatibility or battery saving and adjust ground moisture. Multiplayer reuses a stable renderer across incoming snapshots. The original 106 model assets are exported by `tools/export-live-models.cjs`; see the visual-quality guide for rebuilding and performance details.

### Living fog and Verdant creature detail — 20261008-living-fog

Fog of war now uses drifting cloud layers in both Live 3D and Classic views. Unexplored areas remain fully opaque; explored areas outside vision retain a dim terrain memory. Enemy visibility rules are unchanged. Cached cloud textures and a low-resolution visibility mask limit rendering cost on phones.

The Hydra and Venom Viper have continuous scale materials with normal-map detail. The Hydra has sharper facial plates, neck ridges and dorsal spines. The Ancient Treant has longitudinal arm bark, knots, twigs, small leaves and a darker green canopy. Both live models and Classic atlases are rebuilt from the same source. `tools/check-fog.cjs` verifies cloud animation, opacity and reveal behavior with Playwright.

### Seamless fog and stable 3D presentation — 20261008-smooth-fog

Fog boundaries use a cached distance field and smooth opacity falloff toward visible terrain, with rounded corners and no square opacity steps. Unexplored cells remain opaque. The live renderer keeps rendering the 3D scene as assets stream; workers and upgraded buildings retain their existing model until the replacement loads. The production/work queue has an explicit layer above battlefield canvases and remains interactive in both graphics modes. Browser checks cover delayed model downloads, worker-tool changes, queue controls and fog opacity gradients.

### Winged vermin — 20261008-winged-vermin

The Verdant Covenant Stag Wasp now has striped chitin, a narrow petiole, compound eyes, mandibles, six jointed legs, translucent veined wings and a pointed stinger. [View its original 16:9 model sheet](assets/stag-wasp-model-sheet.jpg). The Burrow Breaker is an eight-legged green-and-black spider with large curved fangs. The new Sky Skitterer is a winged, armored centipede, trained at the Wing Pavilion at Stronghold level 3 for 260 gold and 160 lumber.

Research **Venom Stingers** at the Wing Pavilion for **160 gold and 120 lumber**, taking 25 seconds. Existing and newly trained Stag Wasps gain green stingers and poison enemy units for **5 damage per second for 4 seconds**. Repeated hits refresh the duration; poison does not stack or affect buildings. These are original animated Three.js models, also exported to Classic atlases; no Unreal Engine runtime is required.

### Stone and web — 20261009-stone-and-web

- The Covenant Granite Guardian replaces the Carapace Captain, retaining its protective aura and Stoneguard ability. Its original articulated rock-and-moss model winds up and throws boulders.
- Burrowbreakers fire webs. Research **Sticky Webs** at the **Burrow Den**, requiring Stronghold level 2, for **180 gold / 140 lumber / 30 seconds**. Hits slow living targets by **50% for 4 seconds**, refreshing without stacking. Buildings are immune to slowing.
- **Zoom out** and **Zoom in** in the game header change the camera from 100% to 55%, keeping the camera center, mouse/touch orders, minimap, fog and both renderers aligned. Phone dragging uses the same zoom scale.
- Stag Wasps and Dominion dragons are 30% smaller; Sky Skitterers are 35% smaller. Combat stats and collision rules are unchanged.
- Deliveries credit **75% of carried gold/lumber**, including resource outposts, AI and multiplayer. Match statistics show the credited totals. Existing cargo limits and gathering rates remain unchanged.
- Fully harvested trees fall over for 1.4 seconds and disappear. Their collision obstruction clears immediately, and depleted trees cannot be harvested again.

## Verdant Rootspire architecture

The Verdant Covenant buildings now share ivory masonry, pointed emerald windows, gold tracery, leaf-panel roofs, hanging tree banners, winding bark roots, ivy, and layered canopies. The stronghold grows additional towers, bridges, crystals, and foliage through all four tiers; its level-three defenses remain functional. Rocky foundations and small cascading pools tie the structures into the landscape. Workshops, barracks, roosts, resource storage, hero sanctums, walls, and defenses have distinct layouts in the same style.

The original procedural models are authored in `tools/covenant-art.js`. Shared painted surfaces are in `tools/painted-art-style.js`. Rebuild with `npm run build:exporter`, then `node tools/export-live-models.cjs covenant-world`; with a local server running, use `ART_URL=http://localhost:3000 node tools/render-art.cjs covenant-world` for Classic images and UI artwork. Asset generation requires Playwright and Chromium. Architecture uses embedded 256-pixel textures and material batching to keep draw calls low; no external rendering service is required during play.

## Verdant woodland collectors

Verdant workers now use carved bark faces with glowing green eyes, branching crowns, leaf shoulder mantles, ivory and emerald tree-emblem cloth, vine-wrapped limbs, articulated wooden fingers and toes, and woven packs with logs and cargo. Axe, pickaxe, hammer, gold-carrying, and lumber-carrying variants share the same animated rig. Tools and decorations are attached to the corresponding hand/body joints. Models and Classic atlases are generated from `kawVerdantWorker` in `tools/covenant-art.js`.

## Sky Skitterer and zoom clarity

The Sky Skitterer has lighter brown chitin, dark brown abdominal bands, pointed veined wings, and a downward-curled sting. Live models, Classic animations, and its portrait use the same source design. Balanced and High rendering now apply their full resolution budget even on 1× desktop displays. Multisample anti-aliasing resolves thin geometry before SMAA; zooming out preserves the physical drawing-buffer resolution in live and Classic modes. Low remains capped at 1× with two samples for phones. Run `CHECK_URL=http://localhost:3000 node tools/check-zoom-quality.cjs` with Playwright installed to check desktop/phone zoom resolution and selection projection.

## Iron beast and wind elemental

The Verdant Ironback Rider now appears as a six-legged mechanical iron beast with jointed legs, overlapping riveted armor, pointed claws, horns, amber eyes, lantern towers, chains, and woodland banners. Its Ironback Rush and existing combat stats are retained. The former Resin Weaver is now the Wind Elemental: an ornate masked spirit with translucent animated vortex filaments, gust projectiles, and Wind Trap. Its trap deals 15 damage and slows enemy ground units by 60% for four seconds, with the existing twelve-second cooldown and six-trap limit. Wind traps swirl in both graphics modes. Dominion Troll Trappers retain their resin traps.

`cov-beetle`, `cov-weaver`, and `world-trap-covenant` models, Classic sheets, and portraits use the original procedural source in `tools/covenant-art.js`. `world-trap-resin` preserves the earlier resin trap for other factions.

### Expanded battles (20261009-grand-battles)

Maps are now 4000 × 4000 (25% wider, 56% more area). Desktop command cards use a denser grid, with separate construction and formation sections. **Attack move (N)** followed by right-click sends troops toward a destination while fighting enemies in attack range; they resume when the target dies or leaves range. Shift adds destinations to the task sequence. **All fighters (F7)** selects all living friendly combat units across the map, excluding collectors and noncombat medics. These shortcuts can be changed in Settings.

Unit training, construction, and research take 25% longer. Deliveries credit 25% less than the previous version: 56.25% of physical cargo, or 5.90625 gold / 14.0625 lumber for an unupgraded full load. Gathering rates and physical carrying capacities are unchanged. AI reserves actual Stronghold upgrade costs, prioritizes Siege Works and Sky Roosts when unlocked, and advances in formation using attack-move so nearby defenders interrupt raids.

Verdant roofs follow each owner's banner color. Plateau cliff materials have sediment bands and rocky bevels. Dragons and wyverns have tan wing membranes, articulated finger ribs, and wing talons. Large-map terrain caching is limited to a 4096-pixel surface to control memory usage.

### Straw hats and architectural detail (20261009-straw-and-stone-r2)

Dawnward peasants wear woven straw farmer hats attached to their animated heads in every axe, pick, hammer, gold-carrying and lumber-carrying variant. Their portraits and Classic animation atlases use the same models.

Dawnward Strongholds have individually shaded, beveled stone blocks with staggered courses and recessed mortar across their keeps, towers and all upgrade wings. Building masonry across all three factions has consistent stone-course scale, chipped surfaces and fine weathering, with 512px architectural color and normal maps. Other surface maps retain smaller export budgets, and the stone geometry is merged into a small number of material batches instead of issuing a draw call per brick. Classic building images are captured at 768 × 768.

New PC sessions default to High visual quality (higher resolution, four shadow cascades, ambient occlusion and restrained bloom); phones default to Low. Saved preferences remain in effect. Settings → Graphics allows switching to Balanced or Low for slower hardware. Capped anisotropic texture filtering preserves masonry detail at elevated camera angles. Small objects and distant buildings still have finite screen resolution; this is an improvement to the existing browser renderer, not a conversion to a different engine.

Asset authoring helpers are in `tools/masonry-art.js`. Include this file alongside the Frontier, painted-style and Covenant authoring scripts. Export affected live meshes with `node tools/export-live-models.cjs worker,worker-pick,worker-hammer,worker-carry,worker-logs,detailed-buildings`; render the corresponding worker atlases and building images with `tools/render-art.cjs`. Browser validation: `tools/check-masonry.cjs`. These commands use the existing documented Playwright/Chromium setup and local server.


### Living landscape (20261010-living-landscape-r2)

Live terrain uses rooted, tapered grass blades with GPU wind animation, varied olive/gold colors, and denser grassy riverbanks. Low quality caps field grass at 16,000 tufts; other presets use 60,000. Each tuft has three blades, and 64 spatial batches allow frustum culling with grass shadows disabled. Classic rendering adds sparse animated tufts and bank reeds. Plateau rock faces have subdivided sloping ledges, uneven surfaces and sediment layers; playable tops, ramps and navigation remain aligned.

Strongholds keep the same physical model scale across upgrades, anchored to the level-one asset. Classic tier images use a fixed faction camera and display size so existing walls do not shrink when new towers appear. All units render 10% smaller. The Fire Phoenix has an additional 25% reduction and an original articulated bird model normalized by wingspan, with layered secondary/primary feathers, coverts, warm plumage variation, hooked beak, talons, tail feathers and emissive flame tips.

Walls cost 7.5 gold and 17.5 lumber, exactly half the previous price. Collectors can build Wall Gates for 20 gold / 30 lumber, or select a completed wall and choose Add gate for the same cost. Select a gate to Open gate / Close gate. Open gates allow everyone through; an occupied doorway cannot close. Gate states invalidate route caches and are validated by the multiplayer server. New assets include open/closed gates for all three factions.

Authoring is in `tools/landscape-art.js`; wind grass and cliff detail are in `graphics/landscape-detail.js`. Use the existing exporter/atlas tools to rebuild `phoenix`, `gate`, `gate-open` and Stronghold tier images. Graphics bundles ship with the game, so GitHub Pages needs no asset-generation service.

### Continuous meadow (20261010-continuous-meadow)

Grassy ground now has seamless overlapping blade textures, with evenly distributed wind animated grass instead of isolated tufts. Plateau tops share the grass texture; rivers retain water. Low quality uses fewer animated blades while preserving full ground coverage. Classic rendering bakes dense grass into its terrain cache.

### Dominion fortress, supply homes and shared breeze (20261010-fortress-supply-wind-r2)

The Dominion Stronghold is a modular dark timber fortress with a skull gate, curved tusks, iron bands, red cloth canopies, banners and emissive braziers. Each upgrade retains the previous structure and adds towers or fortified platforms. All four tiers ship as live 3D meshes and Classic sprites.

Each completed Stronghold provides 20 supply; each completed Supply House (40 gold, 70 lumber; 37.5 seconds with an attending worker) adds 10, up to 200. Every worker and troop uses one supply; the administrative pig uses none. Training reserves supply across all queues. Destroying houses reduces capacity without removing living units: completed production waits for enough supply, and canceling training releases its reservation. Houses appear in collectors' economy construction section (default Shift+H, customizable in Settings). AI players expand housing near the cap. The collector limit remains a separate Harvest Guild upgrade. Multiplayer enforces the same supply rules on the server.

Trees and grass share a layered breeze. Height-weighted tree deformation leaves trunk roots fixed; GPU shader animation and spatially culled grass avoid per-frame mesh rebuilding. Classic trees lean gently around the ground anchor.

### Woodland peons, mine geology and tier-four Gold Mines (20261010-woodland-peons-goldworks)

Dominion peons now have broad olive bodies, tusks and pointed ears, bark and leaf armor, rope bindings, woven log packs, and vine-bound stone tools. Five task variants retain idle, walk and attack clips on a compact nine-joint rig; Classic atlases are rendered directly from these optimized GLBs. Rebuild with `npm run build:exporter`, `tools/export-live-models.cjs` for peon variants, `npx esbuild tools/peon-atlas-entry.js --bundle --format=iife --outfile=/tmp/kaw-peon-atlas.js`, then `tools/render-peon-atlas.cjs` using the same Playwright setup as the other art tools.

Natural mines gain larger layered rock outcrops, with neutral deposits preferentially placed near mountain foothills. Outcrops block ground movement and construction, avoid rivers, keep entrances open, and persist after depletion. Eight Classic views align mine entrances with their rocky backdrops; regenerate them with `tools/render-mineral-art.cjs`.

Collectors can construct a Gold Mine at Stronghold level 4 for 350 gold and 250 lumber (75 seconds with an attending builder). It produces 1 credited gold per second once completed, with no natural deposit or assigned workers, and stops when destroyed. Each faction has a distinct building appearance; the Verdant name is Deepgold Sanctum. Generated income counts toward match statistics. AI can progress to tier four and build one; multiplayer enforces the unlock, payment and income on the server. Default construction shortcut: Shift+G.

### Open ridges, smooth peons and dark woodland (20261010-open-ridges-smooth-peons-forest)

Mountain peaks are smaller and separated, with central crossings kept clear of trees, mines and their rock outcrops. Peak placement also avoids bridge and ramp approaches. Peon posture is assigned absolutely during model capture, preventing accumulated tumbling; walking uses one complete periodic stride with matching loop endpoints. All five peon GLBs and Classic atlases have been rebuilt. Live units turn through the shortest angle with time-based damping. Trees and pines use dense, independently oriented dark-green pointed leaves instead of foliage spheres, batched into two material draws per model; existing wind and harvesting remain intact.

### Custom standards and Dominion spear towers (20261010-troll-towers-custom-standards)

**Craft banners** on the main menu opens a local workshop with six patterns, seven symbols, movable circle/square/triangle/diamond/star/bar shapes with size, rotation and ink controls, a 16×16 custom symbol drawing grid, and up to twelve saved designs. Save & equip selects the design for the next match; its cloth always uses the chosen player color. Designs appear on buildings and standards, persist locally, and travel through validated multiplayer lobby profiles and match snapshots. They contain bounded data, not executable art or remote images.

Strongholds train one Standard Bearer per player per match (120 gold, 80 lumber, 20 seconds, one supply). Its command buttons switch between damage, health and gathering auras; only one is active. Gathering requires Stronghold level 3. Each aura starts at 5% and has two Stronghold research upgrades to 10% and 15%, with a 240-unit radius. Health covers friendly units and buildings; damage covers units and defenses; gathering increases worker harvesting speed and Gold Mine income. Canceling training frees the reservation; a completed bearer uses the one-per-match slot even if killed. Selecting a bearer shows its active effect and radius.

Dominion watchtowers have a raised timber throwing platform, tusks, skulls, ladder rungs, rope-and-metal fixtures, rocky foundations, hanging braziers and ragged cloth. A compact animated troll garrison throws spear projectiles from the platform. Troll troops use the same updated muscular, long-eared, tusked design with braided hair, bone jewelry, layered leather armor, red markings, bound spear packs and a hand-attached spear. New faction standards use a mounted Dawnward knight, Dominion warrior, and Verdant woodland guardian.

Art rebuilds: `npm run build:exporter`, `tools/export-live-models.cjs banner-knight,banner-orc,banner-treant,troll,world-tower-dominion`, rebuild `tools/peon-atlas-entry.js` as documented above, then `tools/render-peon-atlas.cjs banner-knight,banner-orc,banner-treant,troll` and `tools/render-art.cjs world-tower-dominion`. `tools/check-standards.cjs` verifies workshop persistence and the real PC/phone rendering paths.

The **+ Idle collectors** button selects living workers that are not gathering or delivering, including workers assigned to other tasks. `RYANISKING` retains unlimited resources and instant construction, and sets existing and future player unit/research jobs to one second (single-player administration). The Dominion dragon has crimson membranes, layered scales, jagged dorsal spines, swept horns, jaw fangs and wing talons. Its detail meshes share three flight bones instead of hundreds of individual joints. Combat acquisition uses a per-step spatial index; online snapshot interpolation uses an ID map; faction banner textures are cached per player.

Boulder mines use one giant layered rock behind the existing mine mouth, preserving its accessible approach and routing footprint. All unit visuals are another 15% smaller; statistics and collision radii remain unchanged. Woven banners ripple with GPU wind displacement (Classic uses animated cloth strips). Dragons and wyverns have six tapered, articulated tail segments; their flight rigs remain nine bones. Dominion tower trolls are larger. **Flaming tower spears**, researched at a completed Dominion watchtower for 120 gold/90 lumber (31.25 seconds), unlocks burning spears for that player's towers: living enemies take 5 burn damage/second for 4 seconds, with repeated hits refreshing the duration. Research queues, cancellation and admin production apply normally.

### Articulated wings, embedded mines and siege detail (20261010-articulated-wings-embedded-mines)

Dragon and wyvern wings now use thin scalloped membranes, bronze leading-edge armor, pointed fingers, veins, and talons. Shoulder, elbow and wing-tip joints use delayed flex through a continuous flap; the six-segment tail is preserved. Thirteen-bone rigs keep decorative geometry batched. Both live models and Classic atlases are rebuilt from the same artwork.

Natural mines share one model and scale with their giant boulder: enlarged timber-supported arched entrances, recessed shafts, rails, ore carts, ore seams and lamps. The entrance remains at the existing resource anchor; rock bulk sits behind it. Deposits where the boulder would obstruct a river, ramp or spawn retain a compact mine. Siege Bastions gain individual masonry courses, reinforced corners, crenellations, riveted gun mounts, barrel bands, recessed muzzles and elevation gears, with textured stone and reflective weathered metal. All unit visuals are another 15% smaller; combat statistics and navigation footprints stay the same.

### Approved banners, fractured mines and dragon flame (20261010-flame-hewer-approved-banners-r2)

The banner workshop now offers approved patterns and emblems only. Freehand cells and movable shapes are stripped by the shared normalizer used for browser rendering, old saves and multiplayer profiles; existing freehand emblems become the sun emblem. Named designs can still be saved and equipped, with team colors applied in battle.

Mine boulders have uneven angular surfaces and branching fracture seams while retaining their integrated entrance and existing navigation footprint. Dominion Rock Hewers are 40% larger than their current appearance. Their rocks resolve damage when they arrive, shatter into stone fragments, and push mobile enemies back up to 40 world units (20 for splash victims), stopping at terrain, obstacles and other units. Buildings are not pushed.

Trees contain 240 lumber instead of 1200, and depleted trees finish falling and disappearing in 0.65 seconds instead of 1.4. Gathering rates and delivery quantities remain unchanged. A Dominion roost at Stronghold level 3 can research Continuous Flame Breath (180 gold/140 lumber, 50 seconds), then Azure Flame Breath (280 gold/220 lumber, 68.75 seconds). Both Dominion Dragons and Dragon Sovereign heroes gain sustained, cancellable attacks; blue flame increases direct breath damage by 30%. Lingering burn damage remains 5/second for four seconds. AI players can research both tiers. Research queuing, cancellation, admin timing and multiplayer validation use the existing systems.

### Minotaur and turbulent dragon fire (20261010-minotaur-turbulent-fire)

The Dominion Bogbreaker is now the Minotaur, with curved banded horns, bull muzzle, cloven hooves, layered spiked armor, a shaggy mane and a double-bladed axe. Its cost, stats, stronghold requirement and knockback ability remain the same. The live model and Classic animation atlas share the same articulated asset.

Dragon breath uses cached textured flame clusters with rolling turbulence, hot cores and detached embers. Both orange and upgraded blue flames retain their existing combat behavior. Normal Dominion dragon projectiles also use the flame texture. Texture generation happens once per flame color; each plume uses a fixed bounded number of billboards.

### Living fire and black chitin (20261010-original-tactics-campaign-r2)

Phoenixes and burning units/buildings have animated flame tongues and crackling embers in both graphics modes. Poison retains its green haze. The Minotaur is 35% larger visually without changing collision size or stats. Mine rocks have flat fracture faces and raised mineral flakes. Stag Wasps and Sky Skitterers have black chitin and fine bristles; the venom upgrade retains its green stinger. The Skitterer has a linked swaying body and glossy green slime projectiles. Its damage is unchanged. Decorative hairs are batched onto existing joints.

## Original battlefield tactics and campaign tools

This update adds new rules and synthesized sounds implemented for Kingdoms at War; it imports no artwork, characters, recordings, or code from another game.

- **Attack alerts:** red minimap pings and clickable alerts center the camera on damaged friendly troops or buildings.
- **Army groups:** Ctrl + 1–9 stores selected units; 1–9 recalls a stored group, and Shift adds it. The on-screen Store group button supports touch. A stored group takes priority over a construction shortcut with the same number. Idle fighters and selected-order summaries are available beside the battlefield.
- **Counters:** Troll spears deal 40% extra damage against flyers, artillery deals 40% extra damage against buildings, and paired ranged troops deal 15% extra damage against heavy infantry.
- **Faction tactics:** Dawnward Standfast requires three nearby infantry (+5% damage, 10% protection). Dominion Battle Surge builds five 2% damage stacks from hits and expires after four seconds without a hit. Verdant Rootward activates after holding ground for three seconds, granting nearby allies 5% protection and slowing ground enemies by 15%.
- **Signal Stones:** optional in single-player and enabled online. Eight uncontested seconds captures one. Ownership grants nearby vision and 7.2 gold / 4.8 lumber per minute. AI squads contest them. Stones do not change the destroy-Strongholds victory condition.
- **Device saves:** manual Save game and autosaves every 60 simulation seconds are single-player only. Main-menu Saved games resumes either slot, including cargo, target references and queues. Saves use IndexedDB and do not upload to a server.
- **Visual match reviews:** single-player snapshots every five seconds retain a rolling window of at most 15 minutes or 8 MB, whichever is reached first. Save replay manually or finish a match to retain it; three reviews are kept on this device. Main-menu Match replays provides playback speed, seeking, current resources, army size, and cumulative worker idle time. Reviews are sampled, not deterministic full-match re-simulations. Orders are disabled during review.
- **Settings:** original synthesized battle sounds and footsteps, volume, FPS, grass, dynamic shadows, fire detail and building geometry detail. Lower settings reduce decoration without changing combat or resource collection. Existing overall graphics presets remain available.

Development checks: `npm test`, `npm run build:graphics`, and `node tools/check-experience.cjs` (requires Playwright and a local server on port 3076). Existing `tools/check-standards.cjs` verifies both live and Classic rendering on desktop and phone.

## Borderlands, teams and siege update (20261011-borderlands-teams-siege-r1)

- Squads maintain formation offsets during travel and regroup at their destination. Melee units lead; ranged units stay behind. Followers use the leader's trail where terrain interrupts the formation.
- Selection shows armor, base damage and active combat conditions. Hits produce contact-timed flashes and subtle model reactions.
- **Deploy artillery** trades mobility for 35% more damage and 25% more range after 1.5 seconds of setup. A new movement order cancels deployment. **Bombard bridge** closes a crossing when its 900 health runs out; Select artillery’s Bombard bridge power, then right-click the crossing on PC or tap it on a phone. Collectors repair damaged or destroyed bridges by left-clicking or tapping them while selected. **Repair defenses** also repairs gates, walls and towers.
- Choose Balanced, Fortifier or Raider for each AI. Fortifiers protect their base with a reserve and towers; raiders prioritize exposed collectors and outposts. Difficulty still controls the existing economy and reaction rules.
- Online lobbies support teams 1–6 or free-for-all. Allies share vision and cannot attack one another. Up to eight read-only spectators can join, including after a match starts; protected lobbies still require the passcode. Spectators see the entire battle. Connection quality displays measured polling latency, with automatic retries and **Reconnect now**. Saved session credentials reserve disconnected seats for five minutes. Server checkpoints now support process restart recovery; see storage requirements below.
- **Map editor** creates a 4000 × 4000 battlefield with up to six starts, forests, gold mines, rock peaks, hills with ramps, rivers and bridges. **Validate** checks clear starting areas and ground connectivity, and warns about missing or uneven nearby resources. Save maps on this device or export/import bounded, data-only JSON. Custom maps currently support local play against AI, rather than online lobby sharing.
- **Original campaign** offers three missions: First Light (economy and recruitment), Ember Road (convoy escort against three waves), and Living Crossing (hold a contested river objective). Completion is saved on this device; normal saved games also preserve mission state.
- Settings includes independent ambiance, adaptive music, acknowledgment tones and volume controls. All new audio is synthesized locally from original oscillators and noise; it uses no recordings from another game. The convoy is an original procedural model.

Verification: `npm test`; `CHECK_URL=http://localhost:3077 node tools/check-borderlands.cjs`; `CHECK_URL=http://localhost:3077 node tools/check-experience.cjs`. Browser checks use Chromium and the Playwright installation documented by those scripts.


## Army commands, accessibility and recovery (20261011-command-and-recovery-r1)

- **Patrol** alternates between the current position and your chosen destination, engaging enemies along the way. **Guard ally** follows and protects an allied unit or building. **Retreat** immediately cancels combat and heads toward a completed friendly Stronghold or depot. Stop or a new ordinary order cancels these persistent commands. Default editable shortcuts: Shift+P, Shift+G, Shift+R. On PC choose a command then right-click its target; on phones tap the target.
- **Settings → Battle information → Tactical overlays** opens settings for formation previews, selected attack ranges, rally points, resource depletion and idle production. Optional team symbols make color distinctions easier to read. Large interface, larger text and reduced effects are saved on this device. Reduced effects preserve combat animations while reducing decorative motion, flames and particles.
- **Faction strategies** on the menu explains original strengths and counters. Dawnward heavy infantry trade 6% movement speed for four percentage points of armor protection. Dominion melee troops gain 8% movement speed but lose four protection points. Rooted Verdant troops take 12% additional artillery damage. Existing tactics and counters remain active.
- Damaged buildings show cracks and damage labels; destroyed structures collapse and leave bounded, temporary rubble. Units have brief falling death animations. These decorations do not obstruct movement.
- **Battle report** includes army value (gold + lumber cost of surviving fighters), net spending after refunds, casualties, kills and building losses. Economy charts sample earned resources, spending and army value every five simulation seconds. Reports can be downloaded as JSON. Online players see only their own report until the match ends; spectators see all commanders. Saved visual reviews retain sampled report history.
- **Browse public lobbies** lists only waiting, unprotected rooms whose host explicitly opts in. Private and passcode-protected rooms are never listed. Browser discovery uses this game's own server API, with no external service or keys.
- The optional performance panel reports frame time, simulation, AI, route calculation, graphics CPU submission, draw calls and triangles. Graphics submission is not GPU execution time. Route corridors, obstacle indexing, bounded route bursts and cached hero queries reduce repeated work.

### Restart recovery and Render storage

The server writes atomic private checkpoints every five seconds and after lobby changes. They preserve hashed passcodes, session credentials, fog, orders and ongoing production. Recovered matches pause until a player reconnects; the existing five-minute seat reservation still applies. Checkpoints are outside the static-file allowlist and must not be committed or published.

By default, checkpoints use `.kaw-data/`; set `KAW_DATA_DIR` to change the location. Local process restarts recover from that directory. Render's free ephemeral filesystem does **not** guarantee recovery across redeploys or container replacement. For durable recovery, attach a retained disk on a Render plan that supports it, mount it at `/var/data`, and set `KAW_DATA_DIR=/var/data/kaw`. This update does not change your plan or purchase storage. A healthy `/healthz` reports `matchRecovery: true`; `checkpointError: true` indicates a write failure.

### Verification and performance limits

Run `npm test`, `npm run build:graphics`, and `CHECK_URL=http://localhost:3079 node tools/check-command-hud.cjs` for desktop and phone controls. `node tools/benchmark-battles.cjs` creates six armies with 200 units each and measures thirty simultaneous movement simulation steps; `PROFILE=1` adds detailed instrumentation. This is a synthetic movement stress case, not a rendered GPU benchmark or a guarantee of 60 FPS. The latest cloud run measured approximately 34 ms median and 48 ms p95, with a 78 ms maximum. Occasional steps still exceed the 50 ms tick budget. This measures server movement and visibility, not rendered combat FPS; use the panel to profile your actual device and server.


## Frontline feedback and skirmish rules (20261011-frontline-skirmish-r2)

- **Skirmish setup** configures starting resources (100/300/600 of each), speed (0.75×/1×/1.5×), supply maximum (50/100/200), teams, and victory. Strongholds wins by destroying opposing bases; Elimination requires clearing all opposing units and buildings; Domination requires holding every Signal Stone for 120 simulation seconds. Houses are still required to raise supply. Online rules are selected by the host and enforced by the server.
- **Ready check** requests fresh guest readiness for 30 seconds. Optional **AI control during disconnects** takes over after 15 seconds and relinquishes control when the player reconnects. Five-minute seat reservations, private passcodes, and restart checkpoints remain in effect. Connection notices show reconnect time and temporary AI control.
- Original faction-specific synthesized acknowledgments, weapon sounds, completion cues and threat alerts respect the sound and acknowledgment settings. No external audio service, recordings, or API keys are required.
- Selected units display ability cooldown progress, timed fire/venom/slow/guard/stun labels and selected aura boundaries. Phone menus keep banner crafting inside the scrollable menu.
- The tutorial adds supply construction, artillery counters, elevation ramps, attack-move and retreat exercises. **Balance notebook** retains up to 50 eligible matches on this device, grouped by faction and human/AI control, with win rate, match length and troop production. Its JSON export is manual; no analytics are uploaded. Campaign, tutorial, replay and spectator sessions are excluded. These descriptive results are not controlled balance experiments.
- Each stock map has four crossings, cleared forest approaches, equal nearby starting trees and two expansion mines near defensible terrain. The map screen has a fairness check for resource access and connected ground routes.
- Visibility uses circular cell spans, traffic uses tighter spatial queries, blocked route requests wait for their scheduled budget, and AI decisions are staggered. Server matches run in independent lexical closures compiled from trusted repository code; client commands remain validated data. Distant animation and small unselected unit shadows update less often while detailed models and textures remain enabled.

Validation: `npm test`, `npm run build:graphics`, `node tools/benchmark-battles.cjs`, `CHECK_URL=http://localhost:3081 node tools/check-frontline.cjs`, and `node tools/check-frontline-multiplayer.cjs`. The browser checks exercise desktop and touch interfaces, actual tutorial actions, host rules, readiness, disconnect takeover and return of human control.

## Tactical polish (20261011-tactical-polish-r3)

- **Visible army groups:** the numbered strip shows each group's living-unit count and selection state. Choose **Store group**, then a number to assign the current selection. Ctrl + 1–9 stores and 1–9 recalls on PC. The strip remains available when the phone command panel is minimized; swipe it horizontally for later groups.
- **Income & depletion:** the income bar shows actual earned gold and lumber per minute over a rolling sixty-second window. Early estimates use the elapsed time available. Starting resources, administrative resources and spending do not count as income. Expand the bar for nearby assigned mine/forest depletion warnings; click a warning to locate it. Forest warnings consider the surrounding grove rather than each individual exhausted tree.
- **Adaptive opponents:** scouting uses each side's visibility mask, with thirty-second memory. Observed air armies increase ranged recruitment, heavy infantry encourages high-damage ranged counters, and built-up positions encourage artillery and flyers. Small raid parties attack recently seen collectors and drop-offs; nearby force estimates trigger retreats from losing fights away from the home base. Dedicated scouts explore potential start sites and avoid nearby threats. Existing difficulty bonuses, technology requirements and economy budgets remain in place.
- **Recruitment guidance:** unit cards and selected-unit information explain roles, useful matchups and vulnerabilities. These describe existing mechanics; this update does not add universal hard counters or silently change combat statistics.
- **Squad passage:** formations probe narrow approaches at a bounded interval. Ground followers queue along their leader's actual trail through obstacles, then recover their destination slots. Leaders reduce pace for distant squad members. Flyers retain independent clearance. Normal collision, ramps, path budgets and order cancellation still apply.
- **Private map pings:** choose **Danger**, **Attack here** or **Need help**, then a battlefield or minimap location. On phones choosing a ping opens the Map panel. Pings last eight simulation seconds and are limited to one per commander every two simulation seconds. Online pings are authenticated and delivered only to allied players; spectators cannot send them. Pings do not uncover terrain or reveal hidden enemies. Free-for-all players see only their own pings.
- **Optional objectives:** Skirmish setup and online host settings include the existing Signal Stone hold mode plus **Convoy race**. Automatic wagons depart from each Stronghold and use ordinary ground routes to a marked depot near a crossing. Escort them with **Guard ally**, or intercept opponents' wagons. The first side to deliver three wins; destroying every opposing Stronghold also wins. Delivered wagons are removed without recording a casualty; destroyed wagons are replaced after thirty seconds. Convoys use no supply, cannot be recruited or redirected, and their objective progress is included in saves and server checkpoints.
- **Consistent rendering:** `graphics/appearance-standards.js` shares sunlight/fill/exposure and surface limits across original assets. Stone, wood and cloth retain matte response; metal retains restrained highlights and authored texture maps. Units share a team-color ground badge without recoloring their skin or scales. Animation blends last 0.12 seconds; walking cycles follow distance traveled, so moving troops do not keep sliding or marching while stationary. Existing resolution, shadows and distant-animation budgets remain available.

Verification: `npm test`, `npm run build:graphics`, `CHECK_URL=http://localhost:3083 node tools/check-strategy.cjs`, and `node tools/check-strategy-multiplayer.cjs`. The checks cover routed convoys on all stock maps, bridge traversal, AI counters/raids/retreats, rolling income, team-only pings, desktop/touch controls and live 3D loading. `FORMATIONS=1 node tools/benchmark-battles.cjs` also exercises six simultaneous 200-unit formations. Both benchmark modes measure server CPU simulation, not rendered GPU frame rate or a guarantee of smooth play on every device.

## Compact battlefield and navigation polish (20261011-walls-and-movement-r4)

- PC commands use smaller cards and a 180px panel; phone controls retain their touch targets. Save game and Save replay are in Settings. Idle fighters and Deploy artillery shortcuts have been removed.
- Adjacent Verdant wall segments gain continuous stone links, including corners. The Dominion Rock Hewer has painted wood grain, knots and a sling arm that winds up, launches and recovers with its attack.
- Units retain safe route waypoints near obstacles, steer less sharply through traffic, and fall back to their clear waypoint direction when avoidance would push them into rocks. Local 3D motion is smoothed without moving the simulation or changing hit detection.
- Hard and Extreme react and raid sooner; Extreme can build three infantry production buildings. Existing scouting, counter recruitment, artillery/air technology, retreats and economy rules remain active.
- Validation: `npm test`, `CHECK_URL=http://localhost:3083 node tools/check-experience.cjs`, `CHECK_URL=http://localhost:3083 node tools/check-strategy.cjs`, and `CHECK_URL=http://localhost:3083 node tools/check-battlefield-polish.cjs`. The mine regression exercises five collectors repeatedly delivering from one natural boulder mine.

## Army, replay and performance improvements (20261011-army-and-replay-r5)

- Army stances: **Aggressive** automatically pursues enemies within sight; **Defensive** limits automatic pursuit to 180 world units around its anchor; **Hold position** stops and fires only within weapon range. Explicit movement and attack orders retain player control. Moving updates the defensive anchor. Change stance shortcuts in Settings (defaults Shift+A, Shift+D and Shift+S).
- Patrol supports up to eight waypoints and returns through them. Choose Patrol, set the first destination, then choose Patrol again and Shift-click additional points. A normal new order or Stop cancels the route. The same validated commands run on the multiplayer server.
- Worker, building and army warnings have separate alert categories and sound pitches. Worker warnings cannot be swallowed by a nearby army alert; minimap pulses carry an alert symbol.
- Optional combat feedback displays actual HP changes: damage in orange, healing in green, protected damage in blue with a diamond. Existing fire, venom, slow, stun and aura markers remain. Toggle feedback and reduced motion in Settings. Faction selection cards now explain their existing strengths and weaknesses.
- AI mixes infantry, ranged troops, siege and flyers into an advancing formation, regroups scattered forces, and assigns support to guard the leader. Plans use observed or recently scouted targets, preserve retreating troops, and leave room for economy raids and base defense.
- Saved visual replays include major-battle and Stronghold-destruction markers. Click a marker to jump the timeline and camera to that event. Events honor the recorded player's visibility. Replay speed remains 0.5×, 1×, 2× or 4×. The recorder remains bounded to 180 snapshots and 8 MB.
- Rigid animated unit parts share GPU instancing batches by geometry, material and shadow flags. Single-weight rigid skins are split back into bone-attached parts with the same UVs, normals and pose. Each limb retains its world transform and geometry detail; blended skins and transparent meshes retain their ordinary rendering path. Batch capacity grows in powers of two, unused batches expire, and session cleanup releases instance buffers.

For a repeatable live-renderer performance report, start the server, then run:

```bash
CHECK_URL=http://localhost:3083 BENCH_UNITS=300 BENCH_SECONDS=10 BENCH_OUTPUT=/tmp/kaw-quality.json node tools/benchmark-quality.cjs
FORMATIONS=1 node tools/benchmark-battles.cjs
```

The browser report includes frame percentiles, simulation time versus wall time, draw calls, triangles, post-GC heap growth, and troops that made no movement progress while still away from their goal. It uses Chromium's software GPU in this environment; results are diagnostic and are not a prediction of a player's GPU performance. Compare matching hardware, viewport, quality and unit counts. Heap growth also includes the bounded replay recorder and newly cached assets; one sample cannot prove a leak. Navigation, stances, patrol routes, coordinated AI, batching transforms and buffer ownership have automated regression tests. `tools/check-army-polish.cjs` exercises the desktop/phone controls and saves, loads and seeks real replay event markers.

### Commander tools and river effects (`20261011-commander-and-water-r6`)

- Select fighters and expand **Target priorities & retreat point** to favor nearby fighters, artillery, buildings, or the nearest target. Priorities respect fog, weapon range, and the existing stance; direct attack orders still take precedence. Save a safe retreat point and optionally enable automatic retreat below 30% health. Retreat destinations persist in saved games and authoritative multiplayer checkpoints.
- Three additional playable layouts include River Crossing, Crown Plateau, and Expansion Valleys. Terrain previews and multiplayer map selection include them. Stronghold destruction remains available; **Survive for 15 minutes** is an additional victory condition in skirmish settings, awarding surviving human teams when the timer expires.
- The detailed battle report includes resources spent, idle production-building seconds, blocked production-building seconds, and the unit type with the most credited defeats. Production times accumulate across buildings, so they can exceed match duration. Saves made before these counters existed start collecting them after loading.
- Finished online matches provide **Vote for rematch**. All remaining connected human participants must vote. The lobby returns to its ready screen with passcode, factions, colors, teams, AI seats, map, and rules retained. Spectators cannot vote and guests must become ready again before the host starts.
- Settings expose texture filtering, shadows, wind grass, and ambient occlusion/bloom independently of the existing quality preset. These budgets preserve authored unit geometry at every zoom level. Water uses flowing ripple normals, low-roughness PBR environment reflections, clearcoat shine, and animated foam without another scene capture pass. Dawnward artillery impacts show bounded radial fire/smoke plumes with sparks at projectile contact. Water reflections use the lighting environment; they do not mirror every moving unit or nearby building.

Run `npm test`, `npm run build:graphics`, `CHECK_URL=http://localhost:3084 node tools/check-commander-tools.cjs`, and `CHECK_URL=http://localhost:3084 node tools/check-water-explosions.cjs` against the development server. The latter validates the live water shader and saves `/tmp/r6-water-explosions.png`.


### Crownfall campaign levels

Choose **Campaign · 10 levels** from the main menu. Your selected faction and banner color carry into each mission. Defeat all enemy Strongholds to unlock the next level. Enemy rosters grow from infantry to siege, flyers, heroes and specialists, ending with three allied AI opponents.

Each mission awards one star for victory, one for its displayed time goal, and one for staying within its loss limit without losing buildings. Best stars and unlocks are saved on this browser. Results offer Retry, Next level and Level selection. Campaign battle saves use the existing single-player save system.

### The Astral Remnant

Choose the fourth faction card to play the original alien faction in skirmishes,
Campaign, or online lobbies (the multiplayer server must also have this update).
The Remnant Ark begins as a tilted, damaged spacecraft. Level 2 repairs its hull
and landing supports; level 3 adds weapon pods and a command module; level 4 adds
outer hull sections and reactor spires. Each tier retains the original hull and
uses the level-one rendering scale so upgrades never shrink the stronghold.

Clone Foundries train Riftblades, Pulse Troopers, Prism Stalkers, Phase Binders and
noncombat Survey Skiffs. Graviton Works produce Grav Mortars at Stronghold level 2.
Flight Nexuses require level 3 and train Shard Interceptors (spacecraft) and
Voidwing Leviathans (heavy twin-engine interceptor spacecraft). All use the existing gold/lumber,
supply, armor, research, AI, fog and saved-game rules. The three hero choices are
Star Warden, Rift Seer and Void Sovereign. The models, portraits and faction names
are original; no external game's assets are included.

Alien visuals are defined in `graphics/alien-models.js`, generated once per
model type and shared between instances. Wings, tails and limbs animate through
cached pivots rather than regenerating geometry. Existing factions' graphics
assets are unchanged. PNG previews also cover the lightweight fallback renderer.

Regenerate the alien menu/fallback/portrait PNGs after editing the models with
`node tools/export-alien-previews.cjs` (Chromium and Playwright required), then run
`npm run build:graphics`. Check the four live tiers with
`CHECK_URL=http://localhost:3085 node tools/check-alien-faction.cjs`.

Astral unit silhouettes identify their jobs: quadruped cargo drones carry a
salvage tool, Riftblades wear broad armor with twin blades, Pulse Troopers carry
compact coil rifles, and hooded Prism Stalkers carry longer scoped rifles.
Phase Binders have containment canisters and focus rings. The Star Warden uses
a shield and blade, the Rift Seer has a psionic halo, and the Void Sovereign uses
a crown and command staff. Signal Bearers carry a banner without a rifle.
Survey Skiffs use a rotating sensor dish, Shard Interceptors have swept wings,
and Grav Mortars walk on six legs with recoiling artillery cradles. These visual
changes retain existing combat statistics and use cached animation pivots.

### Campaign talents and Astral expansion

The main menu's **Campaign talent tree** offers six role branches with health,
damage and mobility ranks. Each faction gets three starting points plus one per
earned Crownfall star. Reset a faction's talents freely before a mission. The
loadout is copied into the campaign save; mid-mission menu changes do not change
that save. Only the player's units in single-player campaign missions against
AI receive bonuses. Skirmishes, enemy AI and multiplayer never receive them;
the server does not load browser talent code. Selected-unit stats show bonuses.

Both Astral flying attackers are spacecraft: Shard Interceptor and the heavier
Voidwing Leviathan. Riftblades use the menu Warden's silver armor, crest, energy
blade and hexagonal shield. Buildings now have function-specific architecture.
Alien ranged attacks and defenses emit cyan laser beams. New specialists:

- **Aegis Sentinel:** heavy infantry, Stronghold 2, Clone Foundry.
- **Null Disruptor:** laser infantry with a 25-damage, 2-second EMP stun within
  170, 18-second cooldown, Stronghold 3, Clone Foundry; visible enemies only.
- **Nanite Tender:** unarmed support, restores 4 health/s within 130, Stronghold 2,
  Graviton Works. Multiple tenders do not stack healing; AI tenders follow troops.

Phase Plating and Laser Focusing are researched at the Armament Lab; Restorative
Nanites at Graviton Works; Interceptor Drives at the Flight Nexus. Higher ranks
require Stronghold 3. Costs, queues and the same bonuses apply on the server.

The original adaptive score is synthesized once into calm and combat loops and
crossfades during battles. Existing music, sound and volume settings apply. No
external music service, licensed recording or music download is required.

Rendering retains full models and textures. Cached batch memberships eliminate
repeated per-part UUID keys; dirty GPU updates upload the changed matrix span.
Static landscape matrices update only when transforms change, including falling
trees and shrink animation. `node tools/profile-render-work.cjs` compares this
CPU workload with `ae12e61`; it does not measure end-to-end GPU frame rate.

Battle polish (r35): Settings → Battle performance enables an optional FPS monitor
and downloads a bounded JSON report (3,600 recent frame timings, 120 lag spikes).
Reports include simulation, AI, route search, Canvas and presentation CPU timings;
they are diagnostics, not GPU frame-time measurements. Background/paused intervals
are excluded. Run `CHECK_URL=http://localhost:3090 node tools/profile-battle-scenarios.cjs`
against a local server for five simulated minutes each of crowded combat, mine
traffic and AI routing. Set SCENARIO_STEPS for shorter checks.

Original campaign now also offers Last Departure (evacuate five of six marked
collectors to the eastern beacon), Hold the Gate (four-minute fortress defense),
Lost Patrol (rescue and escort two survivors), and The Last Reserves (destroy the
enemy base with finite starting resources and exhausted deposits). Campaign talents
apply here, while online battles remain isolated. Selected-unit stats explain
active protection, slows, burning/poison, healing, standards and weapon research.
Combat sounds are synthesized locally; no downloaded recordings are used.

Visual inspection and material polish (r38): the main menu's **Inspect units &
buildings** opens the live 3D models with faction, asset, animation, zoom and
quality controls. Preview quality is independent of battle preferences; closing
stops its animation and releases its renderer resources. Astral Strongholds grow
their primary hull and command prow across all four tiers. Riftblades carry a
longer blue emissive blade with a restrained additive halo. Building panels have
beveled edges, recessed fittings, normal relief and roughness variation.

`graphics/surface-detail.js` adds derivative-filtered metal, bark and masonry
microdetail while retaining existing textures. Detail fades below pixel size to
avoid distant shimmer. Ground troops follow gentle ramp slopes and melee clips
use a windup/strike/recovery timing curve. Static route caches now survive mobile
unit production and losses; workers stage outside full mines to clear entrances.
These changes improve the existing models; final realism remains limited by their
underlying geometry and textures.

Tactical feedback & thrusters (r39): moving Astral spacecraft have rear-facing
blue plasma exhaust; it shuts off when movement stops. Astral armor cladding is
raised geometry with chamfers, seams and fasteners. Combat adds directional hit
reactions, flight banking, insect leg tucking, damaged building tint and torn
standards. Hover unit powers for descriptions/range previews; Bombard shows its
70-unit impact area, visible targets and friendly-fire warning.

Collector mine clicks now take priority over overlapping units/building artwork,
including touch; a closer Stronghold/drop-off remains accessible for deliveries.
Hidden miners cannot enter a box selection. Cached projected pick bounds avoid
repeated rig traversal on mouse movement. Loaded collectors have collision
priority, and formations can use two files through passages before reforming.
AI siege/support escorts react to observed threats and injured specialists retreat.
Astral combat units recharge a 20-point phase capacitor at 3/s within 180 of a
completed Stronghold, House or Depot after 3 seconds without damage. Full charge
reduces incoming damage by 15%; taking damage drains charge. Other faction
formation, momentum and terrain-control passives remain active.

The repeatable benchmark uses seed 20261022, fixed armies/orders and camera paths.
Default mode measures simulation CPU time. Set `BENCH_RENDER=1` to include real
frame-rate/frame-time measurements; `BENCH_QUALITY=low|balanced|high` selects the
render preset, and `SCENARIO_STEPS` limits duration (default 300 rendered frames or
6,000 simulation ticks). Example: `CHECK_URL=http://localhost:3092 BENCH_RENDER=1
SCENARIO='crowded fight' SCENARIO_STEPS=120 node tools/profile-battle-scenarios.cjs`.
Compare on the same device: software WebGL in a cloud container is not a gaming
GPU benchmark. Grass keeps its full density and detail, using smaller static
chunks to cull more invisible vertices. Pathfinding/AI spatial lookups and pick
caches reduce overhead; extreme congestion may still produce occasional spikes.

### Tactical readability update (r40)

Settings now includes larger control text, stronger selection rings, team symbols and independent music/combat/alert volume sliders. Preferences stay on this device. Laser focusing rank 1 turns Astral beams purple; rank 2+ turns them red (existing +10% damage per rank remains).

Signal Stone locations have walkable, destructible rubble cover (300 durability, 20% protection against ordinary ranged attacks; artillery bypasses it). Absorbed fire wears cover down. Elevated defenders receive 10% protection against ordinary ranged fire from below. These bonuses multiply with existing shields. Terrain labels identify both advantages; cover adds no path obstacles. Older saves without cover still load.

Visible mines display your assigned collectors, occupancy out of five, entrance/exit lane markers, waiting positions and blocked-route warnings. Wreckage, broken shield fragments, impact craters and dark scorch patches expire after 18 seconds in a pool capped at 96 marks; offscreen and fogged effects are skipped.

Performance work caches defensive-unit and Rootward queries, avoids evaluating approach points for every tree before choosing the nearest valid one, and keeps traffic updates at 2 Hz. Graphics resolution, mesh detail and textures are unchanged. Run `node tools/profile-battle-scenarios.cjs` against a local server for repeatable CPU timing; `BENCH_RENDER=1` also measures presented frames. Mine congestion can still cause occasional spikes; CPU timings alone do not establish desktop frame rates.

Run `node tools/balance-armies.cjs` for mixed equal-budget faction matchups with reversed spawn sides, counter matchups and three-siege-versus-Stronghold tests. Gold and lumber have equal weight, with unspent budget reported. [Recorded arena results](docs/balance-r40.json) are a diagnostic, not player win rates: mirrored matches expose a strong side/formation bias, so no blanket faction stat changes were made from this sample. Economy, research, player control and campaign bonuses require separate testing. Siege destroyed an undefended baseline Stronghold in roughly 18–20 seconds in this sample.

### Formation fairness, research equipment and six-player testing (r41)

Normal attacks read a shared start-of-tick position snapshot and commit their damage together, allowing ready lethal attacks to trade. Damage-over-time runs before attack processing. Target ties use stable IDs rather than map bucket traversal. Factions interleave updates with a rotating first slot; overlap corrections commit simultaneously. Stuck troops evaluate detours by distance to their destination instead of choosing the first turn from unit-ID parity.

Formation leaders slow down for lagging followers; squads open temporary side lanes for retreating allies and blend back into their slots after bottlenecks. Stop and new orders cancel retreat priority. These behaviors retain the original final destination and existing pathfinding.

Infantry and artillery research now adds segmented, beveled armor fittings, reinforced weapon collars and higher-rank shoulder protection to existing animated rigs. Materials/geometry are shared; fittings rebuild only when research rank changes. Research tooltips compare projected attack and armor values (including queued ranks). Astral specialist research explains its own damage, protection, healing or speed change. Model geometry, texture quality and render resolution remain intact.

`npm run test:balance` runs 12 cross-faction side-swapped matchups, 24 identical-army controls, counter tests and siege tests. [Recorded r41 results](docs/balance-r41.json): all six cross-faction pairings kept the same winner after swapping sides; all 24 identical-army controls ended in simultaneous defeat, not timeouts. This validates these controlled arenas, not universal faction balance on every map. The mirrored congestion regression also checks positions and health throughout combat.

`npm run test:stress` starts six hard-AI slots at 200/200 supply each. Scripted reinforcements every five seconds keep the match near the cap; set `STRESS_REINFORCE=0` for natural attrition. Default simulation duration is 60 seconds; use `STRESS_SECONDS=300` for a longer run. `STRESS_PROFILE=1` records nested CPU phase totals (profiling adds overhead).

The stress report separates simulation ticks, snapshot/JSON generation, gzip CPU cost, and six concurrent HTTP polling clients. Wire body sizes come from compressed content lengths at the existing 150 ms polling interval. The HTTP phase freezes the final state to isolate costs; loopback latency is not Internet latency. `STRESS_GRAPHICS=1 STRESS_SECONDS=.1 STRESS_FRAMES=12 npm run test:stress` additionally measures real WebGL presentation of the original full-supply scene. It reports visible model, triangle and draw-call counts with normal camera culling. Software-rendered cloud Chromium is unsuitable for predicting desktop GPU frame rates.

[Recorded six-player stress results](docs/performance-r41.json) keep CPU, compressed HTTP traffic and software WebGL measurements separate. This deliberately extreme 1,200-unit workload still exceeds the 50 ms simulation budget in this cloud environment; it is a diagnosed limit, not a claim of smooth maximum-army play. The normal camera rendered 231 models in a scene containing 1,200 units. GPU timings must be repeated on target PC hardware.

Benchmark setup: run `npm start` in one terminal, then the benchmark command in another. Tools default to `http://localhost:3000`; set `CHECK_URL` for another local port. The optional WebGL checks need Chromium and Playwright; the cloud workspace paths are used by default.

### Stronghold machinery, aiming defenses and clearer menus (r42)

The Astral Remnant ark gains animated solar arrays and a tracking satellite dish at level 2, independently aiming twin machine-gun turrets at level 3, and an orbiting relay satellite at level 4. These are physical scene parts, not flat overlays. Level 3 turret damage and reload balance remain unchanged. Defensive buildings track targets while reloading; rooftop weapons turn independently of their foundations, and Dominion tower trolls turn toward their victims. Friendly allied bases are excluded from Stronghold targeting.

The Home Screen now offers Single player, Multiplayer, Library & creative tools, and Settings. Single-player setup proceeds through game mode, faction, opponents and battlefield. Back preserves your choices. Existing campaigns, tutorials, saves, banners and tools remain available on their respective pages.

Performance work removes repeated full-army visibility scans in AI raids, shares spatial queries with defenses and area effects, caches formation membership/ranks, skips retreat-lane searches when nobody is retreating, and freezes local transforms only on rigid mesh fittings. Building damage hooks and water texture references are cached once. Mesh detail, texture resolution, shadow quality and effects budgets are preserved.

[Recorded CPU comparison](docs/performance-r42.json) restores the same six-player, 1,200-unit checkpoint into the previous and current engines for 300 ticks each: mean tick time improved from 43.74 to 29.18 ms; p95 improved from 86.29 to 40.66 ms. The worst current tick still took 158 ms. These shared-cloud CPU measurements demonstrate a reduction in simulation cost, not a guarantee of desktop FPS or the elimination of all spikes. Time-budgeted route planning can produce slightly different paths between runs.

To reproduce with trusted local engines and a generated checkpoint:

```sh
CHECK_URL=http://localhost:3000 STRESS_CHECKPOINT=/tmp/cap-state.json npm run test:stress
BASELINE_ENGINE=/path/to/previous/multiplayer/engine.cjs node tools/compare-stress-cpu.cjs /tmp/cap-state.json
CHECK_URL=http://localhost:3000 node tools/check-menu-flow.cjs
CHECK_URL=http://localhost:3000 node tools/check-stronghold-machinery.cjs
```

Validation: 424 automated tests, desktop/phone menu navigation and launch checks, live WebGL machinery/muzzle checks without browser errors, and 36 side-swapped combat arenas. Identical armies still mutually defeat each other in all 24 controls; all six cross-faction pairings retain the same winner after a side swap.

### Centerhold survival and battle polish (r45)

Choose **Single player → Centerhold · Endless waves → your faction → battlefield**. Your Stronghold starts at the map center with four collectors, four fighters, 600 gold and 600 lumber. The chosen biome becomes an arena with an open center and clear approaches; rivers are removed so they cannot cut off waves or resource deliveries. Prepare for 60 seconds. Enemy factions rotate, attacks arrive from successive compass directions, siege appears from wave 5 and flyers from wave 7. Enemy health rises each wave; research ranks rise to 3. Clear a wave for 90 + 20 × wave gold and lumber and 35 seconds to rebuild. There is no time-limit victory: defend your central Stronghold until it falls.

Waves have at most 72 enemies and cannot overlap: new waves wait for every enemy and pending phoenix revival to finish. Spawn sites are checked against obstacles and units; a fully blocked entrance retries rather than placing enemies inside terrain or awarding a free clear. Later waves keep escalating health after the army-size cap. Wave progress, bonuses, spawn timers and the last 96 events survive the existing save/checkpoint format. Campaign talents do not apply.

**Single player → Faction field drill** teaches scouting and the chosen faction's signature hero power in two playable objectives, with faction strengths and counterplay explained. The full guided tutorial includes these objectives after its existing lessons. No faction balance multipliers are changed by these presentation improvements.

Phones gain a compact **Commands** menu for Move, Attack-move, Attack, Gather, Stop and Hold. Settings offers Standard/Large/Extra-large touch buttons, optional larger health bars, heavy-attack direction cues and incoming boulder warnings. Existing exact research comparisons, visible research fittings, status descriptions, reduced-effects options and faction mechanics remain in place. Selected-unit stats now lead with their battlefield role. Group orders receive a concise acknowledgment, a destination ring and a blocked-route warning when necessary. These overlays do not reveal fogged enemies.

Post-battle results now include a chronological timeline of Stronghold and research upgrades, army milestones, major losses, economy snapshots and survival waves. Histories remain bounded. HTTP diagnostics add the last 360 round-trip/body-download-and-decode samples and known wire-byte counts to the downloadable performance report, separate from CPU timings. Reports contain no request URLs, credentials or game payloads. Network round trips include server work; these measurements are not pure network latency.

Further CPU improvements replace artillery's full-army splash scan with the shared spatial index and reuse the primary-hero list per simulation tick. No mesh, texture or shadow detail is removed. [Recorded comparison](docs/performance-r45.json) on the same 1,200-unit checkpoint: mean tick 29.41 → 28.27 ms, p95 45.48 → 40.82 ms; worst current tick 164.93 ms. This modest shared-cloud improvement does not eliminate spikes or establish target-device FPS.

Validation commands:

    npm test
    CHECK_URL=http://localhost:3000 node tools/check-menu-flow.cjs
    CHECK_URL=http://localhost:3000 node tools/check-centerhold.cjs

The survival regressions cover all three arena biomes, central spawn/resource safety, escalation, research limits, clearing/rewards, blocked entrances, endless defeat rules, save restoration, phoenix membership/health after revival and bounded history across 110 waves.

### Crownwater Atoll (r46)

Choose **Crownwater Atoll** in the battlefield picker for a single-player skirmish or an online lobby. The 4000 × 4000 preset supports two to six players, randomly assigned among six starting islands.

Each home island is surrounded by water and has exactly one land causeway to its own smaller expansion island. That expansion has one additional gold mine and a second causeway into the large central island. The center contains nine mines and a dense coastal forest belt with six clear entrances. Total resources: 21 gold mines, including six home mines and six expansion mines, plus 138 central shoreline trees and additional island groves. Starting resources, unit balance and gathering rates are unchanged. Ground units must follow the island chains; flying units retain their ability to cross water.

All mines retain their existing boulder artwork. Starting collectors face the outlet, with the home mine on their open side so the Stronghold and idle workers do not obstruct the initial mining route. Preset-specific validation checks dry starts, connected ground routes and dry resource footprints. This generated preset uses its own water-topology validator; the custom map editor retains its existing bounded river format.

A 128 × 128 canonical land/water mask supports constant-time water checks through prefix sums. Quadtree merging reduces ocean collision to 864 square obstacles. The live renderer combines water into one mesh with matching tile-edge subdivisions and the existing wave, reflection and lighting effects. Online snapshots send a preset identifier instead of repeatedly serializing more than 80 KB of static water tiles; clients reconstruct the canonical geometry from the shared module. Saves and server checkpoints retain the full terrain.

Validation: all 442 automated tests passed. New cases cover single-outlet home islands, expansion approaches, all six home and expansion gold deliveries, ground movement to the center without crossing water, dry mines/trees, save restoration, protected human/AI lobbies and compact network snapshots. Desktop and phone browser checks pass, including decoding network terrain. The live WebGL scene loads without browser or shader errors.

    CHECK_URL=http://localhost:3000 node tools/check-atoll.cjs
    CHECK_URL=http://localhost:3000 CHECK_GRAPHICS=1 node tools/check-atoll.cjs

### Crownwater islands and airlifts (r47)
The first three map choices are Crownwater Atoll (larger home islands), Crownwater
Landring (an outer land ring connects starts), and Crownwater Shattered Isles
(separate islands requiring air transport). All support six starting positions
and the same home/expansion gold and rich central hub.

Every faction can train its own unarmed, six-passenger transport from a level-one
Stronghold or a Sky Roost: Skybarge, War Zeppelin, Canopy Skywhale, or Astral
Landing Craft. Move ground troops within 160, select the transport and press
**Embark nearby**, fly to the destination, then **Disembark**. Workers and artillery
can embark. Passengers retain their supply cost; blocked passengers stay aboard.
Transport destruction kills its passengers. Cargo survives save/load and online
play. Shattered Isles AIs also use transports to raid enemy islands.

The Home Screen restores the original four-faction painting (r49). Character
silhouette mattes select the original full-resolution pixels; separate hinged
layers animate phoenix/dragon wings, the planted treant and flying spacecraft.
The background is sampled unchanged outside the vacated silhouettes. A clean
plate fills the newly exposed areas; those hidden surfaces are necessarily
reconstructed. A separate water matte confines flowing texture animation to
rivers and waterfalls, keeping rocks and bridges stationary. No low-detail game
models replace the painted characters. Geometry is cropped to each layer to
reduce transparent overdraw. Rendering stops outside Home or in hidden tabs,
and reduced motion keeps a still composition. The original image is also the
loading and WebGL fallback. The source JPEG itself is unchanged.

Menu motion corrections (r50): wing-only anatomical mattes and an explicit
head/neck exclusion keep the phoenix's face stationary. Complete matte bounds
prevent wing-panel clipping. Pinned-root meshes flex without detaching at the
shoulders. Paired wings use a coordinated, faster downstroke
and slower recovery. Ships render behind both creatures. Fire samples travel
upstream to produce outward visible flow; staggered crossfades hide phase resets
and the muzzle pixels remain pinned. Browser regression checks compare head,
neck and muzzle pixels across multiple poses, verify layer ordering, and check
that menu rendering pauses outside Home on desktop and phone layouts.

Menu motion r51 keeps source-frame wing edges anchored so the top of the dragon wing cannot rotate into view as a straight cut. A slower dragon stroke and restrained distal membrane flex retain the original painting; gameplay rendering is unchanged. Browser checks sample both wing-frame seams throughout the animation cycle.

Menu and transport update r52:
- Full, Reduced and Still menu motion are saved under Settings. Reduced motion preference is respected, and all animation pauses off Home. Complete wing sprites and transparent foreground cutouts are separate from the scenery; character proportions stay fixed when the layout rearranges them for portrait screens. A bounded GPU pool adds outward embers/smoke and local heat shimmer.
- Dawnward Skybarge is a larger hot-air balloon; Dominion War Zeppelin is larger with armor bands; Verdant Grove Ark uses living roots, vein-ribbed leaf sails and crystal pods. Static details and sail details are merged by material to limit draw calls; original procedural grain is shared.
- Pick up nearby units recruits up to six ground units within 420, which approach and board automatically within 160. Selecting troops and ordering them onto a friendly transport also works (right-click on PC, tap in Order mode on touch). Stop or a new move order cancels boarding. Cargo remains authoritative online and survives checkpoints.
- Detailed-renderer startup uses a loading screen rather than temporarily displaying Classic graphics. Single-player simulation waits while that screen is active. Cargo indexing, cached wall neighbors and discovered-grass checks avoid repeated scans without reducing geometry or texture resolution.
- Validation: `npm test`, `node tools/check-menu-actors.cjs`, `node tools/check-transports.cjs`, and `node tools/check-graphics-startup.cjs` (Chromium desktop/mobile emulation; local server port 3100 or CHECK_URL).

Battle polish r53:
- Menu dragon shoulders use a separate solid body repair in front of both wing layers. The original face/muzzle remain anchored. Water uses an inset water-only mask with fixed bridge exclusion zones; both advected source samples must also be water, preventing decks/rails from flowing into the river.
- Transports have six passenger portrait buttons (click one to unload only that unit), plus Fly & unload with cached safe landing circles. New move/Stop cancels the destination. Ground occupancy, ownership, capacity and dry-land checks remain authoritative online; opponents cannot read a transport's private landing destination.
- Campaign levels 3, 5, 6 and 9 now introduce transport rescue, damaged-fortress defense, moving convoy escort and timed island evacuation. Objectives, transported/delivered IDs, timers and key assets persist in saves; existing ten-level progression and best-star records remain intact. Objective missions require keeping your Stronghold alive.
- Wounded troops using Retreat can withdraw behind healthy covering fighters while those fighters retain their attack orders. Explicit retreat points still take priority. Heavy attacks use restrained anticipation/recoil and damage-weighted hit reactions without delaying orders or changing damage.
- Role labels and strength/weakness descriptions accompany selected/recruited units. Armory/foundry Preview equipment opens the actual game models with before/after rank toggles and numeric research descriptions. Preview-only material/geometry ownership isolates it from the live battlefield. Cloth, skin and reflective materials share surface standards; upgraded fittings receive the same lighting/shadows as other models.
- Checks: `npm test`, `node tools/check-menu-actors.cjs`, `node tools/check-polish.cjs`, `node tools/check-transports.cjs`. Browser checks use local Chromium desktop/phone emulation, not physical iPhone hardware.

### White owl cargo transport (r54)
The Verdant Snowwing Owl replaces the Grove Ark with white layered flight feathers, golden eyes, animated wings and a woven cargo cradle. Six-passenger pickup, individual unloading and fly-and-unload orders are preserved. Wing geometry is merged by material to keep rendering costs bounded.

### Menu creature and waterfall motion (r55)
Phoenix wing roots now sit lower and farther apart at the shoulders. Tree cutouts share one continuous vertex deformation for chest breathing, crown sway and arm movement while keeping roots planted. Water masking retains thin cascade detail and adds downward foam flow while excluding rigid bridges and stone. Desktop and phone checks sample rendered water, tree, head and bridge pixels across multiple animation phases.
