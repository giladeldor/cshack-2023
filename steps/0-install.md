## Phase 0 - Installations

- Git
- npm (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- Node.js (https://nodejs.org/en/, use the LTS version)

Install git, npm and node. 

> In the next step, we will provide an initial skeleton for the application. So you don't have to start from scratch. You can jump to step 1 if you want to start coding.

If you want to create new app from scratch (and not to use our template), clone the create-react-app tamplete, run:
(my-app is your application name 🙃)
```sh
npx create-react-app@5 my-app --template typescript
```

cd to the directory, and start the app. Go to http://localhost:3000/.
```sh
cd my-app
npm start
```

check https://create-react-app.dev/ for more deatails.

 
In this project, we use MUI - cool UI package for faster development.

If you want to code from scracth, you can install it:

```sh
npm install @mui/material @emotion/react @emotion/styled
```

read more here: https://mui.com/


# Q&A

## What is npm?

`npm` stands for Node Package Manager. It is a command-line tool that is used to install, manage, and share packages (libraries, frameworks, utilities, etc.) for Node.js. It is the default package manager for Node.js and it is also used for managing dependencies for front-end projects.

## What is create-react-app?

`create-react-app` is a command-line tool used to generate a new React project with all the necessary configurations and dependencies pre-configured. It is maintained by the React team and it is designed to make it easier to get started with React development. `create-react-app` sets up a development environment that includes tools like Babel, Webpack, and a development server.

## What is package.json?

`package.json` is a configuration file for Node.js projects. It contains metadata about the project, such as the name, version, description, author, license, dependencies, and scripts. It is used by `npm` to install and manage dependencies, as well as to run scripts defined in the `scripts` section. `package.json` is also used by `create-react-app` to manage the dependencies of a React project.

