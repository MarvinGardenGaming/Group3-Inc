
function sendEmail(){
    var kingGuestEmail = document.getElementById("kingGuestEmail").value;

    var queenGuestEmail = document.getElementById("queenGuestEmail").value;

    console.log("king is: ", kingGuestEmail, " and queen is: ", queenGuestEmail);

    var mail = document.createElement("a");

    if(kingGuestEmail != ""){
        mail.href = "mailto:" + kingGuestEmail + "?subject='This is a test subject'&body='This is a test body'";
    } else if (queenGuestEmail != ""){
        mail.href = "mailto:" + queenGuestEmail + "?subject='This is a test subject'&body='This is a test body'";
    };

    mail.click();
}

// This function will bring up the print preview screen and print the entire window
function printOptions(){
    window.print()
}