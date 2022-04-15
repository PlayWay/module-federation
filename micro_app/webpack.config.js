const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {dependencies: deps} = require("./package.json");

module.exports = (env, argv) => {
    const isProduction = argv.mode === "production"
    const remotePath = isProduction ? "/OMS/app/omsReact/js" : "http://localhost:3001"

    return  {
        entry: "./src/index.js",
        devtool: "source-map",
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            port: 3002
        },
        module: {
            rules: [
                {
                    test: /\.(js|ts)x?$/,
                    loader: "babel-loader",
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader, "css-loader"],
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.(svg|png|gif|jpg)$/,
                    exclude: /fonts/,
                    loader: 'file-loader'
                },
                {
                    test: /\.(ttf|eot|woff|svg|woff2)$/,
                    loader: "file-loader"
                }

            ],
        },
        resolve: {
            alias: {
                pages: path.resolve(__dirname, 'src/pages'),
            },
            extensions: ['.jsx', '.js']
        },
        plugins: [
            new ModuleFederationPlugin({
                remotes: {
                    omsReact: `omsReact@${remotePath}/remoteEntry.js`
                },
                shared: {
                    react: {
                        eager: true, //используем общий модуль при начальной загрузке
                        requiredVersion: "17.0.2", //версия библиотеки
                        singleton: true, //нельзя использовать несколько версий
                    },
                    'react-dom': {
                        eager: true,
                        requiredVersion: "17.0.2",
                        singleton: true,
                    },
                    'react-draggable': {
                        eager: true,
                        requiredVersion: "4.4.4",
                        singleton: true,
                    },
                    'react-redux': {
                        eager: true,
                        requiredVersion: "7.2.8",
                        singleton: true,
                    },
                    'redux-thunk': {
                        eager: true,
                        requiredVersion: "2.4.1",
                        singleton: true,
                    },
                    '@reduxjs/toolkit': {
                        eager: true,
                        requiredVersion: "1.8.1",
                        singleton: true,
                    },
                    clsx: {
                        eager:true,
                        requiredVersion: "1.1.1"
                    },
                    antd: {
                        eager: true,
                        requiredVersion: "4.19.5",
                        singleton: true,
                    },
                    '@ant-design/icons': {
                        eager: true,
                        requiredVersion: "4.7.0",
                        singleton: true,
                    },
                    axios: {
                        eager: true,
                        requiredVersion: "0.26.1",
                        singleton: true,
                    }
                }
            }),
            new MiniCssExtractPlugin(),
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'src', 'index.html')
            })
        ],
        output: {
            filename: 'bundle.min.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true
        },
    }
}