// JavaScript source code

var isLoggedIn = false; // TODO: Set false f�r release.

// Global values for use in calculations and displaying data

var currency = ' TZS';
//Defines what one share costs in the selected currency 
var sharesValue = 10;
//Defines the community payment (minimum ammount to save each month)
var communityValue = 20;
//Defines what a user is allowed to borrow (users savings * toLend)
var toLend = 2.5;

var users = ['Jon', 'Arve', 'Torgeir', 'Leif', 'Paul', 'Johannes'];

// table html
var tableDiv = document.createElement('div');
var table = document.createElement('table');