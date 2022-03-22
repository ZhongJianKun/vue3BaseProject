module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:vue/vue3-recommended', 'airbnb-base'],
    parserOptions: {
        ecmaVersion: 12,
    },
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['off', 'windows'],
    },
};
