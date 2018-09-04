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
  //Make element break in display none
  document.getElementsByClassName('status')[0].style.display = 'none';

  $groupeTimer.on('click', function() {

    if (this.textContent === "-" && $pBreak.prev()[0] === this) {
        //If the text content have - and that's before paragraph for the break
        if (timeBreak > 1 ) {
          //If number is more than 1 that remove 1 in time and display element in paragraph
          timeBreak--;
          $pBreak[0].innerHTML = timeBreak;
        }

    } else if (this.textContent === "-" && $pSession.prev()[0] === this) {
        //If the text content have - and that's before paragraph for the session
        if (timeSession > 1 ) {
          //If number is more than 1 that remove 1 in time and display element in paragraph
          timeSession--;
          $pSession[0].innerHTML = timeSession;
          $('#time')[0].innerHTML = timeSession + ':00';

        }

    } else if (this.textContent === "+" && $pBreak.next()[0] === this) {
        //If the text content have + and that's after paragraph for the break
        if (timeBreak < 5) {
          //If number is less than 5 that add 1 in time and display element in paragraph
          timeBreak++;
          $pBreak[0].innerHTML = timeBreak;
        }


    } else if (this.textContent === "+" && $pSession.next()[0] === this) {
        //If the text content have + and that's after paragraph for the session
        if (timeSession < 25) {
          //If number is less than 25 that add 1 in time and display element in paragraph
          timeSession++;
          $pSession[0].innerHTML = timeSession;
          $('#time')[0].innerHTML = timeSession + ":00";
        }

    } else if (this.textContent === "Start"){
        //Add times in a table
        tableTime.push(timeSession);
        tableTime.push(timeBreak);

        //Stop event in button for change times
        $pBreak.next().off('click');
        $pBreak.prev().off('click');
        $pSession.next().off('click');
        $pSession.prev().off('click');
        //Begin function interval
        start();

        //Display button stop and hide start
        $('.start').css("display", "none");
        $('.pause').css("display", "block");

    } else if (this.textContent === 'Pause') {
        //If element is stop button
        //Stop the interval function
        clearInterval(timInterval);
        //Display button start and hide stop
        $('.pause').css("display", "none");
        $('.start').css("display", "block");
    }

  })



  function start() {
   timInterval = setInterval(function() {timer()}, 1000);
  }

  function timer() {

    if ((tableTime[0] === 0 && tableTime[1] === 0) && second === 0) {
      //If all element is 0
        //Reset table
        tableTime = [];

        //Make times in the table
        tableTime.push(timeSession);
        tableTime.push(timeBreak);

        //Inverse display between break and session
        $('.status').toggle();

    } else if (tableTime[0] === 0 && second === 0 ) {
      //If first element and second is 0
        //Reverse table for make the second element in the first place
        tableTime.reverse();

        //Inverse display between break and session
        $('.status').toggle();

    } else {

        if (second === 0) {

           tableTime[0]--;
           second = 59;

         } else {

           second = second -1;

         }
         //Display the timer in html
         $('#time')[0].innerHTML = tableTime[0] + ":" + second;
      }


      }
});
