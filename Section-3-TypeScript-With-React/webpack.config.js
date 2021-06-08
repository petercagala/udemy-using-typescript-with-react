const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./src/index.ts",
    resolve: {
        extensions: [".js", ".ts", ".tsx"],
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "babel-loader",
            exclude: /node_modules/,
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html", // zdrojovy html subor v src (nemusi vobec mat v sebe odkaz na main.js)
            // filename: "indexXXX.html", // vysledny nazov suboru v dist !!! ak nebude index.html, nebude fungovat webpack-dev-server
        }),
    ],
  };