Kamatos.ErrorItemFactory = function ErrorItemFactory () {};

/**
 * Creates an unordered list element from the given error messages.
 * 
 * @param {Array.<String>} errors Array of error messages.
 * @throws {Error} Throws an Error exception the argument is invalid.
 * @returns {HTMLElement}
 */
Kamatos.ErrorItemFactory.prototype.createErrorItems = function createErrorItems (errors) {
    // We have to check the type of the given parameter.
    if (!Array.isArray(errors)) {
        throw new Error('You have to pass an array as parameter!');
    }
    // We have to create a list element, this will contain all list items.
    var errorList = document.createElement('ul');
    // We have to loop through the errors to create list items.
    errors.forEach(function (error) {
        errorList.appendChild(createErrorElement(error));
    });

    return errorList;

    /**
     * Creates a list element with the given error message.
     * 
     * @param {String} errorMessage The error message.
     * @returns {HTMLElement}
     */
    function createErrorElement (errorMessage) {
        var errorElement = document.createElement('li');
        errorElement.innerText = errorMessage;

        return errorElement;
    }
};
