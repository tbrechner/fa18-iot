var deviceID = "270039000b51353432383931";
var accessToken = "fcf1eddb3ee20619d6a6ff28803de3bd53a8f17c";
var url = "https://api.spark.io/v1/devices/"+ deviceID + "/morse";

function callback(data, status) {
    if(data.return_value == 1) {
        alert("Your message was sent!")
    }
    else {
        alert("Could not connect to the receiver.")
    }
}

function sendMorse(){
    message = $('#message').val();
    $.post(url, {param: message, access_token: accessToken}, callback);
}