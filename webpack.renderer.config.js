const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const rules = require("./webpack.rules");
const plugins = require("./webpack.plugins");

rules.push({
  test: /\.css$/,
  use: [{ loader: "style-loader" }, { loader: "css-loader" }],
});

rules.push({
  test: /\.(scss)$/,
  use: [
    {
      // inject CSS to page
      loader: "style-loader",
    },
    {
      // translates CSS into CommonJS modules
      loader: "css-loader",
    },
    {
      loader: "resolve-url-loader",
    },
    {
      // Run postcss actions
      loader: "postcss-loader",
      options: {
        // `postcssOptions` is needed for postcss 8.x;
        // if you use postcss 7.x skip the key
        postcssOptions: {
          // postcss plugins, can be exported to postcss.config.js
          plugins: () => {
            [require("autoprefixer")];
          },
        },
      },
    },
    {
      // compiles Sass to CSS
      loader: "sass-loader",
    },
  ],
});

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css", "scss"],
    plugins: [new TsconfigPathsPlugin()],
  },
};
