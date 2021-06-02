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
8. To be able create additional file in dist folder also for index.html, we need html-webpack-plugin: npm i -D html-webpack-plugin
9. we need to initialize html-webpack-plugin by new webpack.config.js (webpack plugin will inject main.js to indexPetko.html automatically)
10. npm run build
11. we want to use webpack-dev-server for automatically build files in src folder and check the changes in dist folder
12. npm i -D webpack-dev-server
13. create start script for webpack-dev-server
    "start": "webpack-dev-server --open --mode development" // zbuildovane subory sa uz ale neukladaju do dist,
                // !!! pozor, v webpack.config.js radsej neuvadzaj filename, aj tak by musel byt len index.html, lebo s inym webpack-dev-server
                // si nerozumie
            --open webpack will open our browser for us
14. npm start
15. url: localhost:8080 or 127.0.0.1:8080
16. CTRL + C : stop server

17. npm i -D typescript ts-loader
18. create tsconfig.json and then refactor .js -> .ts
19. modify webpack.config.js : we have to inform, that now, we do not have the default index.js, but index.ts
        entry: "./src/index.ts", // as we do not have the default index.js in entry, but index.ts
        resolve: {
            extensions: [".js", ".ts", ".tsx"],
        }, // these extensions as accepted
        module: {
            rules: [{
                test: /\.tsx?$/,    // we test file names on regular expressions, we accept .ts, .tsx
                loader: "ts-loader", // on these accepted files, we apply ts-loader
            }],
        },
