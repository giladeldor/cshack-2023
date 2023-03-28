# Phase 14 - Deployment

## Task

Deploy your app to github pages!

1. Install the gh-pages package as a devDependency by running this command in your project directory:
```bash
npm install gh-pages --save-dev
```

2. Open your package.json file and add the homepage field with the following format:
```
"https://<your-github-username>.github.io/<your-repo-name>/"
```

3. In the scripts section of your package.json, add the following two scripts:
```
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  ...
}
```
This will create a new script called deploy which builds the app and deploys it to GitHub Pages using the gh-pages package. The predeploy script runs automatically before the deploy script to ensure the app is built before deployment.

4. Commit and push your changes to the GitHub repository.

5. Run:
```
npm run deploy
```
 This command will create a new branch called gh-pages in your GitHub repository, and your built app will be pushed to that branch.

6. Go to your GitHub repository settings, scroll down to the GitHub Pages section, and select the gh-pages branch as the source. Save the changes.

7. Your app should now be available at the URL specified in the homepage field of your package.json.

Please note that it might take a few minutes for the app to become accessible after deployment.

Good luck! 💃🏻

---
