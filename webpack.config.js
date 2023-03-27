/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const path = require('path');
const webpack = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const env = process.env.ENV;
const envFile = env ? `.env.${env}` : '.env';

const envConfig = require('dotenv').config({ path: envFile }).parsed;

console.info('ENVIRONMENT VARIABLES:', envConfig);

module.exports = {
    entry: './index.ts',
    mode: isProduction ? 'production' : 'development',
    stats: isProduction ? 'normal' : 'minimal',
    devtool: isProduction ? false : 'eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            APP_NAME: JSON.stringify(envConfig.APP_NAME),
            BACKEND_URL: JSON.stringify(envConfig.BACKEND_URL),
            NODE_ENV: JSON.stringify(process.env.NODE_ENV ?? 'development'),
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: isProduction ? 'css/[name].[chunkhash].css' : 'main.css',
        }),
        new HtmlWebpackPlugin({
            inject: 'body',
            template: './src/index.html',
        }),
        new CopyPlugin({
            patterns: [
                { from: 'public', to: 'public' },
                { from: 'public/robots.txt' },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(eot|svg|ttf|woff|woff2|jpe?g|png|gif|svg)$/,
                use: [{
                    loader: 'file-loader?name=[name].[ext]',
                }],
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            sassOptions: {
                                includePaths: [path.resolve(__dirname, 'src')],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(tsx?|js)$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            getCustomTransformers: () => ({ before: [require('ts-nameof')] }),
                        },
                    },
                ],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        plugins: [
            new TsconfigPathsPlugin({}),
        ],
        extensions: ['.js', '.ts', '.tsx'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'main.js',
        clean: true,
    },
    devServer: {
        static: '/public',
        compress: true,
        hot: true,
        port: 8000,
        historyApiFallback: true,
        liveReload: false,
    },
};

if (isProduction) {
    module.exports.output.filename = 'js/[name].[chunkhash].js';
    module.exports.output.chunkFilename = 'js/[name].[chunkhash].js';

    module.exports.plugins.push(new GenerateSW({
        swDest: 'service-worker.js',
    }));

    module.exports.optimization = {
        emitOnErrors: false,
        minimize: true,
        chunkIds: 'named',
        moduleIds: 'named',
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    sourceMap: false,
                },
            }),
        ],
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendors: {
                    name: 'vendors',
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    chunks: 'all',
                    maxSize: 2440000,
                    enforce: true,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
    };

    module.exports.performance = {
        hints: false,
    };
}