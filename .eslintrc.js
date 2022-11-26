module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:react/jsx-runtime',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'react-hooks',
    ],

    rules: {

        indent: [2, 4],
        'linebreak-style': 0,
        'max-len': ['error', { code: 120, ignoreComments: true }],

        'import/extensions': 'off',
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',

        'no-shadow': 'off',
        'no-unused-vars': 'warn',
        'no-trailing-spaces': 'off',
        'no-underscore-dangle': 'off',
        'no-console': 'off',
        'no-param-reassign': 'off',

        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',

        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react/jsx-indent': [2, 4, { checkAttributes: true }],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', 'tsx'] }],
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'warn',
    },
    globals: {
        __IS_DEV__: true,
    },

};
