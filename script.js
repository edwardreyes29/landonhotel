(function() {
  "use strict";

  document.addEventListener("DOMContentLoaded", function() {
    var c = document.getElementById("current-time");
    var dt = document.getElementById("current-date");

    setInterval(updateTime, 1000); // setInterval updates continuously

    function updateTime() {
      var d = new Date(); // Gets date from right now
      var hours = d.getHours(),
        ampm = 'AM',
        minutes = d.getMinutes(),
        monthInt = d.getMonth(),
        month = "",
        day = d.getDate();

        monthInt = parseInt(monthInt, 10);

        var monthNames = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ]

      if (hours > 12) {
        hours -= 12;
        ampm = 'PM';
      } else if (hours === 0) { // deals with midnight being 0 instead of 12
        hours = 12; 
      }

      if (minutes < 10) {
        minutes = '0' + minutes;
      }

      var sepClass = '';

      if (d.getSeconds() % 2 === 0) sepClass = 'trans';
      
      var sep = "<span class='" + sepClass + "'>:</span>";
      dt.innerHTML = monthNames[monthInt] + " " + day;
      c.innerHTML = hours + sep + minutes + " " + ampm;
    }

  });

})();
