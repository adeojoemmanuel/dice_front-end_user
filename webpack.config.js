const path = require('path');

module.exports = {
  // other webpack configuration options
  
  resolve: {
    fallback: {
      "vm": require.resolve("vm-browserify"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "zlib": require.resolve("browserify-zlib")
    }
  }
};
