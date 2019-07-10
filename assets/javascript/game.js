var interVal;
newTimer();

function newTimer() {
var clockRunning = false;
if (!clockRunning)
{
var time = 29;
interVal = setInterval(function(){ $("#counter").text("Time: " + time--); }, 1000);
setTimeout(thirtySeconds, 30000);
}
}



function thirtySeconds() {
newFunc();
}

function newFunc() {
    clearInterval(interVal);
    var count = 0;
    var miss = 0;
    for(var i = 1; i < 8; i++)
    {
    var newVal = $("input[name=rb" + [i] + "]:checked").val();
    if (newVal === "2")
{
    count++;
}
else if (newVal === "1"){
    miss++;
}
else {
    miss++;
}
    }
alert("Count: " + count);
alert("Miss: " + miss);
}

