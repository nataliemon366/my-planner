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
  $.ajax({
    url: url
  }).then(function(result) {
    console.log(result);
    render(result);
  });
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
// var image =
//     "<img src='http://openweathermap.org/img/w/" +
//     data.weather[0].icon +
//     ".png'>";

function render(result) {
  var div = $("<div>");
  var pTag = $("<p>");
  var span = $("<span>");
  var pTagHumid = $("<p>");
  var spanHummid = $("<span>");
  var city = $("<h4>");
  var image = $("<img>");
  image.attr(
    "src",
    `http://openweathermap.org/img/w/${result.weather[0].icon}.png`
  );
  city.text(result.name);

  pTagHumid.text("Humidity = ");
  pTagHumid.append(spanHummid);
  spanHummid.text(result.main.humidity);

  span.text(result.main.temp);
  pTag.text("Temperature = ");
  pTag.append(span);

  div.append(city, image, pTag, pTagHumid);
  $("body").prepend(div);
}

