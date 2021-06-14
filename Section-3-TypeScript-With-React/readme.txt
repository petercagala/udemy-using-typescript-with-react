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
                exclude: /node_modules/, // ts-loader applyied only on source code
            }],
        },
20. setting babel-loader in webpack.config.json: na zaklade prehliadaca nastavi spravnu transformaciu javascriptu na konkretnu verziu
21. npm i -D
@babel/core
@babel/preset-env: prepare our code for the environment and concrete browser
@babel/preset-typescript: babel remuve the typescript code
22. create .babelrc :
{
  "presets": ["@babel/preset-env", "@babel/preset-typescript"] // polozky pola berie v opacnom poradi
  teda najskor odstrai z kodu typescript a potom upravi javascript kod pre verziu konkretneho prehliadaca
}
23. npm i -D babel-loader :
24. webpack.config.json : replace ts-loader to babel-loader
24. babel currently does not understand for example class syntax
25. npm i -D @babel/plugin-proposal-class-properties
26. improve tsconfig.json:
         "include": ["./src/**/*"], // chcem kompilovat vsetky subory zo src adresara
        "noEmit": true, // because our code is compiled by babel and webpack, we don't want the typescript compiler to produce any output
        "isolatedModules": true, // exlanation: lecture 32, timing 6:59
        "esModuleInterop": true, // before this option we did: import * as React from "react";
                                // with this option: import React from "react";
        "target": "esnext", // the latest features of ECMA script
        "skipLibCheck": true, // bez tohoto nastavenie bude hadzat chyby, ze nevie najst neviem ake libky
27. create "ts-check": "tsc" in package.json and run typescript compiler by it
28. to be sure, we make typecheck before the build, improve script like:
            "build": "npm run ts-check && webpack --mode production",

29. Adding REACT to the project: -S we install then with normal dependencies (no -D development)
            npm i -S react react-dom
30. react does not include type definitions, so we have to include it: npm i -D @types/react @types/react-dom
31. add to tsconfig.json:
        "jsx": "preserve" -> keep jsx as is: <div/> ==> <div/>
        "jsx": "react" -> transcript : <div/> ==> React.createElement('div')
32. instal babel with react:
    npm i -D @babel/preset-react
33. update .babelrc:
        "presets": ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
34. now, as we use react and the entry file has .tsx, we have to change it in webpack.config.js