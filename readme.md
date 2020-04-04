### Contact Card

Personal contact card website built with the Mithril framework using Rollup for bundling.


### Installation
All dependencies are included with the `package.json` file. There are 4 CLI commands.

|Command| Operation |
|--|--|
| `npm run watch` |  Runs development from `dist`   |
| `npm run build` |  Builds into `dist` for production |
| `npm run icons` |  Creates SVG Sprite from `/src/icons` |
| `npm run upload` | Pushes `dist` directory the gh-pages branch |


### Github Pages Branch
Push `dist` directory to the `gh-pages` branch when updates are made using the `npm run upload` command or manually using:

```
git subtree push --prefix dist origin gh-pages
```

> Troubleshoot git conflicts in the gh-pages branch by deleting the branch and pushing a new one:

```
git push origin gh-pages --delete
```
