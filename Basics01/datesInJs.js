
let theDate = new Date()
console.log(theDate);//2023-10-04T03:18:39.552Z
console.log(theDate.toString());//Wed Oct 04 2023 08:48:39 GMT+0530 (India Standard Time)

console.log(theDate.toDateString());//Wed Oct 04 2023

console.log(theDate.toISOString());//2023-10-04T03:25:58.807Z

console.log(theDate.toJSON());//2023-10-04T03:27:42.173Z (same output as .toISOString())

console.log(theDate.toLocaleString()); // 10/4/2023, 8:59:49 AM

console.log(theDate.toLocaleTimeString()); // 9:02:06 AM

console.log(theDate.toLocaleDateString()); // 10/4/2023 (Gives the date)

console.log(theDate.toTimeString());// 09:04:33 GMT+0530 (India Standard Time)

console.log(theDate.toUTCString()); // Wed, 04 Oct 2023 03:35:49 GMT

console.log(theDate.valueOf());// 1696390607757 (in milli second) It is basically the total milli second that has passed since 1970 Jan 1.

console.log(typeof theDate); // object

// We can also create random dates and after storing them in a variable we can get the required output as per our need by using methods.

 let myDate = new Date(2017,5,30)
 console.log(myDate.toLocaleString()); // 6/30/2017, 12:00:00 AM

 // we can also put the date either in YY--MM--DD format or in DD--MM--YY format
 
 // We can also put the time in hours minutes and seconds by giving it.

 let mDate = new Date(12,7,85,14,50)  //  by giving the input while mentioning or separating the input by commas(,) it always takes the input as YY--MM--DD format
 console.log(mDate.toLocaleString());// 10/24/1912, 2:50:00 PM


// Time stamps

 // This is something by which we can get the particular time from start.

 let newDate = Date.now() // we can declare a date object also in this way.

 let myTimeStamp = new Date("01-05-2013")

 console.log(newDate);
 console.log(myTimeStamp.getTime()); // 1357324200000 (in ms)

 console.log(Math.floor(myTimeStamp.getTime()/1000)); // to get result in seconds

 // We can also get the days months and various data from the given input by different methods.

// .tolocaleString() method is a type of method where we can actually customize our out as per our need.

let updatedTimeStamp = myTimeStamp.toLocaleString('default', {
    weekday:"long"
})

console.log(updatedTimeStamp); // Saturday
 




