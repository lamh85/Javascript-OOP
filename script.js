console.log('script has loaded');

var leagueCounter = 1;

var Country = function(name) {
    this.name = name;
}
canada = Country("Canada");
usa = Country("USA")

var League = function(name, countries) {
    this.id = leagueCounter;
    this.name = name;
    this.countries = countries;

    leagueCounter ++;
}
var nhl = new League("NHL", [canada, usa])

var Team = function(name, city, league) {
    this.name = name;
    this.city = city;
    this.league = league;
}

var Player = function(name, birthYear, birthCountry) {
    this.name = name;
    this.birthYear = birthYear;
    this.birthCountry = birthCountry;
}