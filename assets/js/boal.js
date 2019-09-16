var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
    var crd = pos.coords;


    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);

    var url = `http://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${crd.latitude}&lon=${crd.longitude}&apikey=361f4994d05fc78ec2e80c047bfb430a`;
    $.ajax ({
        url: url
    })
    .then(function(result){
        console.log(result);
    })
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);


