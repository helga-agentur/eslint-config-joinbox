// ########################################
// ########################################
// 4.6 If an array has multiple lines, you may set the brackets for the
// containing structures on the same line as the surrounding brackets
// ########################################
// ########################################

// good
const objectInArray = [{
    id: 1,
}, {
    id: 2,
}];

// ########################################
// ########################################
// 6.2 You may also use template strings or string concatenation for long strings
// ########################################
// ########################################


// good
const errorMessage = `This is a super long error that was thrown because
    of Batman. When you stop to think about how Batman had anything to do
    with this, you would get nowhere fast.`;

// good
const errorMessage2 = 'This is a super long error that was thrown because ' +
    'of Batman. When you stop to think about how Batman had anything to do ' +
    'with this, you would get nowhere fast.';

// good
function foo() {
}

// ########################################
// ########################################
// 7.1 You may also use function declarations – but know what you are doing (hoisting)
// ########################################
// ########################################

// good
function baz() {
}

// ########################################
// ########################################
// 7.1 You may use function expressions but not named function expressions with
// two separate names. The only reason for using named function expression is
// that they are easier debuggable. node, by default, creates named function
// expressions out of function expressions. babel does this too.
// ########################################
// ########################################

// good
const sayHi = function() {};
// barely okay
const sayHi2 = function sayHi2() {};
// bad
const sayHi3 = function hi() {};

// ########################################
// ########################################
// 17.1 In case your control statement (if, while etc.) gets too long or exceeds
// the maximum line length, each (grouped) condition could be put into a new line.
// It’s up to you whether the logical operator should begin or end the line.
//
// In addition to the airbnb rules this is also ok:
// ########################################
// ########################################

function doesItLookGoodWhenItBecomesThatLong() {}
function isThisReallyHappening() {}
function thing1() {}
const fooA = 1;
const fooB = 2;

// good
if ((fooA === 123 || fooB === 'abc') &&
    doesItLookGoodWhenItBecomesThatLong() &&
    isThisReallyHappening()
) {
    thing1();
}

// ########################################
// ########################################
// 18.1 Multiline comments using // are ok. Function, Class and Block comments
// must have the follwoing format:
// ########################################
// ########################################

/**
* the best class ever!
*/
class Person {
    /**
    * tells the person 'hi'
    *
    * @private
    * @param {string} personName name of the person to say 'hi' to
    */
    static sayHi(personName) {

        // tell the person, which should
        // be an awesome person, hello.
        // and be sure to ...
        console.log(`Hi ${personName}`);
    }
}


// ########################################
// ########################################
// 18.4 Don't use FIXME comments – fix the problem instead. TODO may be used
// while delveloping a feature. Pull requests or code that is going to be shipped
// to production should never contain a TODO.
// ########################################
// ########################################

// bad
const value = '15';
// TODO: Add radix
const total = parseInt(value);

// bad
const value2 = '15';
// FIXME: parseInt sometimes returns wrong value
const total2 = parseInt(value);

// ########################################
// ########################################
// 19.1 Use soft tabs set to 4 spaces.
// ########################################
// ########################################

// good
function fooX() {
    let name;
}

// ########################################
// ########################################
// 19.8 If it improves readability and code structuring, you may use extensive
// blank lines in and outside of (long) blocks.
// ########################################
// ########################################

// seems like th linter does not know fetch
const fetch = () => {};

// good
function foo123() {
    // good spacing




    // Get the data
    fetch('/api')
        .then(data => data.json())
        .then((json) => { this.data = json; });

    // Work with data
    this.data
        .filter(item => item.visible === true)
        .forEach((item) => {
            this.collection.addVisible(item);
        });
}
// good spacing




function bar() {}


// 23.4
// ########################################
// ########################################
// 23.4 You shall use leading underscores to mark functions or variables as private.
// They should not be accessed from the outside.
// ########################################
// ########################################

// good
class PrivatesAndPublics {
    constructor() {
        // public property
        this.addresses = [];
        // private property
        this._countries = new Map();
    }

    // Public method
    addAddress(address) {
        if (!this._validateAddress()) throw new Error(`Address ${JSON.stringify(address)} not valid.`);
        // Update list of countries
        if (!this._countries.has(address.country.short)) {
            this._countries.set(address.country.short, address.country);
        }
        this.addresses.push(address);
    }

    // Private method
    // rule: class-methods-use-this
    // If a class method does not use this, it can safely be made a static function.
    static _validateAddress(address) {
        return (
            address.zip % 1 === 0 &&
            Object.prototype.hasOwnProperty.call(address, 'copuntry') &&
            address.country.short
        );
    }

}

// bad

const _foo = 1;

// ########################################
// ########################################
// 28.2 You may use decorators (even though it's a Stage 2 draft)
// ########################################
// ########################################
// good
class Memoized {
    // @memoize
    // Note throws an error results in a not working linter
    static makeComplexComputation() {
    }
}

// ########################################
// ########################################
// Non static class methods without this
// ########################################
// ########################################

// good
class DummyDummy {
    // Note throws an error results in a not working linter
    dummyFunction() {
        console.log('dummy');
    }
}


// ########################################
// ########################################
// Allow continue in some cases
// ########################################
// ########################################

// good (warning)
const counter = 0;
while (counter < 100) {
    if (counter % 2 === 0) {
        continue;
    }
}


// ########################################
// ########################################
// Allow parameter reassignment
// ########################################
// ########################################

// good (warning)
const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sumOfOddNumbers = dummy.reduce((sum, number) => {
    if (number % 2 !== 0) {
        sum += number;
    }

    return sum;
}, 0);


// ########################################
// ########################################
// Allow underscores
// ########################################
// ########################################

// good (warning)
const myDummyMongoObject = {
    _id: 'MongoId',
};
const id = myDummyMongoObject._id;
