# Civ2 — Kingdoms at War


A browser RTS with live 3D models and an optional Classic renderer. Run `npm start`, then open the served game on port 3000. Run `npm test` for simulation smoke tests.

Choose the human **Dawnward**, the orc/troll **The Dominion**, or the wilderness clans of **The Verdant Covenant**, customize banners, and play against up to five AI opponents. Each side begins with a stronghold and four collectors. Victory requires destroying every opposing stronghold; losing your own ends the game.

Click or drag to select friendly units. Shift-click adds to selection. **Right-click** the map to move selected units. Choose **Move** (or press **M**) and right-click to force movement even when pointing at a target. Left-click selects units and never issues movement. Use **Attack / gather** to target an enemy, resource, or construction site. Right-click an enemy to attack or a resource to gather. Carrying collectors turn in their cargo when you right-click your completed Stronghold or Resource Outpost. Use Repair for damaged Strongholds. Deselect (V) clears selection without stopping orders. A destination ring and message confirm the order. Collectors choose buildings from the right-hand construction section. Buildings begin as construction sites and require a nearby collector until completed. Finished production buildings train units through timed queues. WASD or arrows pan the camera; clicking the minimap recenters it. Escape cancels placement. Pause freezes the simulation.

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

Each faction chooses one of its three heroes for the entire match: Dawnward's Sun Marshal (Paladin), Frontier Wizard and Frontier Ranger; The Dominion's Stormcaller (Berserker), Frontier Witch and Dragon Sovereign. Their selection panels describe nearby troop auras and unique active powers. Hero talent trees and Sanctum mastery were removed in the 20261008-orders-and-strategy update; innate auras and abilities remain. Stormcaller emits small lightning sparks. Dominion infantry can research Fire Spears, applying damage over time with Troll Spearthrower attacks.

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

Covenant heroes keep the one-hero-per-match rule: Carapace Captain provides a 15% protection aura and temporary guard; Smoke Alchemist provides 1 health/s recovery and a smoke cloud; Trail Matriarch provides a 10% movement aura and a temporary speed surge. Hero talents remain removed. AI recruits its own faction's specialists, uses abilities, escorts support units, and scouts instead of sending fragile scouts into direct fights.

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

### Approved banners, fractured mines and dragon flame (20261010-flame-hewer-approved-banners)

The banner workshop now offers approved patterns and emblems only. Freehand cells and movable shapes are stripped by the shared normalizer used for browser rendering, old saves and multiplayer profiles; existing freehand emblems become the sun emblem. Named designs can still be saved and equipped, with team colors applied in battle.

Mine boulders have uneven angular surfaces and branching fracture seams while retaining their integrated entrance and existing navigation footprint. Dominion Rock Hewers are 40% larger than their current appearance. Their rocks resolve damage when they arrive, shatter into stone fragments, and push mobile enemies back up to 40 world units (20 for splash victims), stopping at terrain, obstacles and other units. Buildings are not pushed.

Trees contain 240 lumber instead of 1200, and depleted trees finish falling and disappearing in 0.65 seconds instead of 1.4. Gathering rates and delivery quantities remain unchanged. A Dominion roost at Stronghold level 3 can research Continuous Flame Breath (180 gold/140 lumber, 50 seconds), then Azure Flame Breath (280 gold/220 lumber, 68.75 seconds). Both Dominion Dragons and Dragon Sovereign heroes gain sustained, cancellable attacks; blue flame increases direct breath damage by 30%. Lingering burn damage remains 5/second for four seconds. AI players can research both tiers. Research queuing, cancellation, admin timing and multiplayer validation use the existing systems.
