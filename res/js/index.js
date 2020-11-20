

//Todo 
window.setInterval(function(){

    let tDate = new Date()

//------------------------------------------------------------------Day of week----------------------------------------------------
    //Displays the day of the week
    document.getElementById("dayoftheweek").innerHTML = dayoftheweek[tDate.getDay()];


//------------------------------------------------------------------Time----------------------------------------------------
    //Displays the current time in 12 hour time if radio is checked
    if (document.getElementById('12-hour-clock').checked) {
        //console.log("12 hour checked");

        //Handles 1pm to 11:59pm or 13:00 to 23:59
        if (tDate.getHours() > 12){
            var temphours = tDate.getHours() - 12;
            if (temphours < 10){
                document.getElementById("hour").innerHTML = "0" + (tDate.getHours() - 12);
            }else{
                document.getElementById("hour").innerHTML = tDate.getHours() - 12;
            }
        //Handles 12am to 11:59am or 00:00 to 11:59   
        }else if (tDate.getHours() < 12){    
            if (tDate.getHours() < 10){
                //Handles 00:00 and converts to 01:00
                if (tDate.getHours() == 0){
                    document.getElementById("hour").innerHTML = "01";
                }else {
                    document.getElementById("hour").innerHTML = "0" + (tDate.getHours());
                }
            }else{
                document.getElementById("hour").innerHTML = tDate.getHours() - 12;
            }
        } 

       
    //Displays the current time in 24 hour time if radio is checked  
    }else if (document.getElementById('24-hour-clock').checked){
       // console.log("24 hour checked");
       
        if (tDate.getHours() < 10){

            if (tDate.getHours() == 0){
                document.getElementById("hour").innerHTML = "00";
            }else{
                document.getElementById("hour").innerHTML = "0" + tDate.getHours();
            }

        }else{
            document.getElementById("hour").innerHTML = tDate.getHours();
        }
    }
//---------------------------------------------------------Date----------------------------------------------------------------
    if (tDate.getMinutes() < 10){
        document.getElementById("minute").innerHTML = "0" + tDate.getMinutes();
    }else{
        document.getElementById("minute").innerHTML = tDate.getMinutes();
    }

    if (tDate.getSeconds() < 10){
        document.getElementById("second").innerHTML = "0" + tDate.getSeconds();
    }else{
        document.getElementById("second").innerHTML = tDate.getSeconds();
    }

    //Displays the month
    document.getElementById("month").innerHTML = month[tDate.getMonth()];

    //Displays the date
    document.getElementById("day").innerHTML = tDate.getDate() + ",";

    //Displays the year
    document.getElementById("year").innerHTML = tDate.getFullYear();

    //Console info
    console.log(tDate.getDay(), tDate.getHours(), tDate.getMinutes(), tDate.getSeconds())
    console.log(dayoftheweek[tDate.getDay()]);
    console.log(month[tDate.getMonth()]); 


}, 1000);



var dayoftheweek = new Array(7);
dayoftheweek[0] = "Sunday";
dayoftheweek[1] = "Monday";
dayoftheweek[2] = "Tuesday";
dayoftheweek[3] = "Wednesday";
dayoftheweek[4] = "Thursday";
dayoftheweek[5] = "Friday";
dayoftheweek[6] = "Saturday";


var month = new Array(12);
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

