const noMondays = new Promise( (resolve, reject) => { // arrow function
  if(new Date().getDay() !== 2) { // new Date(): today's date , .getDay() : weekday
      resolve("Good, it's not Monday!");
  } else {
      reject("Someone has a case of the Mondays!");
  }
  });

noMondays
  .then( response => console.log("Then..." + response) ) // the promise hits resolve
  .catch( error => console.log("catch..." + error) ); // the promise hits reject
  


const apiCall = () =>{ // a function that takes time to run
  return new Promise((resolve, reject)=>{
      setTimeout(()=>{
          resolve("finish api call")
      }, 2000)
  })
}
  
// .then Function
const thenFunc =() =>{
  console.log("start")
  apiCall()
      .then((response) => {
          console.log(" .then --> " + response)
          console.log("end")
      })
      .catch((error) =>console.log(" .catch --> " + error) )
}

// thenFunc()

// .async function
const asyncFunc = async() =>{
  console.log("start")
  const response = await apiCall()
  console.log("await --> " + response)
  console.log("end")
}

asyncFunc()



