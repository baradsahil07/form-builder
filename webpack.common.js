module.exports = {
  entry: "./src/index.tsx",

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-typescript",
              "@babel/preset-env",
              "@babel/preset-react",
            ],
          },
        },
      },
      // TS Loader
      // {
      //   test:/\.(ts|tsx)$/,
      //   exclude: /node_modules/,
      //   resolve: {
      //     extensions: [".ts", ".tsx"],
      //   },
      //   use: 'ts-loader',
      // },
      //CSS style loader
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/",
            },
          },
        ],
      },
    ],
  },

  stats: {
    errorDetails: true,
  },
  plugins: [],
};
