module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node-modules/,
        use: {
          loader: "babel-loader",
          //   options: {
          //     // Process all the JSX code
          //     presets: ["@babel/preset-react", "@babel/preset-env"],
          //     // Enable new JS features like async await
          //     //   plugins: ["@babel/plugin-transform-runtime"],
          //   },
        },
      },
    ],
  },
};
