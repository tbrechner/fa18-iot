var accessToken = "3f0e95aca011b0cdcc821fb34e5a5233bade3298";
var deviceID = "270039000b51353432383931";
var volts_url = "https://api.spark.io/v1/devices/" + deviceID + "/volts";
var distance_url = "https://api.spark.io/v1/devices/" + deviceID + "/distance";
var control_url = "https://api.spark.io/v1/devices/" + deviceID + "/control";


function callbackVolts(data, status){
	if (status == "success") {
		volts = parseFloat(data.result);
		volts = volts.toFixed(2);
		volts_gauge.refresh(volts);
		setTimeout(getVoltsReading, 10000);
	}
}

function callbackDistance(data, status){
	if (status == "success") {
		dist = parseFloat(data.result);
		dist = dist.toFixed(2);
		dist_gauge.refresh(dist);
		setTimeout(getDistanceReading, 1000);
	}
}

function getVoltsReading(){
   	$.get(volts_url, {access_token: accessToken}, callbackVolts);
}

function getDistanceReading(){
   	$.get(distance_url, {access_token: accessToken}, callbackDistance);
}

function sendControl(message){
   	$.post(control_url, {params: message, access_token: accessToken});
}

function keyPress(event){
	code = event.keyCode;
	if (code == 119) {
		sendControl('F-100');
	}
	else if (code == 97) {
		sendControl('L-50');
	}
	else if (code == 115) {
		sendControl('S');
	}
	else if (code == 100) {
		sendControl('R-50');
	}
	else if (code == 122) {
		sendControl('B-75');
	}
}

$(document).keypress(keyPress);
