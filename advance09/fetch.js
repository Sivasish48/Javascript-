// FETCH METHOD

// In JavaScript, the fetch() method is used to request data from a server. 

// It provides a more efficient and powerful way to retrieve data from servers compared to older techniques, such as the XMLHTTPRequest()

// The request can be of any type of API that returns the data in JSON or XML.

// Example


const fetchEx = async ()=>{
 const fetchRes = await fetch("https://api.github.com/users/Sivasish48")

 const data = fetchRes.json()
 console.log(data);
}
fetchEx()

// Promise { <pending> }


const fetchEx = async ()=>{
    try {
       
        const fetchRes = await fetch("https://api.github.com/users/Sivasish48")
        console.log(fetchRes);  // t is giving the response from the api.
        const data = fetchRes.json()
        //console.log(data);
    } catch (error) {
         console.log("Error occurs.");
    }
   
   }
   fetchEx()

   
   // Promise { <pending> }

   // So what is happening is the fetch method usually give the response in time, as if we print the "fetchRes" in line no. 26.

   // But it is pending or taking time because  to convert it into the json.

   // what should we do is to await the json data as well

   
   const fetchEx = async ()=>{
    try {
       
        const fetchRes = await fetch("https://api.github.com/users/Sivasish48")
        //console.log(fetchRes);  // t is giving the response from the api.
        const data =  await fetchRes.json()
        console.log(data);
    } catch (error) {
         console.log("Error occurs.");
    }
   
   }
   fetchEx()

   // It is giving the json object.


   // let us use the fetch with then() and catch()

   fetch("https://api.github.com/users/Sivasish48")
   .then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})

// It does return the json object


