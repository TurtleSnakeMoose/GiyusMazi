var giyus = giyus || {};
giyus.util = giyus.util || {};

giyus.util.fillForm = function () {
    $('#viewer_personalNum').val('1234567');
    $('#viewer_fullName').val('פניוטוב פניוט');
    $('#viewer_rank').val('סגן');
    $('#viewer_unit').val('טלב"צ');
    $('#viewee_identification').val('304440992');
    $('#viewee_fullName').val('אנה קרחנה');
    $('#viewee_destination').val('שריון');
    $('#viewee_date').val("2020-02-12");
    $('#viewee_time').val('16:20');
    $('#viewee_visitDescription').val('המלשב בירך אותי לשלום ומיד לאחר מכן דרש ללכת לחרבן דחוף, פה איבדתי את עקבותיו.');
    $('#viewee_additionalNotes').val('טוב, מצאתי אותו מת בשירותים. כנראה סבל מחירבון יתר. הוחלט לא לגייס');
    $('#viewee_motivation_3').prop('checked', true);
}

giyus.util.buildSubject = function () {

}

giyus.util.buildBody = function () {

}

giyus.util.sendEmail = function (subject, body){
    Email.send({
        SecureToken : "5f8b19b8-e9a1-48fe-a6b0-8b584275d23d",
        To : 'giyus.mazi@gmail.com',
        From : "giyus.mazi@gmail.com",
        Subject : subject,
        Body : body
    }).then(
      message => alert('הטופס נשלח, תודה רבה!')
    );
}

