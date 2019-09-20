function askName()  {
    var userName = prompt('What\'s your name?');
    return 'Hi ' + userName + '!';
  }
  
  function drinkWater() {
    var askWithWhat = confirm('Do you need a water bottle?');
    var bottle = '<img src="http://giphygifs.s3.amazonaws.com/media/12IK01JJiBXtvi/giphy.gif">';
    if (askWithWhat === true) 
        var howMany = prompt ('How water bottles would you like?') ;
        while (howMany === false) {
            howMany = prompt('How water bottles would you like?');
        }
            var result = '';
            for (i=0; i < (howMany); i++) {
                realCount = i + 1;
                result = '<p>' + result + realCount + bottle + '</p>';  
            }
            return result; 
    }
    function getTime() {
      var today = new Date();
      var hourNow = today.getHours();
      var greeting;
      
      if (hourNow > 18) {
          greeting = 'Remember to Hydrate at Night!';
      } else if (hourNow > 12) {
          greeting = 'Time for your afternoon hydration!';
      } else if (hourNow > 0) {
          greeting = 'Remember to drink 64oz a day!';
      } else {
          greeting = 'Water is Life!';
      }
      
      return '<h5>'+ greeting + '</h5>';
      }