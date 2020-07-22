 let displayDate= document.getElementById('currentDay');
displayDate.textContent=moment().format('dddd MMMM Do');

//  let dayOfWeekEl;

// //initialize
// currentDate()

// function currentDate(){
//     let displayDate= dayOfWeekEl;
//     let dayOfWeekEl =moment().format('dddd');  
// }
console.log(moment().format('dddd'));
console.log(moment().format('MMMM Do YYYY'));
console.log(moment().format('h:mm:ss a'));
console.log(moment().format('dddd MMMM Do'));