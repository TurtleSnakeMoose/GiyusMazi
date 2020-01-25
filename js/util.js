var giyus = giyus || {};
giyus.util = giyus.util || {};

giyus.util.fillForm = function () {

    if($('#viewer_fullName').val() === 'ניסיון'){
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
}

giyus.util.buildSubject = function (form) {
    var intervieeName = $('#viewee_fullName').val();
    var intervieeIdentification = $('#viewee_identification').val();
    var subject = `סיכום ביקור בית - ${intervieeName} - ${intervieeIdentification}`;

    return subject;
}

giyus.util.buildBody = function (form) {
    var interviewerfields = [];
    interviewerfields.push({Name: 'מספר אישי', Value: $('#viewer_personalNum').val()});
    interviewerfields.push({Name: 'שם מלא', Value: $('#viewer_fullName').val()});
    interviewerfields.push({Name: 'דרגה', Value: $('#viewer_rank').val()});
    interviewerfields.push({Name: 'יחידה', Value: $('#viewer_unit').val()});

    var intervieweefields = [];
    intervieweefields.push({Name: 'ת.ז', Value: $('#viewee_identification').val()});
    intervieweefields.push({Name: 'שם מלא', Value: $('#viewee_fullName').val()});
    intervieweefields.push({Name: 'יעד המלשב', Value: $('#viewee_destination').val()});

    var visitFields = [];
    visitFields.push({Name:'תאריך ביקור', Value: $('#viewee_date').val()});
    visitFields.push({Name: 'שעת ביקור', Value: $('#viewee_time').val()});
    visitFields.push({Name: 'תיאור ביקור', Value: $('#viewee_visitDescription').val()});
    visitFields.push({Name: 'הערות נוספות', Value: $('#viewee_additionalNotes').val()});
    visitFields.push({Name: 'מוטיבציה לאחר הביקור', Value: $('.form-check-input:checked').val()});
    
    var body = `
    <div style='direction: rtl; font-size: 20px;'>
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
          message => alert('הטופס נשלח, תודה רבה!')
        );

    
}

