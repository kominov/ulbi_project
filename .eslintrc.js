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
    ],

    rules: {
        'react/jsx-indent': [2, 4, { checkAttributes: true }],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', 'tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'max-len': ['error', { code: 120, ignoreComments: true }],
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'warn',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'no-trailing-spaces': 'off',
        'no-underscore-dangle': 'off',

    },
    globals: {
        __IS_DEV__: true,
    },

};
