const presets = ['babel-preset-expo'];
const plugins = [
  [
    'module-resolver',
    {
      root: ['./src'],
      extensions: ['.js', '.json'],
      alias: {
        '@': './src',
      },
    },
  ],
];

module.exports = {
  presets,
  plugins,
};
