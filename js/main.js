$(document).ready(function() {
  //For take all button in the principal function
  var $groupeTimer = $('.timer');

  //Paragraph with the number ask for session and break
  var $pBreak = $('#timeBreak');
  var $pSession = $('#timeSession');

  //Base time for session and break
  var timeSession = 25;
  var timeBreak = 1;

  //Second for the timer
  var second = 0;

  //Variable for the time Interval
  var timInterval = null;

  //Table for the timer and change between breaks and sessions
  var tableTime = [];

  //Button stop hide
  $('.pause').css('display', 'none');
  //Paragraph with the time of session and break
  $('#time')[0].innerHTML = timeSession + ":00";
  $('.situation').css('display', 'none');

  $groupeTimer.on('click', function() {

    if (this.textContent === "-" && $pBreak.prev()[0] === this) {

      if (timeBreak > 1 ) {
        timeBreak--;
        $pBreak[0].innerHTML = timeBreak;

      }
    } else if (this.textContent === "-" && $pSession.prev()[0] === this) {

      if (timeSession > 1 ) {
        timeSession--;
        $pSession[0].innerHTML = timeSession;
        $('#time')[0].innerHTML = timeSession + ':00';

      }
    } else if (this.textContent === "+" && $pBreak.next()[0] === this) {
      timeBreak++;
      $pBreak[0].innerHTML = timeBreak;

    } else if (this.textContent === "+" && $pSession.next()[0] === this) {
      timeSession++;
      $pSession[0].innerHTML = timeSession;
      $('#time')[0].innerHTML = timeSession + ":00";
    } else if (this.textContent === "Start"){

            table.push(timeSession);
            table.push(timeBreak);

            $pBreak.next().off('click');
            $pBreak.prev().off('click');
            $pSession.next().off('click');
            $pSession.prev().off('click');
            start();

            $('.start').css("display", "none");
            $('.pause').css("display", "block");

    } else if (this.textContent === 'Pause') {

      clearInterval(timInterval);
      $('.pause').css("display", "none");
      $('.start').css("display", "block");
    }




  })

  function start() {
   timInterval = setInterval(function() {timer()}, 100);
  }

    function timer() {

      if ((table[0] === 0 && table[1] === 0) && second === 0) {
          table = [];

          table.push(timeSession);
          table.push(timeBreak);
      } else if (table[0] === 0 && second === 0 ) {
        table.reverse();
        $('.situation').toogle();
      } else {
        if (second === 0) {
           table[0]--;
           second = 59;
         } else {
           second = second -1;
         }
         $('#time')[0].innerHTML = table[0] + ":" + second;
      }


      }
});
