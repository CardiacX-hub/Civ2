# Civ2 — Kingdoms at War


A dependency-free 2D browser RTS. Run `npm start`, then open the served game on port 3000. Run `npm test` for simulation smoke tests.

Choose the human **Dawnward** or the orc/troll **Ashfang Horde**, customize banners, and play against one or two AI opponents. Each side begins with a stronghold and four collectors. Victory requires destroying every opposing stronghold; losing your own ends the game.

Click or drag to select friendly units. Shift-click adds to selection. After selecting units, click **Move / command** (or press **M**), then click ground to move, an enemy to attack, or lumber/gold to gather. Right-click also issues these orders. A destination ring and message confirm the order. Collectors construct buildings from the command panel. Buildings appear immediately and train units through timed production queues. WASD or arrows pan the camera; clicking the minimap recenters it. Escape cancels placement. Pause freezes the simulation.

- Stronghold: collectors.
- Infantry Lodge: durable melee, balanced ranged, and fragile high-damage ranged infantry.
- Siege Works: slow artillery with splash damage.
- Sky Roost: fast flying units.
- Hero Sanctum: one unique faction hero. Dawnward Sun Marshal grants 30% damage reduction within 190 units. Ashfang Stormcaller grants 30% attack damage within 190 units.
- Harvest Guild: three gathering-speed upgrades.
- Infantry Armory: three infantry attack and armor upgrades.
- Artillery Foundry: three artillery damage upgrades.

The unexplored map stays hidden. Explored areas dim outside friendly sight; enemies only appear when currently visible, with red dots on the minimap. AI collects, constructs, trains, upgrades, and attacks after building an army. This prototype has direct movement without obstacle pathfinding; flying units have distinctive visuals and faster movement, and all combat units can attack air targets. Resources are credited while collectors gather rather than transported to base.

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

Select a collector to build a **Watchtower** (140 gold, 160 lumber) or **Siege Bastion** (280 gold, 240 lumber). Watchtowers have 1,000 health and fire every 1.1 seconds for 22 damage within 290 units, including at flying enemies. Siege Bastions have 1,600 health and fire every 2.6 seconds for 60 damage within 340 units, with reduced splash damage to nearby enemies. Defenses target enemies automatically without friendly fire. Select a defense to see its attack radius. AI opponents also build defenses. Human defenses use stone battlements; Horde defenses use timber, spikes, and tribal banners.

Detailed troop artwork includes riveted armor, leather aprons, ammunition pouches, quivers, mount scales, and siege machinery. Attacks display swing trails, impact sparks, muzzle smoke, magical particles, and explosions. Chopping produces wood chips; mining produces gold and stone sparks. Effects respect fog of war and pause, and their count is capped for performance.
