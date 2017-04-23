/**
 * @param {Array.<String>} errors
 */
Kamatos.ErrorList = function ErrorList (errors) {
    this.errors = errors;
};

/**
 * @param {HTMLElement} target
 */
Kamatos.ErrorList.prototype.render = function render (target) {
    var errorContainer;
    
    if (this.errors.length > 1) {
        errorContainer = new Kamatos.ErrorItemFactory().createErrorItems(this.errors);
    } else {
        errorContainer = document.createElement('div');
        errorContainer.innerText = this.errors[0];
    }

    errorContainer.className = 'calculation-form-error';

    target.appendChild(errorContainer);
};