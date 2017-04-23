domready(function ready () {
    var calculationForm = document.getElementById('calculation-form');

    calculationForm.addEventListener('submit', validateForm);

    function validateForm (event) {
        // TODO: Implement this functionality!
    }

    var loanValidator = new Kamatos.NumberInputValidator({
        maxValue: 100,
        minValue: 2
    });

    document.getElementById('loan').addEventListener('keyup', function (event) {
        var formRow = event.target.parentNode;

        var error = formRow.querySelector('.calculation-form-error');
        // Deleting error element.
        if (error) {
            error.remove();
        }
        // Input validation.
        loanValidator.validate(event.target);

        var stateClass;

        if (!loanValidator.isValid()) {
            stateClass = 'calculation-form-row-invalid';
            new Kamatos.ErrorList(loanValidator.errors).render(formRow);
        } else {
            stateClass = 'calculation-form-row-valid';
        }

        formRow.className = stateClass;
    });
});
