# orderyouwant
Coax your girlfriend
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Example of using deploy.sh to deploy on GitHub Pages
```
npm run build
git checkout gh-pages
mv .gitignore dist/.gitignore_backup
git rm -rf . --quiet
mv dist/.gitignore_backup .gitignore
cp -r dist/* .
git add .
git commit -m "Update gh-pages"
git push origin gh-pages --force
git checkout main
```

### Run deploy.sh on Git Bash
```
chmod +x deploy.sh
./deploy.sh
```
