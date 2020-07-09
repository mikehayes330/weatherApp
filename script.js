// var currentCity = ""
var APIKey = "64c34ee7c70a13599aaf08ac59e6b5b5";
var recentCities = [];

$("#search").on("click", getSearchedCity);









function getSearchedCity(event) {
  event.preventDefault();

  
  var searchedCity = $("#searchTerm").val();
  recentCities.push(searchedCity);
  
  localStorage.setItem("recentSearches", JSON.stringify(recentCities) )
  
  var currentLat, currentLon;
  saveCities();
    
  

  

  

  var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + searchedCity + "&appid=" + APIKey;
  

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    var currentTempF = (response.main.temp - 273.15) * 1.8 + 32;
    var currentHumidity = response.main.humidity;
    var currentWindSpeedMPH = response.wind.speed * 2.237;
    var currentCity = response.name;
    var newDiv = $("<div>");
    var p = $("<p>");
    var searchedCityElement = $("#searchedCities");
    var currentCityElement = $(".currentCity");
    var currentTempElement = $(".currentTemp");
    var currentWindElement = $(".currentWind");
    var day1Element = $('#day1');
    var currentLon = response.coord.lon
    var currentLat = response.coord.lat
    
    searchedCityElement.text("Current City: " + currentCity);
    currentCityElement.html("<h2> Current City: " + currentCity + " (" + moment().format("LL") + ") </h2>");
    currentTempElement.html("<h2> Current Tempature: " + Math.round(currentTempF) + " F</h2>");
    currentWindElement.html("<h2> Current Wind Speed: " + Math.round(currentWindSpeedMPH) + " MPH</h2>");
    day1Element.html("fdsa")

    

  
  });

  
  // var forecastQueryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + currentLat + "&lon=" + currentLon + "&exclude=minutely,hourly&appid=" + APIKey;

   

  // $.ajax({
  //   url: forecastQueryURL,
  //   method: "GET",
  // }).then(function (forecast) {
    
  //   console.log(forecast)
  //   var day1Element = $('#day1');

    
    
  //   day1Element.html("fdsa")

    

  
  // });
  
  
  
  
  
  function saveCities() {
   console.log(searchedCity);
   console.log(recentCities);
  
    console.log(recentCities)
    
    
    // localStorage.setItem("recentCities", recentCities);
    // console.log(recentCities)
  }

  function showRecentCities(){
  
  console.log(localStorage.getItem(recentCities))
    //  recentList = $('<ul>')
  //   searchedCityElement.append(recentSearchedCities)
    
  }
  

  
}
