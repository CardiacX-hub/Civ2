# Civ2 — Kingdoms at War


A dependency-free 2D browser RTS. Run `npm start`, then open the served game on port 3000. Run `npm test` for simulation smoke tests.

Choose the human **Dawnward** or the orc/troll **The Dominion**, customize banners, and play against one or two AI opponents. Each side begins with a stronghold and four collectors. Victory requires destroying every opposing stronghold; losing your own ends the game.

Click or drag to select friendly units. Shift-click adds to selection. **Right-click** the map to move selected units. Choose **Move** (or press **M**) and right-click to force movement even when pointing at a target. Left-click selects units and never issues movement. Use **Attack / gather** to target an enemy, resource, or construction site. Right-click an enemy to attack, a resource to gather, or a damaged Stronghold to repair. A destination ring and message confirm the order. Collectors choose buildings from the right-hand construction section. Buildings begin as construction sites and require a nearby collector until completed. Finished production buildings train units through timed queues. WASD or arrows pan the camera; clicking the minimap recenters it. Escape cancels placement. Pause freezes the simulation.

- Stronghold: collectors.
- Infantry Lodge: durable melee, balanced ranged, and fragile high-damage ranged infantry.
- Siege Works: slow artillery with splash damage.
- Sky Roost: fast flying units.
- Hero Sanctum: choose one of three faction heroes for the entire match. Dawnward Sun Marshal grants 30% damage reduction within 190 units. Dominion Stormcaller grants 30% attack damage within 190 units.
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

Equipment is now rendered as part of each character's hand hierarchy in all eight directions and 16 animation frames. Workers switch between an axe for lumber, a pick for gold, and a hammer for construction or repair. The Royal Marksman carries a two-handed musket with no bow. Units, artillery vehicles, buildings, walls, construction stages, trees, mountains and timber-framed gold mines share the Frontier renderer's painted PBR materials and lighting.

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

Each faction chooses one of its three heroes for the entire match: Dawnward's Sun Marshal (Paladin), Frontier Wizard and Frontier Ranger; The Dominion's Stormcaller (Berserker), Frontier Witch and Dragon Sovereign. Their selection panels describe nearby troop auras and unique active powers. Sanctum mastery benefits the chosen hero; Frontier-style powers are also unlocked with hero skill points, while purchased mastery requires Stronghold level 3. Stormcaller emits small lightning sparks. Dominion infantry can research Fire Spears, applying damage over time with Troll Spearthrower attacks.

Winding rivers divide each battlefield. Ground troops cross at wooden bridges; flying units cross freely. Riverbanks, contrasting grass, stones and flowers add terrain detail. Roof shingles cover both complete slopes, and Dominion horns use smaller curved shapes with visible mounting collars.

### Rainbow Laser Pig — 20261006-rainbow-pig

In Settings → Administrative code, enter `WHOLETTHEPIGSOUT` and press Apply code. A pink winged pig appears near your completed Stronghold. Select it and issue normal movement or attack orders: it flies across obstacles, leaves a fading seven-color rainbow trail while moving, and fires twin pink laser beams. It has 650 health, 60 base damage, 240 attack range and 150 movement speed. The code works for both factions and costs no resources. Entering it before a match enables one pig at the start of subsequent battles in this browser session; applying it during a match summons another pig.

## Multiplayer lobbies — 20261006-multiplayer

Choose **MULTIPLAYER · HOST / JOIN** from the main menu. Online battles support up to four total human and AI players, with at least one human. Each player has a unique banner color. The host chooses a map and can add a **4–64 character passcode**. Share the invitation link or seven-character lobby code; share the passcode separately. Guests mark themselves **Ready**, then the host starts the shared countdown. Normal mouse, keybinding and touch orders work during multiplayer, including gathering, construction, rally points, formations, research, training and cancellation.

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

Lobbies now have four total slots. Play with four people, two people and two AI opponents, three people and one AI, or one person and up to three AI opponents. In the waiting lobby, the host uses **AI opponents · Host controls** to add, edit or remove computer players. Choose each AI's Dawnward/Dominion faction, banner color and Easy/Normal/Hard/Extreme difficulty. Select an existing AI in **AI slot** to edit or remove it. Remove an AI to free a slot for another human.

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

- Every map has **10 gold mines**: one within reach of each of the four possible starting corners, plus six neutral mines. Trees grow in larger irregular groves with near-base patches; ramps and riverbanks remain clear.
- The Infantry Armory trains **Dawn Knights / Orc Ravagers**, **Longbow Rangers / Troll Spearthrowers**, and **Royal Marksmen / Shadow Hunters** independently. Each rank gives only that unit type +20% attack damage and +8 percentage points of armor. Rank 2 needs Stronghold 2; rank 3 needs Stronghold 3. Fire arrows/spears remain a separate ranged-unit upgrade. Three upgrades can be queued.
- The first successfully paid hero training order permanently locks that player's hero choice for the match, even if canceled. Only one living or queued hero is allowed across all Sanctums. After death, only that same hero can be recruited again. Starting a new match resets the choice.
- Heroes start at level 1 with **one skill point** and gain experience from their army's kills within **600 map units**. Workers give 15 XP; normal troops 45; artillery and large flyers 70; heroes 100; buildings 90; Strongholds 180. Each level requires `100 × current level` XP, grants one skill point, and is capped at level 10. Select the hero to view its XP bar and spend points in **Frontier Hero Tree**.
- The existing Frontier-inspired Paladin/Berserker prerequisite paths now support all six hero choices, with class-specific spell names for Wizard, Ranger, Witch, and Dragon Sovereign. Each skill costs one point and has three ranks. Skill-point training is available before Stronghold 3. Paid **Sanctum mastery** remains an additional Stronghold-3 research path and stacks with learned skills.
- Death removes one hero level, down to a minimum of 1, and resets progress toward the next level. It first removes an unspent point; otherwise it removes the most recently allocated rank, preserving the remaining prerequisite path. Retraining restores the remaining level and skills at full health.
- Unit selection and troop training buttons show small portraits cropped from the same faction-specific 3D sprite atlases used on the battlefield.
- Rivers have layered depth colors, surface texture, downstream currents, moving sun glints, and occasional fish leaps with landing splashes. Bridges and elevation ramps use shaded round logs with bark grain, knots, end rings, supports, and contact shadows.
- Hero progression, choice locks, and unit-specific upgrades run on the authoritative multiplayer server as well as in single-player. Desktop and phone browser checks verify the controls and portraits; `npm test` covers progression, death/retraining, resource placement, research isolation, multiplayer ownership, and existing RTS behavior.
