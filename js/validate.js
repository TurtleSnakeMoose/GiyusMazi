var giyus = giyus || {};
giyus.validate = giyus.validate || {};

giyus.validate.validateField = function (input) {
    var inputType = input.attr('type'),
        fieldName = input.data('fieldName'),
        inputValue = input.val(),
        msg_requiredField = `נא להזין ${fieldName}`,
        msg_short_number = `מספר קצר מדי`,
        msg_long_number = `מספר ארוך מדי`,
        valid_feedback = input.siblings('.valid-feedback').text('תקין'),
        invalid_feedback = input.siblings('.invalid-feedback'),
        formIsValid = true;


    input.removeClass('is-invalid').addClass('is-valid');

    switch (inputType) {
        case 'date': 
        case 'time':
        case 'dropdown':
        case 'text': { 
            if($.trim(inputValue).length === 0){
                invalid_feedback.text(msg_requiredField);
                input.removeClass('is-valid').addClass('is-invalid');
                formIsValid = false;
            }
        }
        break;
        
        case 'number': {
            let validLength = parseInt(input.attr('maxLength'));
            if($.trim(inputValue).length === 0) {
                invalid_feedback.text(msg_requiredField);
                input.removeClass('is-valid').addClass('is-invalid');
                formIsValid = false;

            } else if (input.val().length !== validLength) {
                invalid_feedback.text($.trim(inputValue).length > validLength ? msg_long_number : msg_short_number );
                input.removeClass('is-valid').addClass('is-invalid');
                formIsValid = false;
            }
        }
            break;
        default:
            break;
    }

    return formIsValid;
}

giyus.validate.validateCheckboxes = function (requiredCheckboxGroups){
    var isValid = true;

    $.each(requiredCheckboxGroups, function (i, group){
        debugger;
        var invalid_feedback = $(group).find('.invalid-feedback');
        isChecked = $(group).find('input:checked').length > 0;
        isValid = !isChecked ? false : isValid;
        invalid_feedback.toggle(!isChecked);
    });

    return isValid;
}

giyus.validate.validateForm = function (form) {
    var isValid = true,
        requiredCheckboxGroups = form.find('.checkbox_group[required]'),
        requiredFields = form.find('input[type!="radio"], select');

    isValid = giyus.validate.validateCheckboxes(requiredCheckboxGroups);
    
    $.each(requiredFields, function(i, field){
        isValid = giyus.validate.validateField($(field));

        if(!isValid){
            return false;
        }
    });

    return isValid;
}


