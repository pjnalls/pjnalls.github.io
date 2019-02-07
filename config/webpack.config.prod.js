'use strict';

const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const ngw = require('@ngtools/webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const cssnano = require('cssnano');
const commonConfig = require('./webpack.config.common');
const helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    mode: 'production',
    cache: false,
    output: {
        path: helpers.root('dist'),
        publicPath: 'dist/',
        filename: '[hash].chunk.js'
    },
    optimization: {
        noEmitOnErrors: true,
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                        return `npm.${packageName.replace('@', '')}`;
                    },
                },
            },
        },
        runtimeChunk: 'single',
        minimizer: [
            new UglifyJsPlugin({
                test: /\.js(\?.*)?$/i,

                cache: true,
                parallel: true,
                uglifyOptions: {
                    warnings: false,
                    mangle: true,
                    toplevel: false,
                    nameCache: null,
                    ie8: false,
                    output: {
                        comments: false
                    }
                }
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessor: cssnano,
                cssProcessorOptions: {
                    discardComments: {
                        removeAll: true
                    }
                },
                canPrint: false
            })
        ]
    },
    module: {
        rules: [
            {
                test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
                loader: '@ngtools/webpack'
            }
        ]
    },
    plugins: [
        new ngw.AngularCompilerPlugin({
            tsConfigPath: helpers.root('tsconfig.json'),
            entryModule: helpers.root('src', 'app', 'app.module#AppModule')
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new CompressionPlugin({
            filename: '[path].gz[query]',
            compressionOptions: { level: 1 },
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$/,
            threshold: 8192,
            minRatio: 0
        }),
    ]
});
