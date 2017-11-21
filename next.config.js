module.exports = {
    webpack: (config, { dev }) => {
        config.module.rules.push(
            {
                test: /\.css$/,
                loader: 'emit-file-loader',
                options: {
                    name: 'dist/[path][name].[ext]',
                },
            },
            {
                test: /\.css$/,
                loader: `babel-loader!next-style-loader!css-loader?sourceMap&minimize=${!dev}&url=false&modules&localIdentName='[name]__[local]--[hash:base64:5]'!postcss-loader`
            }
        );

        return config;
    },
};
