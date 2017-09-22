module.exports = {
    extends: [
        'eslint-config-airbnb-base',
        './rules/joinbox-custom',
    ].map(require.resolve),
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
