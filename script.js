let displayDate = document.getElementById('currentDay');
displayDate.textContent = moment().format('dddd MMMM Do');
let nineam = document.getElementById('9')
let tenam = document.getElementById('10')
let elevenam = document.getElementById('11')
let twelvepm = document.getElementById('12')
let onepm = document.getElementById('13')
let twopm = document.getElementById('14')
let threepm = document.getElementById('15')
let fourpm = document.getElementById('16')
let fivepm = document.getElementById('17')
// changecolor(nineam, tenam, elevenam, twelvepm, onepm, twopm, threepm, fourpm, fivepm);
// changecolor("nineam", "tenam", "elevenam", "twelvepm", "onepm", "twopm", "threepm", "fourpm", "fivepm");
// ["nineam", "tenam", "elevenam", "twelvepm", "onepm", "twopm", "threepm", "fourpm", "fivepm"].foreach(changecolor)

changeAllColor();


function saveActivity(a) {
    console.log(a.value)
    console.log(a.id)
}
//  let dayOfWeekEl;

// //initialize
// currentDate()

// function currentDate(){
//     let displayDate= dayOfWeekEl;
//     let dayOfWeekEl =moment().format('dddd');  
// }
function changeAllColor(){
    changecolor(nineam);
    changecolor(tenam);
    changecolor(elevenam);
    changecolor(twelvepm);
    changecolor(onepm);
    changecolor(twopm);
    changecolor(threepm);
    changecolor(fourpm);
    changecolor(fivepm);
}
function changecolor(i){
    console.log('changecolor called')
    for(j = 0; j < arguments.length; j++){
        
        if (parseInt(i.id) < moment().format('HH')){
            console.log(i,'before')
    
            i.classList.remove('future')
            i.classList.remove('present')
            i.classList.add('past')
        }
        else if (parseInt(i.id) > moment().format('HH')){
            console.log(i,'after')
            i.classList.add('future')
            i.classList.remove('present')
            i.classList.remove('past')
        }
        else if (parseInt(i.id) == moment().format('HH')) {
            console.log(i,'during')
            i.classList.remove('future')
            i.classList.add('present')
            i.classList.remove('past')
        }     };

}
// console.log(moment().format('dddd'));
// console.log(moment().format('HH'));
// console.log(moment().format('MMMM Do YYYY'));
// console.log(moment().format('h:mm:ss a'));
// console.log(moment().format('dddd MMMM Do'));
// console.log(moment().startOf('day').fromNow());