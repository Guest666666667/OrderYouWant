#!/bin/bash
# Build your project
npm run build

# Switch to gh-pages branch
git checkout gh-pages

# Remove old files
git rm -rf .

# Copy new files
cp -r dist/* .

# Commit and push
git add .
git commit -m "Update gh-pages"
git push origin gh-pages --force

# Switch back to main
git checkout main
