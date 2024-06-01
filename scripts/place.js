const temperature = -10;
const wind = 15;

function calculateWindChill(temp, V) {
    return (13.12 + (0.6215 * temp) - (11.37 * (Math.pow(V, 0.16))) + (0.3965 * temp * Math.pow(V, 0.16)));
}

document.getElementById("temp").innerHTML = `${temperature} °C`;
document.getElementById("wind").innerHTML = `${wind} km/hr`;

if (temperature <= 10 && wind > 4.8) {
    let chill = calculateWindChill(temperature, wind);
    chill = Math.round(chill*100)/100;
    document.getElementById("windchill").innerHTML = `${chill} °C`;
}
else {
    document.getElementById("windchill").innerText = "N/A";
}