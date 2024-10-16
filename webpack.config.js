const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env) => {
  const isProduction = env.production === true;

  return {
    mode: isProduction ? 'production' : 'development',
    entry: {
      sorteador: './src/index.ts'
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist')
    },
    devtool: isProduction ? false : 'source-map',
    resolve: {
      extensions: ['.ts', '.js']
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          { from: 'src/manifest.json', to: 'manifest.json' }
        ]
      })
    ],
    optimization: {
      minimize: isProduction
    }
  };
};
