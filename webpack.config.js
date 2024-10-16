const path = require('path');

module.exports = (env) => {
  // Se o valor 'production' for passado como env, isProduction será true
  const isProduction = env.production === true;

  return {
    mode: isProduction ? 'production' : 'development',
    entry: './src/sorteador.ts',
    output: {
      filename: 'sorteador.js',
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
    optimization: {
      minimize: isProduction
    }
  };
};
