# Javascript-OOP

This repo is for practicing OOP in JS.

## ERD

League
* name
* has many: countries
* has many: teams

Team
* name
* city
* mascot
* has one: head coach
* has one: general manager
* has one: league

Player
* name
* date of birth
* has one: team