/* This is the login html page
by Paul Boyer
pauboyer@uat.edu
for CSC102 SP2021Online Wk4-2*/

// function created to play sound on space page
function playStation() {
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}
// function to play any sound
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);

    this.play = function () {
        this.sound.play();
    }

    this.stop = function () {
        this.sound.pause();
    }
}

/* this is the start() function for the start button disable when selected and 
re-enabled when stop is selected*/

function start() {
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data..";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;

}

/* this is the stop() function for the stop button disabled when selected and 
re-enabled when start is selected*/
function stop() {
    clearInterval(timer);
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}
// DOM required to get data a row of data from the dataloader to my page
function getData(){
    var loadedData = loadData()
    return loadedData;
}

//DOM required for data manipulation and creates uses for the data
function dataRow(legend, value, units){
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}
/*same function as individual countadown timers made more efficient with 
a for loop with the change order request*/
function countDownV3() {
    var count = 10;

    for (var i = 1; i <= 11; i++) {
        /* if i is less than or equal to 5 countDownTimer will display warning in accordance with
        the Admirals guidence to notify that the timer is less than halway until Blastoff! */
        if (i <= 5) {
            setTimeout(function () {
                document.getElementById("countDownTimer").innerHTML = count;
                count--;
            }, 1000 * i);
            //timer will display Blastoff once timer is complete through countdown           
        } else if (i == 11) {
            setTimeout(function () {
                document.getElementById("countDownTimer").innerHTML = "Blastoff!";
                count--;
            }, 1000 * i);
            /*else if(i > 5 && < i != 11){document.getElementById("countDownTimer").innerHTML 
            = "Warning less than 1/2 way to launch, time left = " + count;
                count--;
            }, 1000 * i)
            } */
            /*when timer reaches 5 seconds and below it will display the warning that the timer is 
            less than halway until blastoff!*/
        } else {
            setTimeout(function () {
                document.getElementById("countDownTimer").innerHTML = "Warning less than 1/2 way to launch, time left = " + count;
                count--;
            }, 1000 * i);
        }

    }

}
//same function as individual countadown timers made more efficient with a for loop
function countDownV2() {
    var count = 10;

    for (var i = 1; i <= 10; i++) {
        setTimeout(function () {
            document.getElementById("countDownTimer").innerHTML = count
            count--;
        }, 1000 * i);
    }
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = "Blastoff!"
        count--;
    }, 11000);
}

/* created a countdown function to count from 
        10 to 1 then Blastoff!!! 
        function countDown was copied and pasted from 
        10 - Blastoff!!! */
function countDown() {
    var count = 10;
    //starting countdown at 10
    document.getElementById("countDownTimer").innerHTML = count;
    count = count - 1;

    //then going to 9
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 1000);

    //then to 8
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 2000);

    //7
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 3000);

    //6
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 4000);

    //5
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 5000);

    //4
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 6000);

    //3
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 7000);

    //2
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 8000);

    //1
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 9000);

    //then blastoff!!
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = "Blastoff!!!";
        count = count - 1;
    }, 10000);
}
// craps function created to play craps on webpage
function playCraps() {
    //created die1 variable
    var die1;
    //created die2 variable
    var die2;
    //created sum variable
    var sum;
    /*die1&2 random number generator created and then multiplied by 6 to give 
    whole numbers between 1-6*/
    die1 = Math.ceil(Math.random() * 6)
    die2 = Math.ceil(Math.random() * 6)
    //sum varible is the addition of both die's results to win, lose, or push
    sum = die1 + die2;
    //added so that the js file and the HTML file can communicate with each other
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    document.getElementById("sumRes").innerHTML = sum;

    //lose sequence 7 or 11
    if (sum == 7 || sum == 11) {
        document.getElementById("crapsResults").innerHTML = "Craps! You lose!";
    }
    //win sequence doubles and even 
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("crapsResults").innerHTML = "DOUBLES, you win!!";
    }
    //any other results besides a 7,11, doubles, or even number
    else {
        document.getElementById("crapsResults").innerHTML = "Push! Please try again.";
    }

}
/*sandbox function created to run as a more efficient timer than creating 
individual timers from 10 -1*/
function runSandbox() {
    //varible count set to 10 to initaite a countdown from 10 to Blastoff!
    var count = 10;
    for (var i = 1; i <= 10; i++) {
        setTimeout(function () {
            document.getElementById("sandboxDisplay").innerHTML = count
            count--;
        }, 1000 * i);
    }
    setTimeout(function () {
        document.getElementById("sandboxDisplay").innerHTML = "Blastoff!"
        count--;
    }, 11000);
}
class InputData {
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digitalSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ
    ) {
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digitalSensor_temp = digitalSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;

    }
}