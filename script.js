console.log('script has loaded');

var leagueCounter = 1;

var League = function(name, countries) {
    this.id = leagueCounter;
    this.name = name;
    this.countries = countries;

    leagueCounter ++;
}

var Team = function(name, city, league) {
    this.name = name;
    this.city = city;
    this.league = league;
}