var today = new Date();
var hourNow = today.getHours();
var greeting;

var message;
if (hourNow > 18) {
    greeting = 'Remember to Hydrate at Night!';
} else if (hourNow > 12) {
    greeting = 'Time for your afternoon hydration!';
} else if (hourNow > 0) {
    greeting = 'Remember to drink 64oz a day!';
} else {
    greeting = 'Water is Life!';
}

document.write('<h5>'+ greeting + '</h5>');

