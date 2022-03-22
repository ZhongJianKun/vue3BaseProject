module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'airbnb-base',
        'plugin:prettier/recommended'
    ],
    parserOptions: {
        ecmaVersion: 12,
    },
    plugins: ['prettier'],
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['off', 'windows'],
        'prettier/prettier': 'error'
    },
};
