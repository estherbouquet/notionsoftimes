//moving the hands based on the browser's time
//having the animation that checks the time, updates the rotation and runs all the time

function runClock() {

  //first get the time and date
  var now = new Date(); //info about the time right now
  //and split them into other variables
  var hour = now.getHours() % 12;
  //var hour = now.getHours(); //-> written like that, it's going to give us 24 hours so we want to use a modulo/remainer of 12
  var min = now.getMinutes();
  var sec = now.getSeconds();
  var ms = now.getMilliseconds();
  var fhour = now.getHours();
  //now we have the numbers we need to calculate the rotation but we need to also get the div we're going to control through them

  //first thing we want is to reach the div clock in our document (html) that contains all our sub div
  var clock = document.querySelector("div.clock");
  //then the hands
  var hourHand = clock.querySelector("div.hour");
  var minHand = clock.querySelector("div.min");
  var secHand = clock.querySelector("div.sec");

  var fhourHand = clock.querySelector("div.fakehour");
  var fminHand = clock.querySelector("div.fakemin");
  var fsecHand = clock.querySelector("div.fakesec");

  //now that we have access to the hands and to the numbers corresponding, we need to calculate the rotation with some small geometry and the time data

  //REMINDER: a clock is 360 degrees and we have 12 hours -> 360/12 = 30
  // we use the min to make the hours smoother. 30 degrees for 1 hour. 60 min in 1 hour so 30/60 = 0.5
  var hourRotation = 30 * hour + 0.5 * min;
  //and to apply it, aka tranform it, we're going to change our hourHand style
  //instead of having hourHand.style.transform = "rotate(90deg)" we have:
  hourHand.style.transform = "rotate(" + hourRotation + "deg)";

  //REMINDER: a clock is 360 degrees and we have 60 minutes -> 360/60 = 6
  // we use the seconds to make the mouvement smoother, 6 (degrees for the min) & 60 (seconds) 6/60=0.1
  var minRotation = 6 * min + 0.1 * sec;
  minHand.style.transform = "rotate(" + minRotation + "deg)";

  // we use the milliseconds to make the mouvements of the clock smoother; 1 second = 1000ms
  var secRotation = 6 * sec + 0.006 * ms;
  secHand.style.transform = "rotate(" + secRotation + "deg)";


  var fhourRotation = 30 * fhour + 0.5 * min;
  fhourHand.style.transform = "rotate(" + 6 + fhourRotation + "deg)";

  var fminRotation = -6 * min + -0.1 * sec;
  fminHand.style.transform = "rotate(" + fminRotation + "deg)";

  var fsecRotation = 6 * sec + 0.006 * ms;
  fsecHand.style.transform = "rotate(" + 2 + fsecRotation * 4 + "deg)";

  //as soon as we run the page, we want every single frame of the page too
  requestAnimationFrame(runClock);
}

//as soon as we run the page, it will run the function
runClock();