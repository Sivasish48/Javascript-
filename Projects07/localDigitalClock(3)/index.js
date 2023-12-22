const theClock = document.querySelector("#clock");

// SetInterval() method

// The setInterval() method calls a function at specified intervals (in milliseconds)
// so the parameters for the function is given as in milliseond.
// which is 1 second = 1000 milliseconds.

setInterval( function(){
    let date = new Date();

    theClock.innerHTML = date.toLocaleTimeString()
} , 1000)