var need_water = confirm('Do you have a water bottle?');
var intro;

if (need_water === true) {
    intro = "You need a better one!"
}
else {
   intro = "You've come to the right place!"
}

document.write(intro)