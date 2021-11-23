# React - Create React app, JSX, and React Elements

- understand  ***Create React App*** geenrator and create first React app using ```create-react-app```CLI command,
- understand what ***JSX*** is and how to write ir and use it in the React app properly,
- understand how images and files can be added to React projects.

## create-react-app
Developers at Facebook created an excellent tool to help us start coding our app without a hazard nor running any problems.
Simply by runnign the following command:
```
npx create-react-app name-of-the-app
```
or 
```
npm init react-app name-of-the-app
```
### Create React App is dived into two packages:
- ***create-react-app*** which is a global command-line utility that is used to create new projects
- ***react-scripts*** which is a development dependency in the generated projects.

For this lesson, the name of our app is: ***demo-react-app-initialization***, inside there will be a package.json, package-lock.json, .gitignore, README.md, src directory with js, css files, public directory with html, png, manifest.json, robots.txt and favicon.ico files, as well as a node_modules where packages that uses NodeJS through NPM and where all our dependencies are stored.

Opening the demo project, inside you can run some built-in commands:
```
npm start
```
```
yarn start
```
this will run the app in development mode at http://localhost:3000 in your browser.

```
npm test
```
or 
```
yarn test
```

Starts the test runner, so  ***create-react-app*** how has built-in to start testing while you are developing it, by default uses ***Jest***.

```
npm run build
```
or  
```
yarn build
```
Build the app for production to the build folder. It correctly bundles React in production mode, which means creates bunch of static files and optimizes the build for the best performance. After succesfully running this command, your app is ready to be deployed.

- At this moment we have created our first React app, it now has an ```App``` React component located on demo-react-app/src/app.js file.

Using the following cmd will run our app;
```
npm start
``` 

- ***src/index.js*** fule is considered to be the default entrance point of any React app (unless stated by you)
- ***public/index.html*** file is considered to be the default output point for any react app. It has the ```<div id="root">``` tag that the whole app will be appended to,

## JSX and Elements

***JSX*** stand for ***J***ava***S***cript e***X***tension, which is a synta extension to JavaScript, is similar to HTML but has the power of JavaScript.

Because browsers don't understand JSX, this will be compiled into browser understandable code thanks to Babel.

