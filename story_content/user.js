window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  // Get Storyline player
var player = GetPlayer();

// Timer settings
var totalSeconds = 120; // 2 minutes

function updateTimer() {
    // Calculate minutes and seconds
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;

    // Format with leading zeros
    var timeString = 
        (minutes < 10 ? "0" + minutes : minutes) + ":" + 
        (seconds < 10 ? "0" + seconds : seconds);

    // Update the Storyline variable
    player.SetVar("countdownText", timeString);

    // Check if time is up
    if (totalSeconds <= 0) {
        clearInterval(timerInterval);
        return;
    }

    totalSeconds--;
}

// Initialize and start countdown
updateTimer(); // First update immediately
var timerInterval = setInterval(updateTimer, 1000);

}

window.Script2 = function()
{
  var currentDate = new Date();
var formattedDate = currentDate.toLocaleDateString('en-US');
var options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
var formattedTime = currentDate.toLocaleTimeString('en-US', options);
var dateTime = formattedDate + ' at ' + formattedTime;

// Get the current value of "SimBegin1"
var player = GetPlayer();
var currentSimBegin1 = player.GetVar("SimBegin1");

// Append the new date and time to the existing value (if any)
var updatedSimBegin1 = (currentSimBegin1 ? currentSimBegin1 + ' | ' : '') + dateTime;

// Set the updated value back to "SimBegin1"
player.SetVar("SimBegin1", updatedSimBegin1);

}

window.Script3 = function()
{
  // Get the Storyline player
var player = GetPlayer();

// Get each piece of the visible count-up clock
var minutesPlaceholder = player.GetVar("MinutesPlaceholder") || "";
var minutes = player.GetVar("Minutes") || "";
var secondsPlaceholder = player.GetVar("SecondsPlaceholder") || "";
var seconds = player.GetVar("Seconds") || "";

// Build exactly what the learner sees: MM:SS
var clockTime =
  String(minutesPlaceholder) +
  String(minutes) +
  ":" +
  String(secondsPlaceholder) +
  String(seconds);

// Get the current value of "One1"
var player = GetPlayer();
var currentOne1 = player.GetVar("One1");

// Append the new date and time to the existing value (if any)
var updatedOne1 = (currentOne1 ? currentOne1 + ' | ' : '') + clockTime;

// Set the updated value back to "One1"
player.SetVar("One1", updatedOne1);

}

window.Script4 = function()
{
  // Get the Storyline player
var player = GetPlayer();

// Get each piece of the visible count-up clock
var minutesPlaceholder = player.GetVar("MinutesPlaceholder") || "";
var minutes = player.GetVar("Minutes") || "";
var secondsPlaceholder = player.GetVar("SecondsPlaceholder") || "";
var seconds = player.GetVar("Seconds") || "";

// Build exactly what the learner sees: MM:SS
var clockTime =
  String(minutesPlaceholder) +
  String(minutes) +
  ":" +
  String(secondsPlaceholder) +
  String(seconds);

// Get the existing value of Two1
var currentTwo1 = player.GetVar("Two1") || "";

// Add the current simulation-clock time to Two1
var updatedTwo1 =
  (currentTwo1 ? currentTwo1 + "<br>" : "") +
  clockTime;

// Save the updated value
player.SetVar("Two1", updatedTwo1);
}

window.Script5 = function()
{
  var player = GetPlayer();

var minutesPlaceholder = player.GetVar("MinutesPlaceholder") || "";
var minutes = player.GetVar("Minutes") || "";
var secondsPlaceholder = player.GetVar("SecondsPlaceholder") || "";
var seconds = player.GetVar("Seconds") || "";

var clockTime =
  String(minutesPlaceholder) +
  String(minutes) +
  ":" +
  String(secondsPlaceholder) +
  String(seconds);

var compressionsString = player.GetVar("compressionsString") || "";

compressionsString +=
  "Initial compression started at: " +
  clockTime +
  " | ";

player.SetVar("compressionsString", compressionsString);
}

window.Script6 = function()
{
  // Get the Storyline player
var player = GetPlayer();

// Get each piece of the visible count-up clock
var minutesPlaceholder = player.GetVar("MinutesPlaceholder") || "";
var minutes = player.GetVar("Minutes") || "";
var secondsPlaceholder = player.GetVar("SecondsPlaceholder") || "";
var seconds = player.GetVar("Seconds") || "";

// Build exactly what the learner sees: MM:SS
var clockTime =
  String(minutesPlaceholder) +
  String(minutes) +
  ":" +
  String(secondsPlaceholder) +
  String(seconds);

// Get the current value of "Three1"
var player = GetPlayer();
var currentThree1 = player.GetVar("Three1");

// Append the new date and time to the existing value (if any)
var updatedThree1 = (currentThree1 ? currentThree1 + ' | ' : '') + clockTime;

// Set the updated value back to "Three1"
player.SetVar("Three1", updatedThree1);
}

window.Script7 = function()
{
  // Get the Storyline player
var player = GetPlayer();

// Get each piece of the visible count-up clock
var minutesPlaceholder = player.GetVar("MinutesPlaceholder") || "";
var minutes = player.GetVar("Minutes") || "";
var secondsPlaceholder = player.GetVar("SecondsPlaceholder") || "";
var seconds = player.GetVar("Seconds") || "";

// Build exactly what the learner sees: MM:SS
var clockTime =
  String(minutesPlaceholder) +
  String(minutes) +
  ":" +
  String(secondsPlaceholder) +
  String(seconds);

// Get the current value of "Four1"
var player = GetPlayer();
var currentFour1 = player.GetVar("Four1");

// Append the new date and time to the existing value (if any)
var updatedFour1 = (currentFour1 ? currentFour1 + ' | ' : '') + clockTime;

// Set the updated value back to "Four1"
player.SetVar("Four1", updatedFour1);
}

window.Script8 = function()
{
  // Get the Storyline player
var player = GetPlayer();

// Get each piece of the visible count-up clock
var minutesPlaceholder = player.GetVar("MinutesPlaceholder") || "";
var minutes = player.GetVar("Minutes") || "";
var secondsPlaceholder = player.GetVar("SecondsPlaceholder") || "";
var seconds = player.GetVar("Seconds") || "";

// Build exactly what the learner sees: MM:SS
var clockTime =
  String(minutesPlaceholder) +
  String(minutes) +
  ":" +
  String(secondsPlaceholder) +
  String(seconds);

// Get the current value of "Five1"
var player = GetPlayer();
var currentFive1 = player.GetVar("Five1");

// Append the new date and time to the existing value (if any)
var updatedFive1 = (currentFive1 ? currentFive1 + ' | ' : '') + clockTime;

// Set the updated value back to "Five1"
player.SetVar("Five1", updatedFive1);
}

window.Script9 = function()
{
  var player = GetPlayer();

// Only create one "Compressions off" entry until compressions start again
if (player.GetVar("CompressionOffLogged") === false) {

    var minuteTens = player.GetVar("MinutesPlaceholder") || "";
    var minuteOnes = player.GetVar("Minutes") || "";
    var secondTens = player.GetVar("SecondsPlaceholder") || "";
    var secondOnes = player.GetVar("Seconds") || "";

    var clockTime =
        String(minuteTens) +
        String(minuteOnes) +
        ":" +
        String(secondTens) +
        String(secondOnes);

    var compressionsString = player.GetVar("compressionsString") || "";

    compressionsString +=
        (compressionsString ? "<br>" : "") +
        '<font color="#E57373"><b>Compressions off:</b></font> ' +
        clockTime +
        " | ";

    player.SetVar("compressionsString", compressionsString);

    // Prevent any repeat off entry while compressions remain off
    player.SetVar("CompressionOffLogged", true);
}
}

window.Script10 = function()
{
  // Get the Storyline player
var player = GetPlayer();

// Get each piece of the visible count-up clock
var minutesPlaceholder = player.GetVar("MinutesPlaceholder") || "";
var minutes = player.GetVar("Minutes") || "";
var secondsPlaceholder = player.GetVar("SecondsPlaceholder") || "";
var seconds = player.GetVar("Seconds") || "";

// Build exactly what the learner sees: MM:SS
var clockTime =
  String(minutesPlaceholder) +
  String(minutes) +
  ":" +
  String(secondsPlaceholder) +
  String(seconds);
  
// Get the current value of "Six1"
var player = GetPlayer();
var currentSix1 = player.GetVar("Six1");

// Append the new date and time to the existing value (if any)
var updatedSix1 = (currentSix1 ? currentSix1 + ' <br> ' : '') + clockTime;

// Set the updated value back to "Six1"
player.SetVar("Six1", updatedSix1);
}

window.Script11 = function()
{
  // Get the Storyline player
var player = GetPlayer();

// Get each piece of the visible count-up clock
var minutesPlaceholder = player.GetVar("MinutesPlaceholder") || "";
var minutes = player.GetVar("Minutes") || "";
var secondsPlaceholder = player.GetVar("SecondsPlaceholder") || "";
var seconds = player.GetVar("Seconds") || "";

// Build exactly what the learner sees: MM:SS
var clockTime =
  String(minutesPlaceholder) +
  String(minutes) +
  ":" +
  String(secondsPlaceholder) +
  String(seconds);

// Get the current value of "Seven1"
var player = GetPlayer();
var currentSeven1 = player.GetVar("Seven1");

// Append the new date and time to the existing value (if any)
var updatedSeven1 = (currentSeven1 ? currentSeven1 + ' <br> ' : '') + clockTime;

// Set the updated value back to "Seven1"
player.SetVar("Seven1", updatedSeven1);
}

window.Script12 = function()
{
  // Get the Storyline player
var player = GetPlayer();

// Get each piece of the visible count-up clock
var minutesPlaceholder = player.GetVar("MinutesPlaceholder") || "";
var minutes = player.GetVar("Minutes") || "";
var secondsPlaceholder = player.GetVar("SecondsPlaceholder") || "";
var seconds = player.GetVar("Seconds") || "";

// Build exactly what the learner sees: MM:SS
var clockTime =
  String(minutesPlaceholder) +
  String(minutes) +
  ":" +
  String(secondsPlaceholder) +
  String(seconds);

// Get the current value of "Eight1"
var player = GetPlayer();
var currentEight1 = player.GetVar("Eight1");

// Append the new date and time to the existing value (if any)
var updatedEight1 = (currentEight1 ? currentEight1 + ' <br> ' : '') + clockTime;

// Set the updated value back to "Eight1"
player.SetVar("Eight1", updatedEight1);
}

window.Script13 = function()
{
   // when user click the toggle button
var player = GetPlayer();

var minuteTens = player.GetVar("MinutesPlaceholder");
var minuteOnes = player.GetVar("Minutes");
var secondTens = player.GetVar("SecondsPlaceholder");
var secondOnes = player.GetVar("Seconds");

var clockTime =
  String(minuteTens) +
  String(minuteOnes) +
  ":" +
  String(secondTens) +
  String(secondOnes);

// Get the current value of "compressionsOn" and "compressionsString" "compressionsString" starts as an empty string btw, you can name it whatever
var player = GetPlayer();
var compressionsOn = player.GetVar("compressionsON");
var compressionsString= player.GetVar("compressionsString");
console.log(compressionsOn)

// Append the new date and time to the existing compressionsString
if (compressionsOn == true) {
  // Keep “Compressions on” on the same line as the preceding “off.”
  compressionsString +=
    '<font color="#7CFF7C"><b>Compressions on:</b></font> ' +
    clockTime +
    " | ";
} else {
  // Begin each “Compressions off” event on a new line.
  compressionsString +=
    (compressionsString ? "<br>" : "") +
    '<font color="#E57373"><b>Compressions off:</b></font> ' +
    clockTime +
    " | ";
}

// Set the updated value back to "compressionsString"
player.SetVar("compressionsString", compressionsString );
}

window.Script14 = function()
{
  // Get the Storyline player
var player = GetPlayer();

// Get each visible piece of the count-up clock
var minutesPlaceholder = player.GetVar("MinutesPlaceholder") || "";
var minutes = player.GetVar("Minutes") || "";
var secondsPlaceholder = player.GetVar("SecondsPlaceholder") || "";
var seconds = player.GetVar("Seconds") || "";

// Build the time exactly as displayed: MM:SS
var clockTime =
    String(minutesPlaceholder) +
    String(minutes) +
    ":" +
    String(secondsPlaceholder) +
    String(seconds);

// Get the current SimBegin3 value
var currentSimBegin3 = player.GetVar("SimBegin3") || "";

// Add this time to the existing value
var updatedSimBegin3 = currentSimBegin3
    ? currentSimBegin3 + " | " + clockTime
    : clockTime;

// Save the result
player.SetVar("SimBegin3", updatedSimBegin3);
}

window.Script15 = function()
{
  // Get the Storyline player
var player = GetPlayer();

// Get each piece of the visible count-up clock
var minutesPlaceholder = player.GetVar("MinutesPlaceholder") || "";
var minutes = player.GetVar("Minutes") || "";
var secondsPlaceholder = player.GetVar("SecondsPlaceholder") || "";
var seconds = player.GetVar("Seconds") || "";

// Build exactly what the learner sees: MM:SS
var clockTime =
  String(minutesPlaceholder) +
  String(minutes) +
  ":" +
  String(secondsPlaceholder) +
  String(seconds);

// Get the current value of "One3"
var player = GetPlayer();
var currentOne3 = player.GetVar("One3");

// Append the new date and time to the existing value (if any)
var updatedOne3 = (currentOne3 ? currentOne3 + ' | ' : '') + clockTime;

// Set the updated value back to "One3"
player.SetVar("One3", updatedOne3);
}

window.Script16 = function()
{
  // Get the Storyline player
var player = GetPlayer();

// Get each piece of the visible count-up clock
var minutesPlaceholder = player.GetVar("MinutesPlaceholder") || "";
var minutes = player.GetVar("Minutes") || "";
var secondsPlaceholder = player.GetVar("SecondsPlaceholder") || "";
var seconds = player.GetVar("Seconds") || "";

// Build exactly what the learner sees: MM:SS
var clockTime =
  String(minutesPlaceholder) +
  String(minutes) +
  ":" +
  String(secondsPlaceholder) +
  String(seconds);

// Get the current value of "Two3"
var player = GetPlayer();
var currentTwo3 = player.GetVar("Two3");

// Append the new date and time to the existing value (if any)
var updatedTwo3 = (currentTwo3 ? currentTwo3 + ' | ' : '') + clockTime;

// Set the updated value back to "Two3"
player.SetVar("Two3", updatedTwo3);
}

window.Script17 = function()
{
  // Get the Storyline player
var player = GetPlayer();

// Get each piece of the visible count-up clock
var minutesPlaceholder = player.GetVar("MinutesPlaceholder") || "";
var minutes = player.GetVar("Minutes") || "";
var secondsPlaceholder = player.GetVar("SecondsPlaceholder") || "";
var seconds = player.GetVar("Seconds") || "";

// Build exactly what the learner sees: MM:SS
var clockTime =
  String(minutesPlaceholder) +
  String(minutes) +
  ":" +
  String(secondsPlaceholder) +
  String(seconds);

// Get the current value of "Three3"
var player = GetPlayer();
var currentThree3 = player.GetVar("Three3");

// Append the new date and time to the existing value (if any)
var updatedThree3 = (currentThree3 ? currentThree3 + ' | ' : '') + clockTime;

// Set the updated value back to "Three3"
player.SetVar("Three3", updatedThree3);
}

window.Script18 = function()
{
  // Get the Storyline player
var player = GetPlayer();

// Get each piece of the visible count-up clock
var minutesPlaceholder = player.GetVar("MinutesPlaceholder") || "";
var minutes = player.GetVar("Minutes") || "";
var secondsPlaceholder = player.GetVar("SecondsPlaceholder") || "";
var seconds = player.GetVar("Seconds") || "";

// Build exactly what the learner sees: MM:SS
var clockTime =
  String(minutesPlaceholder) +
  String(minutes) +
  ":" +
  String(secondsPlaceholder) +
  String(seconds);

// Get the current value of "Four3"
var player = GetPlayer();
var currentFour3 = player.GetVar("Four3");

// Append the new date and time to the existing value (if any)
var updatedFour3 = (currentFour3 ? currentFour3 + ' | ' : '') + clockTime;

// Set the updated value back to "Four3"
player.SetVar("Four3", updatedFour3);
}

window.Script19 = function()
{
  // Get the Storyline player
var player = GetPlayer();

// Get each piece of the visible count-up clock
var minutesPlaceholder = player.GetVar("MinutesPlaceholder") || "";
var minutes = player.GetVar("Minutes") || "";
var secondsPlaceholder = player.GetVar("SecondsPlaceholder") || "";
var seconds = player.GetVar("Seconds") || "";

// Build exactly what the learner sees: MM:SS
var clockTime =
  String(minutesPlaceholder) +
  String(minutes) +
  ":" +
  String(secondsPlaceholder) +
  String(seconds);

// Get the current value of "Five3"
var player = GetPlayer();
var currentFive3 = player.GetVar("Five3");

// Append the new date and time to the existing value (if any)
var updatedFive3 = (currentFive3 ? currentFive3 + ' | ' : '') + clockTime;

// Set the updated value back to "Five3"
player.SetVar("Five3", updatedFive3);
}

window.Script20 = function()
{
  // Get the Storyline player
var player = GetPlayer();

// Get each piece of the visible count-up clock
var minutesPlaceholder = player.GetVar("MinutesPlaceholder") || "";
var minutes = player.GetVar("Minutes") || "";
var secondsPlaceholder = player.GetVar("SecondsPlaceholder") || "";
var seconds = player.GetVar("Seconds") || "";

// Build the exact visible time: MM:SS
var clockTime =
    String(minutesPlaceholder) +
    String(minutes) +
    ":" +
    String(secondsPlaceholder) +
    String(seconds);

// Save the debrief-click time
player.SetVar("Debrief", clockTime);
}

window.Script21 = function()
{
  (function () {
    var player = GetPlayer();

    // Get compression log and convert Storyline HTML to readable plain text
    var log = String(player.GetVar("compressionsString") || "");

    log = log
        .replace(/<br\s*\/?>/gi, "\n")
        .replace(/<[^>]*>/g, "")
        .replace(/&nbsp;/gi, " ");

    // Read: "Compressions off: 00:09" and "Compressions on: 00:11"
    var eventPattern = /Compressions\s+(off|on):\s*(\d{1,2}):(\d{2})/gi;

    var match;
    var offStartedAt = null;
    var pauses = [];

    function toSeconds(minutes, seconds) {
        return (Number(minutes) * 60) + Number(seconds);
    }

    function formatTime(totalSeconds) {
        totalSeconds = Math.max(0, Math.round(totalSeconds));

        var minutes = Math.floor(totalSeconds / 60);
        var seconds = totalSeconds % 60;

        return String(minutes).padStart(2, "0") +
            ":" +
            String(seconds).padStart(2, "0");
    }

    while ((match = eventPattern.exec(log)) !== null) {
        var eventType = match[1].toLowerCase();
        var eventSeconds = toSeconds(match[2], match[3]);

        if (eventType === "off" && offStartedAt === null) {
            offStartedAt = eventSeconds;
        } else if (eventType === "on" && offStartedAt !== null) {
            var duration = eventSeconds - offStartedAt;

            if (duration >= 0) {
                pauses.push({
                    start: offStartedAt,
                    end: eventSeconds,
                    duration: duration
                });
            }

            offStartedAt = null;
        }
    }

    var totalSeconds = 0;

    pauses.forEach(function (pause) {
        totalSeconds += pause.duration;
    });

    var count = pauses.length;
    var averageSeconds = count > 0 ? totalSeconds / count : 0;

    var details = count > 0
        ? pauses.map(function (pause, index) {
            return "Interruption " + (index + 1) + ": " +
                formatTime(pause.start) + "–" +
                formatTime(pause.end) + " = " +
                formatTime(pause.duration);
        }).join("<br>")
        : "No completed compression interruptions recorded.";

    player.SetVar("CompressionPauseDetails", details);
    player.SetVar("CompressionPauseTotal", formatTime(totalSeconds));
    player.SetVar("CompressionPauseAverage", formatTime(averageSeconds));
    player.SetVar("CompressionPauseCount", String(count));
})();
}

window.Script22 = function()
{
  // when user click the toggle button
var player = GetPlayer();

var minuteTens = player.GetVar("MinutesPlaceholder");
var minuteOnes = player.GetVar("Minutes");
var secondTens = player.GetVar("SecondsPlaceholder");
var secondOnes = player.GetVar("Seconds");

var clockTime =
  String(minuteTens) +
  String(minuteOnes) +
  ":" +
  String(secondTens) +
  String(secondOnes);

// Get the current value of "compressionsOn" and "compressionsString" "compressionsString" starts as an empty string btw, you can name it whatever
var player = GetPlayer();
var compressionsOn = player.GetVar("compressionsON");
var compressionsString= player.GetVar("compressionsString");
console.log(compressionsOn)

// Append the new date and time to the existing compressionsString
if (compressionsOn == false) {
  // Keep “Compressions on” on the same line as the preceding “off.”
  compressionsString +=
    '<font color="#7CFF7C"><b>Compressions on:</b></font> ' +
    clockTime +
    " | ";
} else {
  // Begin each “Compressions off” event on a new line.
  compressionsString +=
    (compressionsString ? "<br>" : "") +
    '<font color="#E57373"><b>Compressions off:</b></font> ' +
    clockTime +
    " | ";
}

// Set the updated value back to "compressionsString"
player.SetVar("compressionsString", compressionsString );
}

window.Script23 = function()
{
  // Get the Storyline player
var player = GetPlayer();

// Get each visible part of the count-up clock
var minutesPlaceholder = player.GetVar("MinutesPlaceholder") || "";
var minutes = player.GetVar("Minutes") || "";
var secondsPlaceholder = player.GetVar("SecondsPlaceholder") || "";
var seconds = player.GetVar("Seconds") || "";

// Build the time exactly as displayed to the learner: MM:SS
var clockTime =
    String(minutesPlaceholder) +
    String(minutes) +
    ":" +
    String(secondsPlaceholder) +
    String(seconds);

// Get the existing SimBegin2 value
var currentSimBegin2 = player.GetVar("SimBegin2") || "";

// Add the time to the existing value, separated by a vertical bar
var updatedSimBegin2 = currentSimBegin2
    ? currentSimBegin2 + " | " + clockTime
    : clockTime;

// Save the result
player.SetVar("SimBegin2", updatedSimBegin2);
}

window.Script24 = function()
{
  var player = GetPlayer();

// Only create one "Compressions off" entry until compressions start again
if (player.GetVar("CompressionOffLogged") === false) {

    var minuteTens = player.GetVar("MinutesPlaceholder") || "";
    var minuteOnes = player.GetVar("Minutes") || "";
    var secondTens = player.GetVar("SecondsPlaceholder") || "";
    var secondOnes = player.GetVar("Seconds") || "";

    var clockTime =
        String(minuteTens) +
        String(minuteOnes) +
        ":" +
        String(secondTens) +
        String(secondOnes);

    var compressionsString = player.GetVar("compressionsString") || "";

    compressionsString +=
        (compressionsString ? "<br>" : "") +
        '<font color="#E57373"><b>Compressions off:</b></font> ' +
        clockTime +
        " | ";

    player.SetVar("compressionsString", compressionsString);

    // Prevent any repeat off entry while compressions remain off
    player.SetVar("CompressionOffLogged", true);
}
}

window.Script25 = function()
{
  // Get the Storyline player
var player = GetPlayer();

// Get each piece of the visible count-up clock
var minutesPlaceholder = player.GetVar("MinutesPlaceholder") || "";
var minutes = player.GetVar("Minutes") || "";
var secondsPlaceholder = player.GetVar("SecondsPlaceholder") || "";
var seconds = player.GetVar("Seconds") || "";

// Build exactly what the learner sees: MM:SS
var clockTime =
  String(minutesPlaceholder) +
  String(minutes) +
  ":" +
  String(secondsPlaceholder) +
  String(seconds);

// Get the current value of "One2"
var player = GetPlayer();
var currentOne2 = player.GetVar("One2");

// Append the new date and time to the existing value (if any)
var updatedOne2 = (currentOne2 ? currentOne2 + ' | ' : '') + clockTime;

// Set the updated value back to "One2"
player.SetVar("One2", updatedOne2);
}

window.Script26 = function()
{
  // Get the Storyline player
var player = GetPlayer();

// Get each piece of the visible count-up clock
var minutesPlaceholder = player.GetVar("MinutesPlaceholder") || "";
var minutes = player.GetVar("Minutes") || "";
var secondsPlaceholder = player.GetVar("SecondsPlaceholder") || "";
var seconds = player.GetVar("Seconds") || "";

// Build exactly what the learner sees: MM:SS
var clockTime =
  String(minutesPlaceholder) +
  String(minutes) +
  ":" +
  String(secondsPlaceholder) +
  String(seconds);

// Get the current value of "Two2"
var player = GetPlayer();
var currentTwo2 = player.GetVar("Two2");

// Append the new date and time to the existing value (if any)
var updatedTwo2 = (currentTwo2 ? currentTwo2 + ' | ' : '') + clockTime;

// Set the updated value back to "Two2"
player.SetVar("Two2", updatedTwo2);
}

window.Script27 = function()
{
  // Get the Storyline player
var player = GetPlayer();

// Get each piece of the visible count-up clock
var minutesPlaceholder = player.GetVar("MinutesPlaceholder") || "";
var minutes = player.GetVar("Minutes") || "";
var secondsPlaceholder = player.GetVar("SecondsPlaceholder") || "";
var seconds = player.GetVar("Seconds") || "";

// Build exactly what the learner sees: MM:SS
var clockTime =
  String(minutesPlaceholder) +
  String(minutes) +
  ":" +
  String(secondsPlaceholder) +
  String(seconds);

// Get the current value of "Three2"
var player = GetPlayer();
var currentThree2 = player.GetVar("Three2");

// Append the new date and time to the existing value (if any)
var updatedThree2 = (currentThree2 ? currentThree2 + ' | ' : '') + clockTime;

// Set the updated value back to "Three2"
player.SetVar("Three2", updatedThree2);
}

window.Script28 = function()
{
  // Get the Storyline player
var player = GetPlayer();

// Get each piece of the visible count-up clock
var minutesPlaceholder = player.GetVar("MinutesPlaceholder") || "";
var minutes = player.GetVar("Minutes") || "";
var secondsPlaceholder = player.GetVar("SecondsPlaceholder") || "";
var seconds = player.GetVar("Seconds") || "";

// Build exactly what the learner sees: MM:SS
var clockTime =
  String(minutesPlaceholder) +
  String(minutes) +
  ":" +
  String(secondsPlaceholder) +
  String(seconds);

// Get the current value of "Four2"
var player = GetPlayer();
var currentFour2 = player.GetVar("Four2");

// Append the new date and time to the existing value (if any)
var updatedFour2 = (currentFour2 ? currentFour2 + ' | ' : '') + clockTime;

// Set the updated value back to "Four2"
player.SetVar("Four2", updatedFour2);
}

window.Script29 = function()
{
  // Get the Storyline player
var player = GetPlayer();

// Get each piece of the visible count-up clock
var minutesPlaceholder = player.GetVar("MinutesPlaceholder") || "";
var minutes = player.GetVar("Minutes") || "";
var secondsPlaceholder = player.GetVar("SecondsPlaceholder") || "";
var seconds = player.GetVar("Seconds") || "";

// Build exactly what the learner sees: MM:SS
var clockTime =
  String(minutesPlaceholder) +
  String(minutes) +
  ":" +
  String(secondsPlaceholder) +
  String(seconds);

// Get the current value of "Five2"
var player = GetPlayer();
var currentFive2 = player.GetVar("Five2");

// Append the new date and time to the existing value (if any)
var updatedFive2 = (currentFive2 ? currentFive2 + ' | ' : '') + clockTime;

// Set the updated value back to "Five2"
player.SetVar("Five2", updatedFive2);
}

window.Script30 = function()
{
  // Get the Storyline player
var player = GetPlayer();

// Get each piece of the visible count-up clock
var minutesPlaceholder = player.GetVar("MinutesPlaceholder") || "";
var minutes = player.GetVar("Minutes") || "";
var secondsPlaceholder = player.GetVar("SecondsPlaceholder") || "";
var seconds = player.GetVar("Seconds") || "";

// Build exactly what the learner sees: MM:SS
var clockTime =
  String(minutesPlaceholder) +
  String(minutes) +
  ":" +
  String(secondsPlaceholder) +
  String(seconds);

// Get the current value of "Six2"
var player = GetPlayer();
var currentSix2 = player.GetVar("Six2");

// Append the new date and time to the existing value (if any)
var updatedSix2 = (currentSix2 ? currentSix2 + ' | ' : '') + clockTime;

// Set the updated value back to "Six2"
player.SetVar("Six2", updatedSix2);
}

window.Script31 = function()
{
  var currentDate = new Date();
var formattedDate = currentDate.toLocaleDateString('en-US');
var options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
var formattedTime = currentDate.toLocaleTimeString('en-US', options);
var dateTime = formattedDate + ' at ' + formattedTime;

// Get the current value of "s2GoToNextStage"
var player = GetPlayer();
var currents2GoToNextStage = player.GetVar("s2GoToNextStage");

// Append the new date and time to the existing value (if any)
var updateds2GoToNextStage = (currents2GoToNextStage ? currents2GoToNextStage + ' | ' : '') + dateTime;

// Set the updated value back to "s2GoToNextStage"
player.SetVar("s2GoToNextStage", updateds2GoToNextStage);

}

window.Script32 = function()
{
  // when user click the toggle button
var player = GetPlayer();

var minuteTens = player.GetVar("MinutesPlaceholder");
var minuteOnes = player.GetVar("Minutes");
var secondTens = player.GetVar("SecondsPlaceholder");
var secondOnes = player.GetVar("Seconds");

var clockTime =
  String(minuteTens) +
  String(minuteOnes) +
  ":" +
  String(secondTens) +
  String(secondOnes);

// Get the current value of "compressionsOn" and "compressionsString" "compressionsString" starts as an empty string btw, you can name it whatever
var player = GetPlayer();
var compressionsOn = player.GetVar("compressionsON");
var compressionsString= player.GetVar("compressionsString");
console.log(compressionsOn)

// Append the new date and time to the existing compressionsString
if (compressionsOn == true) {
  // Keep “Compressions on” on the same line as the preceding “off.”
  compressionsString +=
    '<font color="#7CFF7C"><b>Compressions on:</b></font> ' +
    clockTime +
    " | ";
} else {
  // Begin each “Compressions off” event on a new line.
  compressionsString +=
    (compressionsString ? "<br>" : "") +
    '<font color="#E57373"><b>Compressions off:</b></font> ' +
    clockTime +
    " | ";
}

// Set the updated value back to "compressionsString"
player.SetVar("compressionsString", compressionsString );
}

window.Script33 = function()
{
  (function () {
    var player = GetPlayer();

    // Stop an older timer if the learner revisits this slide.
    if (window.storylineCountdownTimer) {
        clearInterval(window.storylineCountdownTimer);
        window.storylineCountdownTimer = null;
    }

    // Always start this visit at 10:00.
    var secondsRemaining = 600;

    player.SetVar("CountdownSeconds", secondsRemaining);
    player.SetVar("CountdownDisplay", "10:00");
    player.SetVar("CountdownComplete", false);

    function updateDisplay() {
        var minutes = Math.floor(secondsRemaining / 60);
        var seconds = secondsRemaining % 60;

        var clockTime =
            String(minutes).padStart(2, "0") +
            ":" +
            String(seconds).padStart(2, "0");

        player.SetVar("CountdownSeconds", secondsRemaining);
        player.SetVar("CountdownDisplay", clockTime);
    }

    window.storylineCountdownTimer = setInterval(function () {
        secondsRemaining -= 1;
        updateDisplay();

        if (secondsRemaining <= 0) {
            clearInterval(window.storylineCountdownTimer);
            window.storylineCountdownTimer = null;

            player.SetVar("CountdownSeconds", 0);
            player.SetVar("CountdownDisplay", "00:00");
            player.SetVar("CountdownComplete", true);
        }
    }, 1000);
})();
}

window.Script34 = function()
{
  (async function () {
    var player = GetPlayer();

    // Pull Storyline variables
    var simBegin1 = player.GetVar("SimBegin1") || "";
    var one1 = player.GetVar("One1") || "";
    var two1 = player.GetVar("Two1") || "";
    var three1 = player.GetVar("Three1") || "";
    var four1 = player.GetVar("Four1") || "";
    var five1 = player.GetVar("Five1") || "";
    var six1 = player.GetVar("Six1") || "";

    var simBegin2 = player.GetVar("SimBegin2") || "";
    var one2 = player.GetVar("One2") || "";
    var two2 = player.GetVar("Two2") || "";
    var three2 = player.GetVar("Three2") || "";
    var four2 = player.GetVar("Four2") || "";
    var five2 = player.GetVar("Five2") || "";
    var six2 = player.GetVar("Six2") || "";

    var simBegin3 = player.GetVar("SimBegin3") || "";
    var one3 = player.GetVar("One3") || "";
    var two3 = player.GetVar("Two3") || "";
    var three3 = player.GetVar("Three3") || "";
    var four3 = player.GetVar("Four3") || "";
    var five3 = player.GetVar("Five3") || "";

    var compressions = player.GetVar("compressionsString") || "";
    var debrief = player.GetVar("Debrief") || "";

    // Confirm that jsPDF is available in story.html
    if (!window.jspdf || !window.jspdf.jsPDF) {
        alert("The PDF generator is not available. Please contact the course administrator.");
        return;
    }

    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "letter"
    });

    var pageWidth = doc.internal.pageSize.getWidth();
    var pageHeight = doc.internal.pageSize.getHeight();

    // Page layout settings
    var margin = 12;
    var headerHeight = 15;
    var footerHeight = 10;
    var contentTop = 24;
    var contentBottom = pageHeight - footerHeight - 5;

    var cardGap = 6;
    var cardWidth = (pageWidth - (margin * 2) - (cardGap * 2)) / 3;

    var titleColor = [45, 45, 45];
    var stageOneColor = [57, 91, 116];
    var stageTwoColor = [75, 117, 162];
    var stageThreeColor = [73, 111, 89];
    var borderColor = [190, 190, 190];
    var lightFill = [248, 248, 248];

    function cleanText(value) {
        return String(value || "")
            .replace(/<br\s*\/?>/gi, "\n")
            .replace(/<\/p>/gi, "\n")
            .replace(/<[^>]*>/g, "")
            .replace(/&nbsp;/gi, " ")
            .replace(/&amp;/gi, "&")
            .replace(/[ \t]+\n/g, "\n")
            .replace(/\n{3,}/g, "\n\n")
            .trim();
    }

    function normalizeCompressionLog(value) {
        var text = cleanText(value);

        if (!text) {
            return "No compression timestamps recorded.";
        }

        // Converts separators from Storyline variables into readable PDF lines.
        return text
            .replace(/\s*\|\s*/g, "\n")
            .replace(/\s*(Compressions off:)/gi, "\n$1")
            .replace(/\s*(Compressions on:)/gi, "\n$1")
            .replace(/\n{2,}/g, "\n")
            .trim();
    }

    function addHeader() {
        doc.setFillColor(titleColor[0], titleColor[1], titleColor[2]);
        doc.rect(0, 0, pageWidth, headerHeight, "F");

        doc.setFont("helvetica", "bold");
        doc.setFontSize(16);
        doc.setTextColor(255, 255, 255);
        doc.text("Simulation Summary / Debrief Report", margin, 10);
    }

    function addFooter(pageNumber, totalPages) {
        doc.setDrawColor(210, 210, 210);
        doc.line(margin, pageHeight - footerHeight, pageWidth - margin, pageHeight - footerHeight);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(8);
        doc.setTextColor(105, 105, 105);

        doc.text(
            "Simulation debrief report • Page " + pageNumber + " of " + totalPages,
            margin,
            pageHeight - 4
        );
    }

    function calculateStageHeight(entries, width) {
        var padding = 5;
        var rowGap = 2.5;
        var headerSpace = 11;
        var height = padding + headerSpace;

        entries.forEach(function (entry) {
            var label = entry[0];
            var value = cleanText(entry[1]);

            if (!value) {
                return;
            }

            doc.setFont("helvetica", "bold");
            doc.setFontSize(8.5);
            var labelWidth = doc.getTextWidth(label + " ");

            doc.setFont("helvetica", "normal");
            doc.setFontSize(8.5);

            var valueWidth = width - (padding * 2) - labelWidth;
            var valueLines = doc.splitTextToSize(value, Math.max(valueWidth, 25));

            height += Math.max(5, valueLines.length * 4.2) + rowGap;
        });

        return height + padding;
    }

    function drawStageCard(title, entries, x, y, width, height, accentColor) {
        var padding = 5;
        var currentY = y + 8;

        // Card background and border
        doc.setFillColor(lightFill[0], lightFill[1], lightFill[2]);
        doc.roundedRect(x, y, width, height, 2, 2, "F");

        doc.setDrawColor(borderColor[0], borderColor[1], borderColor[2]);
        doc.setLineWidth(0.35);
        doc.roundedRect(x, y, width, height, 2, 2, "S");

        // Stage title band
        doc.setFillColor(accentColor[0], accentColor[1], accentColor[2]);
        doc.roundedRect(x, y, width, 10, 2, 2, "F");
        doc.rect(x, y + 7, width, 3, "F");

        doc.setFont("helvetica", "bold");
        doc.setFontSize(11);
        doc.setTextColor(255, 255, 255);
        doc.text(title, x + padding, y + 6.7);

        currentY = y + 16;

        entries.forEach(function (entry) {
            var label = entry[0];
            var value = cleanText(entry[1]);

            if (!value) {
                return;
            }

            doc.setFont("helvetica", "bold");
            doc.setFontSize(8.5);
            doc.setTextColor(55, 55, 55);
            doc.text(label, x + padding, currentY);

            var labelWidth = doc.getTextWidth(label + " ");
            var valueX = x + padding + labelWidth;
            var valueWidth = width - (padding * 2) - labelWidth;

            doc.setFont("helvetica", "normal");
            doc.setTextColor(0, 0, 0);

            var valueLines = doc.splitTextToSize(value, Math.max(valueWidth, 25));
            doc.text(valueLines, valueX, currentY);

            currentY += Math.max(5, valueLines.length * 4.2) + 2.5;
        });
    }

    function ensureSpace(requiredHeight, currentY) {
        if (currentY + requiredHeight > contentBottom) {
            doc.addPage();
            addHeader();
            return contentTop;
        }
        return currentY;
    }

    function drawCompressionLog(startY) {
        var logText = normalizeCompressionLog(compressions);
        var x = margin;
        var width = pageWidth - (margin * 2);
        var padding = 6;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(9.5);
        var lines = doc.splitTextToSize(logText, width - (padding * 2));

        var titleHeight = 12;
        var lineHeight = 5;
        var neededHeight = titleHeight + (lines.length * lineHeight) + (padding * 2);

        startY = ensureSpace(Math.min(neededHeight, 45), startY);

        // If log is short, use a single bordered box.
        if (neededHeight <= contentBottom - startY) {
            doc.setFillColor(252, 252, 252);
            doc.roundedRect(x, startY, width, neededHeight, 2, 2, "F");

            doc.setDrawColor(borderColor[0], borderColor[1], borderColor[2]);
            doc.roundedRect(x, startY, width, neededHeight, 2, 2, "S");

            doc.setFillColor(titleColor[0], titleColor[1], titleColor[2]);
            doc.roundedRect(x, startY, width, titleHeight, 2, 2, "F");
            doc.rect(x, startY + 9, width, 3, "F");

            doc.setFont("helvetica", "bold");
            doc.setFontSize(11);
            doc.setTextColor(255, 255, 255);
            doc.text("Compressions Log", x + padding, startY + 7.5);

            doc.setFont("helvetica", "normal");
            doc.setFontSize(9.5);
            doc.setTextColor(0, 0, 0);
            doc.text(lines, x + padding, startY + titleHeight + 6);

            return;
        }

        // Long logs continue onto additional pages.
        var lineIndex = 0;
        var firstPage = true;

        while (lineIndex < lines.length) {
            if (!firstPage) {
                doc.addPage();
                addHeader();
                startY = contentTop;
            }

            var availableHeight = contentBottom - startY;
            var boxHeight = availableHeight;
            var availableLines = Math.floor((boxHeight - titleHeight - (padding * 2)) / lineHeight);

            if (availableLines < 1) {
                doc.addPage();
                addHeader();
                startY = contentTop;
                availableHeight = contentBottom - startY;
                boxHeight = availableHeight;
                availableLines = Math.floor((boxHeight - titleHeight - (padding * 2)) / lineHeight);
            }

            var chunk = lines.slice(lineIndex, lineIndex + availableLines);
            var actualHeight = titleHeight + (chunk.length * lineHeight) + (padding * 2);

            doc.setFillColor(252, 252, 252);
            doc.roundedRect(x, startY, width, actualHeight, 2, 2, "F");

            doc.setDrawColor(borderColor[0], borderColor[1], borderColor[2]);
            doc.roundedRect(x, startY, width, actualHeight, 2, 2, "S");

            doc.setFillColor(titleColor[0], titleColor[1], titleColor[2]);
            doc.roundedRect(x, startY, width, titleHeight, 2, 2, "F");
            doc.rect(x, startY + 9, width, 3, "F");

            doc.setFont("helvetica", "bold");
            doc.setFontSize(11);
            doc.setTextColor(255, 255, 255);

            doc.text(
                firstPage ? "Compressions Log" : "Compressions Log (continued)",
                x + padding,
                startY + 7.5
            );

            doc.setFont("helvetica", "normal");
            doc.setFontSize(9.5);
            doc.setTextColor(0, 0, 0);
            doc.text(chunk, x + padding, startY + titleHeight + 6);

            lineIndex += chunk.length;
            firstPage = false;
        }
    }

    // Build the stages as structured data.
    var stageOne = [
        ["Begin simulation:", simBegin1],
        ["Initial pulse check:", one1],
        ["Initiated compressions:", two1],
        ["Initiated BVM:", three1],
        ["Applied pads:", four1],
        ["IV/IO access:", five1],
        ["Rhythm/pulse check:", six1]
    ];

    var stageTwo = [
        ["Begin Stage 2:", simBegin2],
        ["Rhythm/pulse check:", one2],
        ["Epinephrine administered:", two2],
        ["Defib delivered:", three2],
        ["Switch compressors:", four2],
        ["Continuous compressions:", five2],
        ["Breath every 2–3 seconds:", six2]
    ];

    var stageThree = [
        ["Begin Stage 3:", simBegin3],
        ["Checked pulse:", one3],
        ["Announced ROSC:", two3],
        ["Stopped compressions:", three3],
        ["Post-resuscitation care:", four3],
        ["Called for transfer:", five3],
        ["Clicked Go to Debrief:", debrief]
    ];

    // Create report.
    addHeader();

    var stageOneHeight = calculateStageHeight(stageOne, cardWidth);
    var stageTwoHeight = calculateStageHeight(stageTwo, cardWidth);
    var stageThreeHeight = calculateStageHeight(stageThree, cardWidth);

    var stageCardHeight = Math.max(stageOneHeight, stageTwoHeight, stageThreeHeight);
    var stageY = contentTop;

    // If a stage section somehow becomes too tall, continue the log on page 2.
    if (stageY + stageCardHeight > contentBottom - 25) {
        stageCardHeight = contentBottom - stageY - 25;
    }

    drawStageCard("Stage One", stageOne, margin, stageY, cardWidth, stageCardHeight, stageOneColor);
    drawStageCard(
        "Stage Two (Optional)",
        stageTwo,
        margin + cardWidth + cardGap,
        stageY,
        cardWidth,
        stageCardHeight,
        stageTwoColor
    );
    drawStageCard(
        "Stage Three",
        stageThree,
        margin + ((cardWidth + cardGap) * 2),
        stageY,
        cardWidth,
        stageCardHeight,
        stageThreeColor
    );

    drawCompressionLog(stageY + stageCardHeight + 8);

    // Add footer after every page is created.
    var totalPages = doc.getNumberOfPages();

    for (var page = 1; page <= totalPages; page++) {
        doc.setPage(page);
        addFooter(page, totalPages);
    }

    doc.save("Simulation_Debrief_Report.pdf");
})();
}

};
