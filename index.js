module.exports = {
    extends: [
        'eslint-config-airbnb-base',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        './rules/joinbox-custom',
    ],
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
    },
    rules: {
        strict: 'error',
    },
};
