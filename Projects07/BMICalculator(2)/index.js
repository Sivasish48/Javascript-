const theForm = document.querySelector("form")

theForm.addEventListener("submit" , (e)=> {
  e.preventDefault()
 
  // preventDefault() method hold all the value given by the user before it is going to any server

 const height = parseInt(document.querySelector("#height").value)
 const weight = parseInt(document.querySelector("#weight").value)
 const res = document.querySelector("#results")
 // parseInt() method converts the srting value into integer value

 if(height === '' || height === 0 || height<0 || isNaN(height))
    // use the isNaN() method instead of value === NaN
 {
    res.innerHTML = `Please give a valid value of height`;
 }
 else if(weight === '' || weight === 0 || weight < 0 || isNaN(weight)){
    
    res.innerHTML = `Please give a valid value of weight`;
 }
 else {
     // calculation
    const bmi = (weight / ((height * height) / 10000)). toFixed(1);
    
    //for showing the result

    if(bmi < 18.6){
        res.innerHTML = `<span>${bmi} and you are underweight.</span>`
    } else if ( bmi >= 18.6 && bmi <= 24.9){
        res.innerHTML = `<span>${bmi} and your weight is in normal range.</span>`
    }else{
        res.innerHTML = `<span>${bmi} and you are overweight.</span>`
    }
    
 }
})
