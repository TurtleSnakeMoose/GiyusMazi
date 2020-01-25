var giyus = giyus || {};
giyus.site = giyus.site || {};

$(function (){

	giyus.site.submitForm = function (submitBtn){
		var form = submitBtn.closest('form');

		isFormValid = giyus.validate.validateForm(form);

		if(!isFormValid){
			debugger;
			return;
		}
	}

})
