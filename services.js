//SERVICES
weatherApp.service('cityService', function () {
    this.city = "New York, US";

});

weatherApp.service('weatherService', ['$resource', function ($resource) {

    this.GetWeather = function (city, days) {

        var weatherAPI = $resource("https://api.openweathermap.org/data/2.5/forecast", {
            callback: "JSON_CALLBACK"
        }, {
            get: {
                method: "JSONP"
            }
        });

        return weatherAPI.get({
            appid: "1352a59ccac755017f3abce51cca86f9",
            q: city,
            cnt: days
        });
    };

}]);
