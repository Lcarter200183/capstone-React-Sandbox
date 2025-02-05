export default {
    module: {
        rules: [
            {
               use: "babel-loader",
               test: /\.js/,
            },
            {
                test: /\.(scss|css)/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(jpg|png|mp4)/,
                use: "assets/resource",
            },
       ],
    },
    watch: true,
    mode: "development",
    devtool: "source-map"
};