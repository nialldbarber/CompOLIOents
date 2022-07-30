/* eslint-disable semi */
module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '~@components': './src/components',
          '~@core': './src/core',
          '~@utils': './src/utils',
          '~@theme': './src/theme',
          '~@types': './src/types',
          '~@tests': './src/tests',
          '~@stories': './src/stories',
        },
      },
    ],
  ],
}
