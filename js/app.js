function askName()  {
    var userName = prompt('What\'s your name?');
    return 'Hi ' + userName + '!';
  }
  
  function drinkWater() {
    var askWithWhat = confirm('Do you have a water bottle?');
    var bottle = '<img src="http://giphygifs.s3.amazonaws.com/media/12IK01JJiBXtvi/giphy.gif">';
    if (askWithWhat === true) {
        var howMany = '';
        while (howMany === false) {
            howMany = prompt('How water bottles would you like?');
        }
            var result = '';
            for (i=0; i < (howMany); i++) {
                count = i + 1;
                result = '<div>' + result + count + bottle + '</div>';  
            }
            return result; 
    }
    else {
        return 'You may want drink more water.';
    } 
  }