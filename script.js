var button = $("button");
var error = $("#error-message");
var welcome = $("#check-message");
var boxMail = $("#email");

button.on("click", function(event){
    event.preventDefault();
    var userMail = $("#email").val();
    if (userMail === "" || checkCharacters(userMail) || !checkExtension(userMail)){
        error.text("Please, provide a valide email");
        boxMail.addClass("denied");
    }
    else {
        welcome.text("Thank you for your registration!")
    }
})

function checkCharacters(email){
    var invalidCharacters = /[!#$%^&*()+=\[\]{}\\|<>\/?]+/i;
    return invalidCharacters.test(String(email));
}

function checkExtension(email){
    const validDomainExtensions = /(\.com|\.net|\.org|\.edu|\.gov|\.mil|\.int|\.eu|\.guru|\.io)$/i;
    return validDomainExtensions.test(String(email));
}

function errorStyle(){
    
}