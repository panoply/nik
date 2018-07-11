### Contact Card

Personal contact card website built with Mithril.


### Installation
All dependencies are included with the `package.json` file. There are 3 CLI commands.

|Command| Operation |
|--|--|
| `yarn watch` |  Runs development from `dist`   |
| `yarn build` |  Builds into `dist` for production |
| `yarn icons` |  Creates SVG Sprite from `/src/icons` |
| `yarn upload` | Pushes `dist` directory the gh-pages branch |


### Github Pages Branch
Push `dist` directory to the `gh-pages` branch when updates are made using the `yarn upload` command or manually using:

```
git subtree push --prefix dist origin gh-pages
```

> Troubleshoot git conflicts in the gh-pages branch by deleting the branch and pushing a new one:

```
git push origin gh-pages --delete
```
