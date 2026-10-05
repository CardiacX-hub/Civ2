# Civ2 — Kingdoms at War


A dependency-free 2D browser RTS. Run `npm start`, then open the served game on port 3000. Run `npm test` for simulation smoke tests.

Choose the human **Dawnward** or the orc/troll **Ashfang Horde**, customize banners, and play against one or two AI opponents. Each side begins with a stronghold and four collectors. Victory requires destroying every opposing stronghold; losing your own ends the game.

Click or drag to select friendly units. Shift-click adds to selection. Right-click to move, attack an enemy, or assign collectors to lumber and gold. Collectors construct buildings from the command panel. Buildings appear immediately and train units through timed production queues. WASD or arrows pan the camera; clicking the minimap recenters it. Escape cancels placement. Pause freezes the simulation.

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
