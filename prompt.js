var answer = prompt ('Do you drink water?');

var message;
if (answer === 'yes') {
    message = 'You need a water bottle!';
} else if (answer === 'no'){ 
    message = 'OMG! youre going to die without a water bottle!';
} else {
    message = 'Drink more water!';
}

document.write('<h5>'+ message + '</h5>');

var color = 'blue'