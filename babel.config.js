module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '@',
        rootPathSuffix: 'src',
      },
    ],
  ],
};
