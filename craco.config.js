const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  webpack: {
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true,
        writeToDisk: true,
        statsFilename: 'stats.json',
      }),
    ],
  },
};
