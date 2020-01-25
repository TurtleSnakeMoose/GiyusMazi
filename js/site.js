var giyus = giyus || {};
giyus.site = giyus.site || {};

$(function (){

	giyus.site.submitForm = function (submitBtn){

		var form = submitBtn.closest('form');

		if(!giyus.validate.validateForm(form)){
			return;
		}

		var subject = giyus.util.buildSubject(form);
    	var body = giyus.util.buildBody(form);

		giyus.util.sendEmail(subject,body)
	}

})
