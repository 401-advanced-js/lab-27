# Deployment to AWS with React apps

Install StyleGuideist
```
npm install --save-dev react-styleguidist
```

in command line runs the documentation server
```
npx styleguidist server
```
Note that npx runs the binary so you don't need the script in the package json


---
## Documenting Components

```
- thing.js
- thing.scss
- thing.md
```
Inside thing.md,
You need both the description and the component in for documentation
```
Thing Component is an amazing thing....    --Description

<Thing /> -- Component

```

Create final doc
```
npx styleguidist build
```

See docs live
```
live-server
```

---

## Deployment:
Get it to github
```
git init
git remote add origin .....
acp master
```

Netify.com ~Deploys react apps
* `new site from git`
* `find repo`
* make sure `npm run build` is the correct command and `/build` is the directory

