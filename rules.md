refs: https://github.com/joinbox/guidelines/blob/master/styleguide/javascript.md

## 7.1 allow function decalrations
`'func-style': ['off', 'declaration']`

don't enforce the consistent use of either function declarations or expressions

## 7.1 allow only anonymous function declarations
`'func-names': ['error', 'never']`

never use function names in expressions (`const foo = function () {}`)

## 17.1 doesn't need a custom config rule

## 18.4 allow extensive blank lines
`'padded-blocks': 'off'`

disabled: block statements (if etc., function body, class) start and end with blank line

> alternative suggestion: `'padded-blocks': ['error', 'never']`

> alternative suggestion: `'padded-blocks': ['error', { 'blocks': 'never', 'classes': 'always', 'switches': 'never' }]`

---

`'no-multiple-empty-lines': 'off'`

> suggestion: remove, because a max of 2 is default

## 23.4
`'no-underscore-dangle': ['warn', { allowAfterThis: true }]`

> suggestion: remove, because we can use private props

## allow class methods to be non static without using context
`'class-methods-use-this': 'off'`

> tbd

## ignorePackages does not work on eslint@7 any more; requires 'off', 'error' or 'never'
`'import/extensions': ['error', 'ignorePackages']`

> should be: `'import/extensions': ['error', 'always', {ignorePackages: true} ]`

## allow for of loops but disallow the statements below
```
'no-restricted-syntax': ['error', {
    selector: 'ForInStatement',
    message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
}, {
    selector: 'LabeledStatement',
    message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
}, {
    selector: 'WithStatement',
    message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
}]
```

> tbd

## allow async operations in loops
`'no-await-in-loop': 'off'`

> tbd

## enforce indentation level for case clauses in switch statements
```
indent: ['error', 4, {
    SwitchCase: 1,
}]
```

> tbd

## allow the else statement after an early return
`'no-else-return': 'off'`

> suggestion: remove

## allow ++ / --
`'no-plusplus': 'off'`

## warning for no-continue
`'no-continue': 'warn'`

## warning for no-param-reassign
`'no-param-reassign': 'warn'`

## allow declaration of private props to be listed without empty line
`'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }]`

## warning for console.log
`'no-console': ['warn', { allow: ['warn', 'error'] }]`
