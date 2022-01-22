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
  [
    'module:react-native-dotenv',
    {
      moduleName: '@env',
      path: '.env',
      blacklist: null,
      whitelist: null,
      safe: true,
      allowUndefined: true,
    },
  ],
];

module.exports = {
  presets,
  plugins,
};
