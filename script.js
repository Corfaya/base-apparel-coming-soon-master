var button = $("button");
var message = $(".message");
var boxMail = $("#data-entry");

button.on("click", function(event){
    event.preventDefault();
    var userMail = $("#email").val();
    if (userMail === "" || checkCharacters(userMail) || !checkExtension(userMail)){
        message.text("Please, provide a valide email");
        boxMail.addClass("denied");
        message.css("color", "hsl(0, 93%, 68%)");
    }
    else {
        message.text("Thank you for your registration!")
        message.css("color", "hsl(0, 6%, 24%)");
    }
})

function checkCharacters(email){
    var invalidCharacters = /[!#$%^&*()+=\[\]{}\\|<>\/?]+/i;
    return invalidCharacters.test(String(email));
}

function checkExtension(email){
    const validDomainExtensions = /(\.com|\.net|\.org|\.edu|\.gov|\.mil|\.int|\.eu|\.guru|\.io|\.it)$/i;
    return validDomainExtensions.test(String(email));
}