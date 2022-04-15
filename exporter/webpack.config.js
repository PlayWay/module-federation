const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = (env, argv) => {
    const isProduction = argv.mode === "production"
    const publicPath = isProduction ? "/OMS/app/omsReact/js/" : "http://localhost:3001/"

    return {
        entry: "./src/index.js",
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            port: 3001
        },
        module: {
            rules: [
                {
                    // https://github.com/webpack/webpack/issues/11467#issuecomment-691702706
                    // https://github.com/vercel/next.js/pull/17095
                    test: /\.m?js/,
                    resolve: {
                        fullySpecified: false,
                    },
                },
                {
                    test: /\.(js|ts)x?$/,
                    loader: "babel-loader",
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/i,
                    use: [
                        "style-loader",
                        "css-loader"
                    ],
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // MiniCssExtractPlugin.loader,
                        "style-loader",
                        {
                            loader: "css-loader",
                            // options: {
                            //     modules: {
                            //         localIdentName: "[name]_[local]-[hash:base64:5]",
                            //     },
                            // },
                        },
                        "sass-loader",
                    ],
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
            extensions: ['.jsx', '.js']
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html',
                publicPath: '/',
            }),
            new ModuleFederationPlugin({
                name: 'omsReact',
                library: { type: 'var', name: 'omsReact' },
                filename: 'remoteEntry.js',
                exposes: {
                    './ErrorAlert': './src/components/ui/ErrorAlert/ErrorAlert',
                    './CustomModal': './src/components/ui/CustomModal/CustomModal',
                    './MessageAlert': './src/components/ui/MessageAlert/MessageAlert',
                    './CircleLoading': './src/components/ui/CircleLoading/CircleLoading',
                    './axiosData': './src/api/axios',
                    './initStore': './src/store/store',
                    './appActions': './src/store/app/appActions',
                    './actionTypes': './src/store/app/actionTypes',
                    './appReducer': './src/store/app/appReducer',
                    './common': './src/helpers/common'
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
                },
            })
        ],
        output: {
            filename: 'oms_react.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true,
            publicPath
        }
    }
};