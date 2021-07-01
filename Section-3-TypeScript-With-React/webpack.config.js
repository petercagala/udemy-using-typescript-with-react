const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

var path = require("path");

module.exports = {
    entry: "./src/index.tsx",
    devtool: "eval-source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias: {
            "core-styles": srcPath("core/core-styles"),
        },
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "babel-loader",
            exclude: /node_modules/,
        },
        {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                }
            ],
        },
        { test: /\.svg$/, include: path.resolve(__dirname, "src/"), loader: "svg-react-loader" },
        // {
        //     test: /\.svg$/,
        //     // loader: "@svgr/webpack",
        //     loader: "svg-react-loader",
        //     // options: {
        //     //     svgoConfig: {
        //     //         plugins: {
        //     //             removeViewBox: false,
        //     //         }
        //     //     }
        //     // }
        //  }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html", // zdrojovy html subor v src (nemusi vobec mat v sebe odkaz na main.js)
            // filename: "indexXXX.html", // vysledny nazov suboru v dist !!! ak nebude index.html, nebude fungovat webpack-dev-server
        }),
        new MiniCssExtractPlugin(),
    ],
};

function srcPath(subdir) {
    return path.join(__dirname, "src", subdir);
}