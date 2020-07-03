


// var currentCity = ""
var APIKey = "64c34ee7c70a13599aaf08ac59e6b5b5";

$('button').on('click', test)








function test(event){
    event.preventDefault();
    
    var recentCities = [];
    var searchedCity = $('#searchTerm').val();
    
    saveCities();
    
    var queryURL = 'http://api.openweathermap.org/data/2.5/weather?q='+ searchedCity + '&appid=' + APIKey;
    var forcastQueryURL = 'http://api.openweathermap.org/data/2.5/forcast?q='+ searchedCity + '&appid=' + APIKey;

    console.log(forcastQueryURL);


    
    $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
          
        var currentTempF = (response.main.temp - 273.15) * 1.80 + 32;
        var currentHumidity = response.main.humidity;
        var currentWindSpeedMPH = (response.wind.speed) * 2.237;
        var currentCity = response.name
        var newDiv = $('<div>');
        var p = $('<p>');
        var searchedCityElement = $('#searchedCities');
        var currentCityElement = $('.currentCity');
        var currentTempElement = $('.currentTemp');
        var currentWindElement = $('.currentWind')
       


          console.log(response)
          console.log("Current Temp: " + Math.round(currentTempF) + " F");
          console.log("Current City: " + currentCity)
          console.log("Current Wind Speed: " + Math.round(currentWindSpeedMPH) + " MPH")
           searchedCityElement.text("Current City: " + currentCity)
           currentCityElement.html("<h2> Current City: " + currentCity + " (" + moment().format('LL') + ") </h2>")
           currentTempElement.html("<h2> Current Tempature: " + Math.round(currentTempF) + " F</h2>")
           currentWindElement.html("<h2> Current Wind Speed: " + Math.round(currentWindSpeedMPH) + " MPH</h2>")
          
          
          
          
          
          //  newDiv.text("Current City: " + currentCity);
          
          //$('.weatherDiv').append(newDiv);
         // newDiv.text("Current Temp: " + Math.round(currentTempF) + " F");
          
          
         // $('.weatherDiv').append(newDiv);
          
          
           

        //   for (var i = 0; i < results.length; i++) {
        //     var gifDiv = $("<div>");

        //     var rating = results[i].rating;

        //     var p = $("<p>").text("Rating: " + rating);

        //     var personImage = $("<img>");
        //     personImage.attr("src", results[i].images.fixed_height.url);

        //     gifDiv.prepend(p);
        //     gifDiv.prepend(personImage);

        //     $("#gifs-appear-here").prepend(gifDiv);
         // }
        });
        function saveCities(){
          recentCities.push(searchedCity);
          localStorage.setItem("recentCities", recentCities)
        }
    
    
    
    console.log(recentCities)
    
    
    
    
    console.log(queryURL)
}






