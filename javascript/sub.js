/******** Name ********/
function nameFocus() {
    var msg = document.getElementsByName("error-name")[0];
    msg.classList.replace("error", "none");
}

function nameBlur(e) {
    var val = e.target.value;
    var nameFor = /^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/; 
    if (val.length > 6 && val.match(nameFor)) {

    }else {
        var msg = document.getElementsByName("error-name")[0];
        msg.classList.replace("none", "error");
    }
}   

/******** Email ********/
function mailFocus() {
    var msg = document.getElementsByName("error-email")[0];
    msg.classList.replace("error", "none");
}

function mailBlur(e) {
    var val = e.target.value;
    var mailForm = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(val && val.match(mailForm)) {

    }else {
        var msg = document.getElementsByName("error-email")[0];
        msg.classList.replace("none", "error");
    }
}

/******** Pass ********/
function passFocus() {
    var msg = document.getElementsByName("error-pass")[0];
    msg.classList.replace("error", "none");
}

function passBlur(e){
    var val = e.target.value;
    var passFor = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    if (val.match(passFor)) {
    
    }else {
        var msg = document.getElementsByName("error-pass")[0];
        msg.classList.replace("none", "error");
    }
}

/******** Confirm-Password ********/
function cpassFocus(){
    var msg = document.getElementsByName("error-cpass")[0];
    msg.classList.replace("error", "none");
}

function cpassBlur(e){
    var val = e.target.value;
    var pass = document.getElementById('pass');
    if(val != pass.value) {
        var msg = document.getElementsByName("error-cpass")[0];
        msg.classList.replace("none", "error");
    }
}

/******** Age ********/
function ageFocus() {
    var msg = document.getElementsByName("error-age")[0];
    msg.classList.replace("error", "none");
}

function ageBlur(e){
    var val = e.target.value;
    val = Number(val);
    if(Number.isInteger(val)) {
        if(val>=18) {
        
    }else {
        var msg = document.getElementsByName("error-age")[0];
        msg.classList.replace("none", "error");
    }
    }else {
        var msg = document.getElementsByName("error-age")[0];
        msg.classList.replace("none", "error");
    }
}


/******** Phone ********/
function phoneFocus() {
    var msg = document.getElementsByName("error-phone")[0];
    msg.classList.replace("error", "none");
}

function phoneBlur(e) {
    var val = e.target.value;
    if(val.length<7 || val.includes(" ") || val.includes("(") || val.includes(")") || val.includes("-") || val.includes("_")) {
        var msg = document.getElementsByName("error-phone")[0];
        msg.classList.replace("none", "error");
    }
}



/******** Button ********/
function butclick(){
    alert('entro al boton');
}

window.onload = function() {
    var name = document.getElementById('name');
    var but = document.getElementById('button');
    var mail = document.getElementById('email');
    var pass = document.getElementById('pass');
    var cpass = document.getElementById('cpass');
    var age = document.getElementById('age');
    var phone = document.getElementById('phone');

    /******** Name ********/
    name.onfocus = nameFocus;
    name.onblur = nameBlur;

    /******** Email ********/
    mail.onfocus = mailFocus;
    mail.onblur = mailBlur;
    
    /******** Password ********/
    pass.onfocus = passFocus;
    pass.onblur = passBlur;

    /******** Confirm-Password ********/
    cpass.onfocus = cpassFocus;
    cpass.onblur = cpassBlur;
    
    /******** Age ********/
    age.onfocus = ageFocus;
    age.onblur = ageBlur;

    /******** Phone ********/
    phone.onfocus = phoneFocus;
    phone.onblur = phoneBlur;

    but.onclick = butclick;  
}


