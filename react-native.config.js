module.exports = {
  dependencies: {
    ...(process.env.NO_FLIPPER // or `process.env.NO_FLIPPER` for RN@0.71.x and above
      ? { 'react-native-flipper': { platforms: { ios: null } } }
      : {}),
  },
  project: {
    ios: {
      automaticPodsInstallation: true,
    },
  },
  assets: ['./src/assets/fonts/'],
};
