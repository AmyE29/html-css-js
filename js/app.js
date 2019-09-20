function askName()  {
    var userName = prompt('What\'s your name?');
    return 'Hi ' + userName + '!';
  }
  
  function drinkWater() {
    var withWhat = confirm('Do you have a water bottle?');
    var bottle = '<img src="http://giphygifs.s3.amazonaws.com/media/12IK01JJiBXtvi/giphy.gif">';
    if (withWhat === true) {
        var count = '';
        while (Number(count) === false) {
            count = Number(prompt('How many water bottles would you like?'));
        }
            var result = '';
            for (i=0; i < (howMany); i++) {
                realCount = i + 1;
                result = '<p>' + result + realCount + bottle + '</p>';  
            }
            return result; 
    }
