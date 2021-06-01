1. initialize npm project to crete package.json: npm init
2. install webpack libraries: npm i -D webpack webpack-cli
3. create src folded with index.js file
4. add script to build in package.json
"scripts": {
    "build": "webpack --mode production" // when we run this script, webpack run our script for
                                // production and create production file main.js in dist folder (default webpack configuration)
  },
5. run script: npm run build
6. try to create index.html file directly in dist folder. In body, try to call <script src="main.js"></script>.
 Open index.html in browser
7. Let's move index.html from dist folder to src folder