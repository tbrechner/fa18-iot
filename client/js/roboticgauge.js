var volts_gauge = new JustGage({
    id: "voltsGauge",
    value: 0,
    min: 4,
    max: 7,
	levelColors: ["#FF0000", "#FFFF00", "#00FF00"],
    title: "Battery Voltage"
});

var dist_gauge = new JustGage({
    id: "distanceGauge",
    value: 0,
    min: 5,
    max: 250,
    title: "Rangefinder (cm)"
});

function getVoltsReading(){
   	$.get(volts_url, {access_token: accessToken}, callbackVolts);
}

function getDistanceReading(){
   	$.get(distance_url, {access_token: accessToken}, callbackDistance);
}

getVoltsReading();
getDistanceReading();