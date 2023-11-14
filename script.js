// HTML elements recovery
var button = $("button");
var message = $(".message");
var boxMail = $("#data-entry");
var iconError = $("#icon-error");

//Event Listener
button.on("click", function(event){
    event.preventDefault();
    var userMail = $("#email").val();
    if (userMail === "" || checkCharacters(userMail) || !checkExtension(userMail)){
        message.text("Please, provide a valide email");
        boxMail.addClass("denied");
        message.css("color", "hsl(0, 93%, 68%)");
        iconError.removeClass("hidden");
    }
    else {
        boxMail.removeClass("denied");
        iconError.addClass("hidden");
        message.text("Thank you for your registration!")
        message.css("color", "hsl(0, 6%, 24%)");
    }
})

// FUNCTIONS
function checkCharacters(email){
    var invalidCharacters = /[!#$%^&*()+=\[\]{}\\|<>\/?]+/i;
    return invalidCharacters.test(String(email));
}

function checkExtension(email){
    const validDomainExtensions = /(\.com|\.net|\.org|\.edu|\.gov|\.mil|\.int|\.eu|\.guru|\.io|\.it)$/i;
    return validDomainExtensions.test(String(email));
}