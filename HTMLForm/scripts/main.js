$(document).ready(function(){
debugger
   
    var btn = getE('btnSubmit');
    btn.addEventListener('click', submit);
    
    var btn2 = getE('btnReset');
    btn2.addEventListener('click', reset);
   
    function getE(id) {
        return document.getElementById(id);
    }

var inputs = ['firstName', 'lastName', 'emailAddress', ];
var ERROR_CLASS = 'invalid';


$(function(){
    $('#btnSubmit').on('click', submit);


    function submit(){
        var elm;
        var errorList = [];
    
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
    
        var terms = getE('terms');
        if (terms.checked === false) {
                errorList.push('You must accept the terms and conditions');
        }
    }
});

}