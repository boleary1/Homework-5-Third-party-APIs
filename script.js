let displayDate = document.getElementById('currentDay');//creates display variables
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

// changeAllColor();
printActivities();
setInterval(update, 1000);
function update(){
displayDate.textContent = moment().format('dddd MMMM Do h:mm:ss a');
changeAllColor(); //moved here so that it will update on it's own as the hour changes
};

function saveActivity(a) {
    localStorage.setItem(a.id, a.value)
}
function printActivities() { //moves activities to local storage
    nineam.value = localStorage.getItem(9)
    tenam.value = localStorage.getItem(10)
    elevenam.value = localStorage.getItem(11)
    twelvepm.value = localStorage.getItem(12)
    onepm.value = localStorage.getItem(13)
    twopm.value = localStorage.getItem(14)
    threepm.value = localStorage.getItem(15)
    fourpm.value = localStorage.getItem(16)
    fivepm.value = localStorage.getItem(17)
}
function changeAllColor(){ //changes display color
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
    
    for(j = 0; j < arguments.length; j++){
        
        if (parseInt(i.id) < moment().format('HH')){
    
            i.classList.remove('future')
            i.classList.remove('present')
            i.classList.add('past')
        }
        else if (parseInt(i.id) > moment().format('HH')){
            i.classList.add('future')
            i.classList.remove('present')
            i.classList.remove('past')
        }
        else if (parseInt(i.id) == moment().format('HH')) {
            i.classList.remove('future')
            i.classList.add('present')
            i.classList.remove('past')
        }     };

}
