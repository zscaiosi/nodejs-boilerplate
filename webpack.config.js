let path = require('path');
// Loads all .env variables
require('dotenv').config();

console.log("****** ENVIRONMENT ******");
console.log(process.env.NODE_ENV);
console.log("****** ---- ******");

let mode = process.env.NODE_ENV;

let webpackConfig = {
    mode
};

// Decides configs based on env
if (mode === 'development')
{
    webpackConfig = {
        ...webpackConfig,
        target: 'node',
        entry: './src/index.ts',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'index.js'
        },
        resolve: {
            extensions: [".ts", ".js", ".json"]
        },
        module: {
            rules: [
                { test: /\.ts$/, exclude: /node_modules/, use: ["ts-loader"] }
            ]
        }
    }
}
else
{
    webpackConfig = {
        ...webpackConfig,
        target: 'node',
        entry: './src/index.ts',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'index.js'
        },
        resolve: {
            extensions: [".ts", ".js", ".json"]
        },
        module: {
            rules: [
                { test: /\.ts$/, exclude: /node_modules/, use: ["ts-loader"] }
            ]
        }
    }
}

module.exports = webpackConfig;