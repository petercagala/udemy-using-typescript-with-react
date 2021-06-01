const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html", // zdrojovy html subor v src (nemusi vobec mat v sebe odkaz na main.js)
                // filename: "index.html", // vysledny nazov suboru v dist !!! ak nebude index.html, nebude fungovat webpack-dev-server
            }),
        ],
  };