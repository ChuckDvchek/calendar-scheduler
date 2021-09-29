var eventEl = $('.event');
var saveBtnEl = $('.save-btn');
var timeBoxEl = $('.time-box');

var textArr;
var now = moment().format('HH');

updateTime();
loadText();

saveBtnEl.on('click',saveText);

function saveText(event){
    event.preventDefault();
    textArr[event.target.dataset.time] = $(event.target).siblings().eq(1).val();
    localStorage.setItem('textArr',JSON.stringify(textArr));
}

function loadText(){
    textArr = JSON.parse(localStorage.getItem('textArr')) || ["","","","","","","","",""];
    for (let i = 0; i < 9; i++) {
        timeBoxEl.children().eq(i).children().eq(1).text(textArr[i]);
    }
}

function updateTime(){
    for (let i = 0; i < 9; i++) {
        let time = timeBoxEl.children().eq(i).children().eq(2).data('time') + 9;
        if(time < now){
            timeBoxEl.children().eq(i).children().eq(1).addClass('past');
        } else if(time == now){
            timeBoxEl.children().eq(i).children().eq(1).addClass('present');
        } else {
            timeBoxEl.children().eq(i).children().eq(1).addClass('future');
        }
    }
}