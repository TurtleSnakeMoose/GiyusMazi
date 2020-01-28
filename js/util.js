var giyus = giyus || {};
giyus.util = giyus.util || {};

giyus.util.fillForm = function () {

    // if($('#viewer_fullName').val() === 'ניסיון'){
    //     $('#viewer_personalNum').val('1234567');
    //     $('#viewer_fullName').val('פניוטוב פניוט');
    //     $('#viewer_rank').val('סגן');
    //     $('#viewer_unit').val('טלב"צ');
    //     $('#viewee_identification').val('304440992');
    //     $('#viewee_fullName').val('אנה קרחנה');
    //     $('#viewee_destination').val('שריון');
    //     $('#viewee_date').val("2020-02-12");
    //     $('#viewee_time').val('16:20');
    //     $('#viewee_visitDescription').val('המלשב בירך אותי לשלום ומיד לאחר מכן דרש ללכת לחרבן דחוף, פה איבדתי את עקבותיו.');
    //     $('#viewee_additionalNotes').val('טוב, מצאתי אותו מת בשירותים. כנראה סבל מחירבון יתר. הוחלט לא לגייס');
    //     $('#viewee_motivation_3').prop('checked', true);
    // }
}

giyus.util.buildSubject = function (form) {
    var intervieeName = $('#viewee_fullName').val();
    var intervieeIdentification = $('#viewee_identification').val();
    var subject = `סיכום ביקור בית - ${form.data('form-for') === 'apatzim' ? 'עפ"צ' : ''} - ${intervieeName} - ${intervieeIdentification}`;

    return subject;
}

giyus.util.buildBody = function (form) {
    if(form)
    var interviewerfields = giyus.util.getFieldsWithValues(form.find('.interviewer_portion'));
    var intervieweefields = giyus.util.getFieldsWithValues(form.find('.interviewee_portion'));
    var visitFields = giyus.util.getFieldsWithValues(form.find('.summary_portion'));
    
    var body = `
    <div style='direction: rtl; font-size: 18px;'>
        <h2>פרטי מבקר:</h2>
        <table>
            <tbody>
                ${giyus.util.generateTableRows(interviewerfields)}
            </tbody>
        </table>

        <h2>פרטי מלש"ב:</h2>
        <table>
            <tbody>
                ${giyus.util.generateTableRows(intervieweefields)}
            </tbody>
        </table>

        <h2>סיכום ביקור:</h2>
        <table>
            <tbody>
                ${giyus.util.generateTableRows(visitFields)}
            </tbody>
        </table>
    `;

    return body;
    
}

giyus.util.getFieldsWithValues = function (portion){
    var fieldsToReturn = [],
         portionFields = portion.find('input[type!="radio"], input[type="radio"]:checked, select, textarea');

    $.each(portionFields, function(i, field){
        var fieldType = $(field).attr('type'),
            formGroup = $(field).closest('.form-group'),
            fieldName = formGroup.find('label:first').text();
            
        var fieldValue = $(field).val();
        
        debugger;
        fieldsToReturn.push({Name: fieldName, Value: fieldValue});
    });

    return fieldsToReturn;
};

giyus.util.generateTableRows = function (fields) {
    var rows = ''
    $.each(fields, function (i, field){
        rows += `
            <tr>
                <td style="font-weight:bold;padding: 5px 3px;border: 1px solid lightgrey;">${field.Name}:</td>
                <td style="padding: 5px 3px;border: 1px solid lightgrey;">${field.Value}</td>
            </tr>
        `;
    });

    return rows;
}

giyus.util.sendEmail = function (subject,body){
        Email.send({
            SecureToken : "5f8b19b8-e9a1-48fe-a6b0-8b584275d23d",
            To : 'giyus.mazi@gmail.com',
            From : "giyus.mazi@gmail.com",
            Subject : subject,
            Body : body
        }).then(
            atlast => { 
                giyus.util.nullifyForm()
                alert('הטופס נשלח, תודה רבה!')
            }
        );
}

giyus.util.nullifyForm = function (){
    location.reload();
}

