module.exports = {
    rules: {
        // refs: https://github.com/joinbox/guidelines/blob/master/styleguide/javascript.md
        // 7.1 allow function decalrations
        'func-style': ['off', 'declaration'],
        // 7.1 allow only anaonymous function declarations
        'func-names': ['error', 'never'],
        // 17.1 doesnt need a custom config rule
        // 18.4 alle extensive blank lines
        'padded-blocks': 'off',
        'no-multiple-empty-lines': 'off',
        // 19.1 use for spaces
        indent: ['error', 4],
        // 23.4
        'no-underscore-dangle': ['error', { allowAfterThis: true }],
        // new rule no spaces before function paren
        'space-before-function-paren': ['error', 'never'],
        // allow class methots to be non static without using context
        'class-methods-use-this': 'off',
        // don't require an extensions for imports from packages
        'import/extensions': 'ignorePackages',
        // allow for of loops but disallow the statements below
        'no-restricted-syntax': ['error', {
            selector: 'ForInStatement',
            message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
        }, {
            selector: 'LabeledStatement',
            message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
        }, {
            selector: 'WithStatement',
            message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
        }],
        // allow async operations in loops
        'no-await-in-loop': 'off',
    },
};
