 {

// variable declaration and defintion

let mins = document.getElementById('minutes');
let secs = document.getElementById('seconds');
let milisecs = document.getElementById('miliseconds')
let startBtn = document.getElementById('start')
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let timeInterval; 
let minsVal = 0;
let secsVal = 0;
let minisecsVal = 0;


// 1. Stop function Implementation

stopBtn.onclick = function() {
    clearInterval(timeInterval);

}

// 2.Start Function Implementation

startBtn.onclick = function() {
    clearInterval(timeInterval)
    timeInterval = setInterval(startTimerfun,10);
}

// 3. reset funtion implementation 

resetBtn.onclick = function() {
    clearInterval(timeInterval);
    minisecsVal = "00";
    secsVal = "00";
    minsVal = "00"
    milisecs.innerHTML = minisecsVal;
    secs.innerHTML = secsVal;
    mins.innerHTML = minsVal;
}

// 4.StartTimeInterval Function Logic

function startTimerfun() {
    minisecsVal++;

    

    

    if (minisecsVal<=9) {
        milisecs.innerHTML = "0"+minisecsVal;
    }

    if (minisecsVal>9){
        milisecs.innerHTML = minisecsVal
    }

    if(minisecsVal>99){
        secsVal++
        
        if(secsVal<=9){
            secs.innerHTML = "0"+secsVal
        }

        if (secsVal>9 && secsVal <= 59) {
            secs.innerHTML = secsVal
        }
        minisecsVal = 0
        milisecs.innerHTML = "0"+0
    }

    if(secsVal > 59){
        
        minsVal++;
        if(minsVal<9){
            mins.innerHTML = "0" + minsVal;
        }
        else{
            mins.innerHTML = minsVal;
        }
        secsVal = 0;
        secs.innerHTML = "0" + 0;
    }

  
}


}
