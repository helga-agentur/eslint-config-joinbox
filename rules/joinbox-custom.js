module.exports = {
    rules: {
        // requires that file extentions are used in import statements, exept for package names
        'import/extensions': ['error', 'always', { ignorePackages: true }],

        // do not require empty lines between single line class members, such as private
        // properties which are defined at the beginning of the class.
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

        // omit logs in production code but allow warnings and errors
        'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
};
