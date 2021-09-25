var userInput="1 Jan 2022";
var scount=document.querySelector(".seconds");
var mcount=document.querySelector(".mins");
var hcount=document.querySelector(".hours");
var dcount=document.querySelector(".days");
var submit=document.querySelector(".submitbtn");
var ename=document.querySelector(".form1 input:nth-of-type(1)");
var edate=document.querySelector(".form1 input:nth-of-type(2)");
var invalid=document.querySelector(".invalid");
var form=document.querySelector(".form1");
var interval;

function countdown(userDate){
    var currentDate=new Date();
    //console.log(userDate+" "+currentDate);
    var seconds=Math.floor((userDate-currentDate)/1000);
    var mins=Math.floor(seconds/60);
    var hours=Math.floor(mins/60);
    var days=Math.floor(hours/24);
    seconds=seconds%60;
    mins=mins%60;
    hours=hours%24;
    scount.innerHTML=`${seconds}<br>seconds`;
    mcount.innerHTML=`${mins}<br>mins`;
    hcount.innerHTML=`${hours}<br>hours`;
    dcount.innerHTML=`${days}<br>days`;
    console.log(seconds+" "+mins+" "+hours+" "+days);
}


submit.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(ename.value);
    console.log(edate.value);
    var date1=new Date(edate.value);
    date1.setHours(0,0,0,0);
    if(ename.value!=="" && edate.value!=="" && date1-new Date()>=0 ){
        document.querySelector(".title").innerText=ename.value;
        countdown(date1);
        interval=setInterval(countdown,1000,date1);
        form.style.display="none";
        document.querySelector(".newctn-button").style.display="inline-block";
    }
    else{
        invalid.style.display="block";
        setTimeout(()=>{
            invalid.style.display="none";
        },3000);
    }

    console.log(date1);
    console.log(new Date(userInput));
})

//countdown();

//setInterval(countdown,1000);