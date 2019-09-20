var need_water = prompt ('Do you have a water bottle?');
var intro;

if (need_water === 'yes') {
    intro = 'You need a better one!';
}
else {
   intro = 'You\'ve come to the right place!';
}

document.write('<h5>' + intro + '</h5>');

