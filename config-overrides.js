module.exports = function override(config, env) {
  // Exclude node_modules from source-map-loader processing
  config.module.rules.push({
    test: /\.js$/,
    enforce: "pre",
    use: ["source-map-loader"],
    exclude: /node_modules/,
  });

  // You can add other custom Webpack configurations here
  return config;
};
