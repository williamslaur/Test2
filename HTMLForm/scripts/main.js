$(function(){
    
    $('#btnSubmit').on('click', submit);
    $('#btnReset').on('click', reset);

    var inputs = ['firstName', 'lastName', 'emailAddress'];

    var ERROR_CLASS = 'invalid';

    function submit(){
        var errorList = [];
        var elm;
       //finds the text input values and sets error message and changes class if empty
        for (var i=0; i<inputs.length; i++) {
            elm = getE(inputs[i]);
            if (elm.val === "") {
            elm.classList.add(ERROR_CLASS);
            errorList.push(elm.placeholder + "is required.");
        } else {
            elm.classList.remove(ERROR_CLASS);
        }
    //console.log(errorList)
        //check for email address to have .com 
        if ($('#emailAddress').indexOf('.com') = false) {
            errorList.push('Email address must include .com.');
        }
    
        //find the terms input values and sets error message and changes class if empty
        var terms = getE('terms');
        if (terms.checked === false) {
            errorList.push('You must accept the terms and conditions');
        }
        //find the value for findUs and return error if empty
        var howFind = getE('findUs');
        if (howFind.val === "") {
            errorList.push('You must select an option for how you found us.');
        }
        //find the value for textarea and return error if empty
        if ($('#textarea').val = "" ) {
            errorList.push('You must complete the reason for Why you need this blender.');
        };

    //console.log(errorList)
        // enters the errorList into the messages and if none- returns thanks 
        var html
    if (errorList.length > 0) {
        html = '<ul class="errors"><li>' + errorList.join('</li><li>') + '</li></ul>';
    } else {
        html = '<h1>Thank you for registering</h1>';
     //   reset();
    }
    //sets the new messages value to be displayed at the top of page
    getE('messages').innerHTML = html;
    }
}


    function getE(id) {
        return document.getElementById(id);
    }

    function reset() {
        for (var i = 0; i < inputs.length; i++) {
            var elm = getE(inputs[i])
            elm.value = '';
            elm.classList.remove(ERROR_CLASS);
        }
        getE('messages').innerHTML = '';
        getE('terms').checked = false;
        getE('textarea').defaultValue = '';
        getE('findUs').selected = '';
    }
});

/* Challenge:  AJAX Post the form to the url '/AddEntry'.
*/

$("btnSubmit").click(function(){
    var x = $("form").serializeArray();
    $.each(x, function(i, field){
        $("#results").append(field.name + ":" + field.value + " ");
    });
});


myformobj = 
$.post('/AddEntry', '$("#results")' , function(response){
    console.log('failure')
});
  