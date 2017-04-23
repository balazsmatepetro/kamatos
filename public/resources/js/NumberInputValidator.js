/**
 * @param {Object} rules
 * @param {Number} [rules.maxValue]
 * @param {Number} [rules.minValue]
 */
Kamatos.NumberInputValidator = function NumberInputValidator (rules) {
    this.errors = [];
    this.rules = rules;
};

/**
 * @param {HTMLInputElement} input
 */
Kamatos.NumberInputValidator.prototype.validate = function validate (input) {
    // We have to check the type of the input element.
    if ('object' !== typeof input) {
        throw new Error('The input must an object!');
    }
    // We have to check the instance of input element.
    if (false === input instanceof HTMLInputElement) {
        throw new Error('The input must a HTMLInputElement instance!');
    }
    // We have to check the type of the input element.
    if ('number' !== input.type) {
        throw new Error('The type of input element must \'number\'!');
    }
    // Everything is fine, we can validate the value.
    // We have to store the value of the input element.
    var value = parseInt(input.value, 10);
    // We have to clear the previously stored errors.
    this.errors = [];

    if (isNaN(value)) {
        this.errors.push('required error');
        return;
    }

    if (this.rules.minValue && this.rules.minValue > value) {
        this.errors.push('minValue error');
    }

    if (this.rules.maxValue && this.rules.maxValue < value) {
        this.errors.push('maxValue error');
    }
};

/**
 * Returns the input value is valid or not.
 * 
 * @returns {Boolean}
 */
Kamatos.NumberInputValidator.prototype.isValid = function isValid () {
    return 0 === this.errors.length;
};
