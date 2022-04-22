// JavaScript Driver Code

function solve(opening_time, duration){
    // Your code goes here
    // s is the given input string
    Number.prototype.toHHMMSS = function () {
    var seconds = Math.floor(this),
        hours = Math.floor(seconds / 3600);
    seconds -= hours*3600;
    var minutes = Math.floor(seconds / 60);
    seconds -= minutes*60;

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}
    
}

// The following snippet reads the input in the required format. 
// Just complete the solve function above. 
const input = parseInt(prompt());
for (let i = 0; i < input; i++) {
    let a = prompt();
    let b = prompt();
    let answer = solve(a, b);
    console.log(answer)
}
