console.log('script has loaded');

var leagueCounter = 1;

var Country = function(name) {
    this.name = name;
}
canada = new Country("Canada");
usa = new Country("USA")

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

var Player = function(name, birthYear, birthCountry, team) {
    this.name = name;
    this.birthYear = birthYear;
    this.birthCountry = birthCountry;
    this.team = team
}