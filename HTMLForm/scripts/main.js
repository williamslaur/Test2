$(function(){
    
    $('#btnSubmit').on('click', submit);
         
        
function submit() {
    var elm;
    var errorList = [];
    var inputs = ['firstName', 'lastName', 'emailAddress', 'textarea', ];
    var ERROR_CLASS = 'invalid';
    debugger

    for (var i = 0; i < inputs.length; i++) {
        elm = getE(inputs[i]);
        if (elm.value === '') {
            errorList.push(elm.placeholder + ' is required');
            elm.classList.add(ERROR_CLASS);
        } else {
            elm.classList.remove(ERROR_CLASS);
        }
    }

    var email = getE('emailAddress');
    if (email.value.indexOf('@') == -1) {
        errorList.push('Enter a valid Email');
    }

    var email2 = getE('emailAddress');
    if (email.value.indexOf('.com') == "") {
        errorList.push('Email must contain ".com" in the address');
    }

    
    var terms = getE('terms');
    if (terms.checked === false) {

        errorList.push('You must accept the terms and conditions');
    }


    var html
    if (errorList.length > 0) {
        html = '<ul class="errors"><li>' + errorList.join('</li><li>') + '</li></ul>';
    } else {
        html = '<h1>Thank you for registering</h1>';
        reset();
    }

    getE('messages').innerHTML = html;
}



 

});

$(function(){

$('#btnReset').on('click', reset); 

function reset() {
    for (var i = 0; i < inputs.length; i++) {
        var elm = getE(inputs[i])
        elm.value = '';
        elm.classList.remove(ERROR_CLASS);
    }

    getE('messages').innerHTML = '';

       getE('terms').checked = false;
}

 
function getE(id) {
    return document.getElementById(id);
}
});