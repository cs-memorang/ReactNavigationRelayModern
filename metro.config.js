module.exports = {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      sourceExts: ['js', 'json', 'ts', 'tsx', 'jsx', 'svg'],
      assetExts: ['png', 'jpg', 'jpeg'],
    },
  };
  