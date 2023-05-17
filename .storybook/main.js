const path = require('path');

const src = path.resolve(__dirname, '..', 'src');

module.exports = {
    stories: ['../src/components/**/*.stories.js', '../src/components/**/*.stories.tsx'],
    webpackFinal: (config) => {
        const custom = { ...config };

        custom.module.rules = [
            ...custom.module.rules.filter((f) => f.test.toString() !== '/\\.css$/'),
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                        },
                    },
                ],
            },
        ];

        return custom;
    },
    addons: ['@storybook/addon-knobs'],
};
