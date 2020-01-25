var giyus = giyus || {};
giyus.site = giyus.site || {};

$(function (){

	giyus.site.sendForm = function (){
		Email.send({
			SecureToken : "5f8b19b8-e9a1-48fe-a6b0-8b584275d23d",
			To : 'giyus.mazi@gmail.com',
			From : "giyus.mazi@gmail.com",
			Subject : "first secure credentials test",
			Body : "CYKA BLYAT YOBTA"
		}).then(
		  message => alert('cykaBlyat')
		);
	}

	giyus.site.timePicker_onChange = function (e, val){
		debugger;
		$(e.currentTarget).val(moment(val._d).format('HH:mm'));
	}
	
})
