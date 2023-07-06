module.exports = {
    rules: {
        // we use indentation of 4 spaces – just because we are used to
        indent: ['error', 4],

        // Do not require empty lines between single line class members, such as private
        // properties which are defined at the beginning of the class.
        // The Airbnb JS Style Guide does not cover private properties.
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

        // omit logs in production code but allow warnings and errors
        'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
};
