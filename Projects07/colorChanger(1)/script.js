const allBtn = document.querySelectorAll('.button')

const thebody = document.querySelector("body")

allBtn.forEach( (btn)=> {
  console.log(btn);
  btn.addEventListener("click", (e)=> {
     console.log(e);

     // it shows about the event which is pointer event(mouse pointer)nand their prototypes as well.
     console.log(e.target); 

     // e.target shows about the element which is targeted to hold the event

     switch (e.target.id){

      case "grey":
      thebody.style.backgroundColor = e.target.id;

      // We could have written the thebody.style.backgroundColor = grey;
      // But writting in the above way makes the code more efficient and it is a good practice
      break;

      case "purple":
      thebody.style.backgroundColor = e.target.id;
      break;

      case "blue":
      thebody.style.backgroundColor = e.target.id;
      break;

      case "yellow":
      thebody.style.backgroundColor = e.target.id;
      break;

      default:
      break;

     }
  })
})


    