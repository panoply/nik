### Contact Card

Personal contact card website built with Mithril.


### Installation
All dependencies are included with the `package.json` file. There are 3 CLI commands.

|Command| Operation |
|--|--|
| `yarn watch` |  Runs development from `dist`   |
| `yarn build` |  Builds into `dist` for production |
| `yarn icons` |  Creates SVG Sprite from `/src/icons` |

### Github Pages Branch
Push `dist` directory to the `gh-pages` branch when updates are made.

```
git subtree push --prefix dist origin gh-pages
```
