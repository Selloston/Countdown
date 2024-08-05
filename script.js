let inputDays = document.getElementById("inputDays");
let inputHours = document.getElementById("inputHours");
let inputMinets = document.getElementById("inputMinets");
let inputSecond = document.getElementById("inputSecond");
let Clock = document.getElementById("Clock");
let button = document.getElementById("button");
let button2 = document.getElementById("button2");
let isclick = false;

let Secondtimer;
let Clockname;

document.addEventListener("keydown", e => {
    key = e.key;
    switch(key)
    {
        case "Enter":
            if(inputDays.value !== "")
            {
                inputHours.focus()
            }
        case "Enter":
            if(inputHours.value !== "" )
            {
                inputMinets.focus()
            }
        case "Enter":
            if(inputMinets.value !== "")
            {
                inputSecond.focus()
            }
    }
})

button.addEventListener("click", function(){
    Timer();
})

button2.addEventListener("click", function(){
    clearInterval(Secondtimer);
    clearInterval(Clockname);
    button2.style.display = "none";
    button.style.display = "flex";
    isclick = false;
})

function Timer()
    {
        if(inputSecond.value.trim() && inputSecond.value > 0  && inputSecond.value % 1 == 0 && inputSecond.value < 60 || inputMinets.value.trim() && inputMinets.value > 0 && inputMinets.value < 60|| inputHours.value.trim() && inputHours.value > 0 && inputHours.value < 24|| inputDays.value.trim() && inputDays.value > 0)
    {
    let Days = inputDays.value;
    let Hours = inputHours.value;
    let Minets = inputMinets.value;
    let Second = inputSecond.value;
    function setTimer()
    {
        Clockname = setInterval(function()
        {
            if(Second >= 10)
            {
                Clock.textContent = `${Days} : ${Hours} : ${Minets} : ${Second}`;
            }
            else
            {
                Clock.textContent = `${Days} : ${Hours} : ${Minets} : 0${Second}`;
            }
        }, 1)
        Secondtimer = setInterval(function()
        {
            Second--;
            if(Second <= 1 && Minets == 0 && Hours == 0 && Days == 0)
            {
                Second = 0
            }
            if(Second <= -1 && Minets > 0)
            {
                Second = 59;
                Minets--;
            }
            if(Minets == 0 && Hours > 0 && Second <= -1)
            {
                Minets = 59;
                Second = 59;
                Hours--;
            }
            if(Hours == 0 && Days > 0 && Second <= -1)
            {
                Minets = 59;
                Second = 59;
                Hours = 23;
                Days--;
            }
        }, 1000)
    }   
    setTimer();
        if(isclick == false)
    {
        button.style.display = "none";
        button2.style.display = "flex";
        isclick = true;
        button.textContent = "Start Agan";
    }
    if(inputDays.value == "")
    {
        Days = "00"
    }
    else if(Days < 10 || Days <= 0)
    {
        Days = 0 + Days
    }
    if(inputHours.value == "")
    {
        Hours = "00"
    }
    else if(Hours < 10 || Hours <= 0)
    {
        Hours = 0 + Hours
    }
    if(inputMinets.value == "")
    {
        Minets = "00"
    }
    else if(Minets < 10 || Minets <= 0)
    {
        Minets = 0 + Minets
    }
    }
    else
    {
        alert("You should put number or a correct number or positive number or zero or a number greater than 59 or 23");
        inputDays.focus();
    }
    inputDays.value = "";
    inputHours.value = "";
    inputMinets.value = "";
    inputSecond.value = "";
    }

    window.onload = function()
    {
        inputDays.focus();
    }