console.log('script has loaded');

var leagueCounter = 1;

var League = function(name, countries) {
    this.id = leagueCounter;
    this.name = name;
    this.countries = countries;

    leagueCounter ++;
}