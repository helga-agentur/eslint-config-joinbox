// TODO: Review custom rules
module.exports = {
    rules: {
        // refs: https://github.com/joinbox/guidelines/blob/master/styleguide/javascript.md
        // 7.1 allow function decalrations
        'func-style': ['off', 'declaration'],
        // 7.1 allow only anonymous function declarations
        'func-names': ['error', 'never'],
        // 17.1 doesn't need a custom config rule
        // 18.4 allow extensive blank lines
        'padded-blocks': 'off',
        'no-multiple-empty-lines': 'off',
        // 23.4
        'no-underscore-dangle': ['warn', { allowAfterThis: true }],
        // allow class methods to be non static without using context
        'class-methods-use-this': 'off',
        // ignorePackages does not work on eslint@7 any more; requires 'off', 'error' or 'never'
        'import/extensions': ['error', 'ignorePackages'],
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
        // enforce indentation level for case clauses in switch statements
        indent: ['error', 4, {
            SwitchCase: 1,
        }],
        // allow the else statement after an early return
        'no-else-return': 'off',
        // allow ++ / --
        'no-plusplus': 'off',
        // warning for no-continue
        'no-continue': 'warn',
        // warning for no-param-reassign
        'no-param-reassign': 'warn',
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
};
