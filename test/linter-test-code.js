/**
 * Do not require empty lines between single line class members, such as private
 * properties which are defined at the beginning of the class. The Airbnb JS Style Guide
 * does not cover private properties.
 */
class Test {
    #alpha;
    #beta;

    constructor() {
        this.#alpha = 'a';
        this.#beta = 'b';
    }
}

const test = new Test();

/**
 * Omit logs in production code but allow warnings and errors.
 */
console.log(test);
console.warn('watch out!');
console.error('boom');
