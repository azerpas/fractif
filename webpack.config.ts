import { Configuration } from 'webpack';

const config: Configuration = {
    module: {
        rules: [
            {
                test: /\.(tsx|graphql)$/,
                use: [
                    { loader: 'babel-loader', options: { presets: ['@babel/preset-typescript', '@babel/preset-react'] } },
                    { loader: 'graphql-let/loader' },
                ]
            }
        ]
    }
}

export default config;