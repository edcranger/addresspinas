const path = require("path");

module.exports = {
  entry: {
    app: "./src/lib/app.js",
  },

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "pinas.min.js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: { and: [/node_modules/, /index.js/] },
        loader: "babel-loader",
        query: {
          presets: ["@babel/env"],
        },
      },
    ],
  },
};
