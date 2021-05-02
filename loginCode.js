/* This is the login html page
by Paul Boyer
pauboyer@uat.edu
for CSC102 SP2021Online Wk3-1*/

function checkCreds() {
    //place to store first name
    var firstName = document.getElementById("fName").value;
    //place to store last name
    var lastName = document.getElementById("lName").value;
    //place to store badge ID
    var badgeNumb = document.getElementById("badgeID").value;
    // added full name (space)last name varible
    var fullName = firstName + " " + lastName;

    /* if true: full name greater than 20 characters or and name is only 1 character 
    in length it will populate Invalid full name*/ 
    if (fullName.length > 20 || fullName.length == 1) {
        document.getElementById("loginStatus").innerHTML = "Invalid full name!"
    /* if true: badge number is greater than 999 or less than 1 it will populate 
    Invalid badge number*/
    } else if (badgeNumb > 999 || badgeNumb < 1) {
        document.getElementById("loginStatus").innerHTML = "Invalid badge number!"
    /* if true: if(fullName.length < 21 && fullName.length > 1 && badgeNumb <1000 
        && badgeNumb > 0)*/
    } else {
        alert("Access Granted! Welcome " + fullName);
        location.replace("index.html");
    }
}
