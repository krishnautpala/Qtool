/*
 * Please see the included README.md file for license terms and conditions.
 */


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */



// This file contains your event handlers, the center of your application.
// See app.initEvents() in init-app.js for event initialization.

// function myEventHandler() {
//     "use strict" ;
// // ...event handler code here...
// }


// ...additional event handlers here...
function getCredentials(){
 setUsername();   
 setPassword();    
}


function setUsername() {
    var userName = document.getElementById("username").value;
}

function setPassword() {
    var passWord = document.getElementById("password").value;
}

function getSubmitStatus() {
    var Submit_Status = "Form Submitted";
    document.getElementById("Submit_Form").innerHTML = Submit_Status;
}

function checkCredentials(){
    // check username and password combination
    // if matches, return nothing
    // if not matches, return error message
      var USERPASS_ERR = 2;
   //  var USERPASS_ERR = "Invalid Username/Password";
    document.getElementById("USERPASS_ERR").innerHTML = USERPASS_ERR;
}

function readfile(f) {
    var reader = new FileReader();  // Create a FileReader object
    reader.readAsText(f);           // Read the file
    reader.onload = function() {    // Define an event handler
        var text = reader.result;   // This is the file contents
        document.getElementById("question").innerHTML = text;
        document.getElementById("questions").innerHTML = text;
    };
}

function ClearCheckBoxes(orderform) {  
document.orderform.check1.checked = false;  
document.orderform.check2.checked = false;  
document.orderform.check3.checked = false;  
document.orderform.check4.checked = false;  
document.orderform.check5.checked = false;  
}  
