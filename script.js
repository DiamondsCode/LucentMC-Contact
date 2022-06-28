// Get Data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");
function validateForm(){
    clearMessages();
    let errorFlag = false;
    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "You must enter a name.";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }
    if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "You must enter a valid email.";
        email.classList.add("error-border");
        errorFlag = true;
    }
    if (message.value.length < 1){
        errorNodes[2].innerText = "You must enter a message.";
        message.classList.add("error-border");
        errorFlag = true;
    }
    if(!errorFlag){
        success.innerText = "Success!"
        Email.send({
            SecureToken : "YOUR TOKEN HERE",
            To : 'RECEIVING EMAIL HERE',
            From : 'DELIVERING EMAIL HERE',
            Subject : nameInput.value,
            Body : 'Message: '+message.value+'<br><br>'+'Email: '+email.value
        }).then(
          message => alert(message)
        );
    }
    console.log("Sent! Why.. you snoopin in console? Nothing to see here.. move along! -Diamonds");
}function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}function emailIsValid(email){
    let pattern = /\S+@\S+\.\S/;
    return pattern.test(email);
}




/* SmtpJS.com - v3.0.0 */
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

