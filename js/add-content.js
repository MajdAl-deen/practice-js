'use strict';

var today = new Date();
console.log ('today ', today);
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'good evening, Class!'
}
else if (hourNow > 12) {
    greeting = 'good afternoon, Class!'
} else if (hourNow >= 0) {
    greeting = 'good morning, Class!'
} else { greeting = 'something went wrong!' }

document.write('<h3>' + greeting + '</h3>');