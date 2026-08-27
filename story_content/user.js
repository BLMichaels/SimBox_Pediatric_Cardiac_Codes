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
            return "Gap " + (index + 1) + ": " +
                formatTime(pause.start) + "-" +
                formatTime(pause.end) + " = " +
                formatTime(pause.duration) + " between compressions";
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
    var seven1 = player.GetVar("Seven1") || "";
    var eight1 = player.GetVar("Eight1") || "";

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
    // Storyline vars from Script21 (fallback if log parse finds nothing)
    var pauseCountVar = player.GetVar("CompressionPauseCount") || "";
    var pauseTotalVar = player.GetVar("CompressionPauseTotal") || "";
    var pauseAverageVar = player.GetVar("CompressionPauseAverage") || "";
    var pauseDetailsVar = player.GetVar("CompressionPauseDetails") || "";

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

    // Design system — clinical briefing document (matches SimBox dashboard tone)
    var theme = {
        paper: [251, 248, 242],
        ink: [28, 36, 48],
        inkSoft: [96, 106, 116],
        teal: [31, 106, 102],
        tealDark: [22, 78, 75],
        tealTint: [232, 244, 243],
        copper: [154, 79, 44],
        danger: [143, 45, 45],
        dangerTint: [252, 236, 236],
        success: [44, 107, 63],
        successTint: [234, 246, 238],
        warn: [180, 120, 40],
        warnTint: [255, 244, 220],
        border: [218, 212, 200],
        white: [255, 255, 255]
    };

    var LONG_GAP_SECONDS = 10;
    var margin = 14;
    var headerHeight = 24;
    var footerHeight = 11;
    var contentTop = 32;
    var contentBottom = pageHeight - footerHeight - 6;
    var cardGap = 7;
    var cardWidth = (pageWidth - margin * 2 - cardGap * 2) / 3;
    // Tight cropped logo aspect ~780:220 ≈ 3.55:1
    var logoW = 38;
    var logoH = 10.7;

    var stageThemes = [
        { title: "Stage One", subtitle: "Initial response", accent: theme.teal, tint: theme.tealTint },
        { title: "Stage Two", subtitle: "Optional continuation", accent: [75, 117, 162], tint: [236, 242, 249] },
        { title: "Stage Three", subtitle: "ROSC & handoff", accent: theme.success, tint: theme.successTint }
    ];

    var generatedAt = new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });

    function cleanText(value) {
        return String(value || "")
            .replace(/<br\s*\/?>/gi, "\n")
            .replace(/<\/p>/gi, "\n")
            .replace(/<[^>]*>/g, "")
            .replace(/&nbsp;/gi, " ")
            .replace(/&amp;/gi, "&")
            .replace(/&lt;/gi, "<")
            .replace(/&gt;/gi, ">")
            .replace(/&quot;/gi, "\"")
            .replace(/&#39;/gi, "'")
            .replace(/[ \t]+\n/g, "\n")
            .replace(/\n{3,}/g, "\n\n")
            .trim();
    }

    function pdfSafeText(value) {
        return String(value || "")
            .replace(/[\u2013\u2014\u2212]/g, "-")
            .replace(/\u2026/g, "...");
    }

    function formatDisplayValues(rawValue, keepFullDate) {
        return splitValues(rawValue).map(function (val) {
            var text = pdfSafeText(val);
            if (keepFullDate) return text;
            var clockMatch = text.match(/(\d{1,2}:\d{2}(?::\d{2})?\s*(?:AM|PM)?)$/i);
            if (clockMatch) return clockMatch[1].trim();
            if (/^\d{1,2}:\d{2}(?::\d{2})?$/.test(text)) return text;
            return text;
        });
    }

    function splitValues(raw) {
        var text = cleanText(raw);
        if (!text) return [];
        return text
            .split(/\n|\|/)
            .map(function (part) { return part.trim(); })
            .filter(Boolean);
    }

    function clockToSeconds(clock) {
        var parts = String(clock || "").trim().match(/^(\d{1,2}):(\d{2})(?::(\d{2}))?$/);
        if (!parts) return null;
        if (parts[3] != null) {
            return Number(parts[1]) * 3600 + Number(parts[2]) * 60 + Number(parts[3]);
        }
        return Number(parts[1]) * 60 + Number(parts[2]);
    }

    function formatClock(totalSeconds) {
        totalSeconds = Math.max(0, Math.round(Number(totalSeconds) || 0));
        var minutes = Math.floor(totalSeconds / 60);
        var seconds = totalSeconds % 60;
        return String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
    }

    function firstClock(rawValue) {
        var values = formatDisplayValues(rawValue, false);
        if (!values.length) return "--:--";
        var clock = values[0].match(/(\d{1,2}:\d{2}(?::\d{2})?)/);
        return clock ? clock[1] : "--:--";
    }

    function stageHasValues(entries) {
        return entries.some(function (entry) {
            return formatDisplayValues(entry[1], entry[2] === true).length > 0;
        });
    }

    /** Pair each Compressions off → on and compute time between compressions. */
    function calculateCompressionGaps(rawLog) {
        var text = cleanText(rawLog);
        var eventPattern = /Compressions\s+(off|on):\s*(\d{1,2}:\d{2}(?::\d{2})?)/gi;
        var match;
        var offStartedAt = null;
        var pauses = [];

        while ((match = eventPattern.exec(text)) !== null) {
            var eventType = match[1].toLowerCase();
            var eventSeconds = clockToSeconds(match[2]);
            if (eventSeconds == null) continue;

            if (eventType === "off" && offStartedAt === null) {
                offStartedAt = eventSeconds;
            } else if (eventType === "on" && offStartedAt !== null) {
                var duration = eventSeconds - offStartedAt;
                if (duration >= 0) {
                    pauses.push({
                        start: offStartedAt,
                        end: eventSeconds,
                        duration: duration,
                        startClock: formatClock(offStartedAt),
                        endClock: formatClock(eventSeconds),
                        durationClock: formatClock(duration),
                        isLong: duration >= LONG_GAP_SECONDS
                    });
                }
                offStartedAt = null;
            }
        }

        var totalSeconds = 0;
        var longestSeconds = 0;
        var longCount = 0;
        pauses.forEach(function (pause) {
            totalSeconds += pause.duration;
            if (pause.duration > longestSeconds) longestSeconds = pause.duration;
            if (pause.isLong) longCount += 1;
        });
        var count = pauses.length;
        var averageSeconds = count > 0 ? totalSeconds / count : 0;
        var details = count > 0
            ? pauses.map(function (pause, index) {
                return "Gap " + (index + 1) + ": " +
                    pause.startClock + "-" + pause.endClock +
                    " = " + pause.durationClock + " between compressions" +
                    (pause.isLong ? " [LONG >10s]" : "");
            }).join("\n")
            : "";

        return {
            pauses: pauses,
            count: count,
            totalSeconds: totalSeconds,
            averageSeconds: averageSeconds,
            longestSeconds: longestSeconds,
            longCount: longCount,
            totalClock: formatClock(totalSeconds),
            averageClock: formatClock(averageSeconds),
            longestClock: formatClock(longestSeconds),
            details: details
        };
    }

    /** Build on/gap visual segments from Initial / off|on / Stopped Compressions. */
    function buildVisualSegments(rawLog) {
        var text = cleanText(rawLog);
        if (!text) return [];

        var events = [];
        var reStart = /Initial\s+compression\s+started(?:\s+at)?\s*:?\s*(\d{1,2}:\d{2}(?::\d{2})?)/gi;
        var reOffOn = /Compressions\s+(off|on)\s*:\s*(\d{1,2}:\d{2}(?::\d{2})?)/gi;
        var reStop = /Stopped\s+Compressions\s*:\s*(\d{1,2}:\d{2}(?::\d{2})?)/gi;
        var m;

        while ((m = reStart.exec(text)) !== null) {
            var t0 = clockToSeconds(m[1]);
            if (t0 != null) events.push({ kind: "start", t: t0 });
        }
        while ((m = reOffOn.exec(text)) !== null) {
            var t1 = clockToSeconds(m[2]);
            if (t1 != null) events.push({ kind: m[1].toLowerCase(), t: t1 });
        }
        while ((m = reStop.exec(text)) !== null) {
            var t2 = clockToSeconds(m[1]);
            if (t2 != null) events.push({ kind: "stop", t: t2 });
        }

        events.sort(function (a, b) { return a.t - b.t; });
        if (!events.length) return [];

        var segments = [];
        var cursor = null;
        var state = null;

        events.forEach(function (ev) {
            if (ev.kind === "start") {
                cursor = ev.t;
                state = "on";
                return;
            }
            if (cursor == null) {
                cursor = ev.t;
                state = ev.kind === "off" ? "gap" : "on";
                if (ev.kind === "stop") state = null;
                return;
            }
            if (ev.t > cursor && state) {
                var dur = ev.t - cursor;
                segments.push({
                    type: state,
                    start: cursor,
                    end: ev.t,
                    duration: dur,
                    isLong: state === "gap" && dur >= LONG_GAP_SECONDS
                });
            }
            if (ev.kind === "off") {
                cursor = ev.t;
                state = "gap";
            } else if (ev.kind === "on") {
                cursor = ev.t;
                state = "on";
            } else if (ev.kind === "stop") {
                cursor = ev.t;
                state = null;
            }
        });

        return segments;
    }

    var compressionGaps = calculateCompressionGaps(compressions);
    var visualSegments = buildVisualSegments(compressions);
    var pauseCount = compressionGaps.count > 0
        ? String(compressionGaps.count)
        : (pauseCountVar || "0");
    var pauseTotal = compressionGaps.count > 0
        ? compressionGaps.totalClock
        : (cleanText(pauseTotalVar) || "00:00");
    var pauseAverage = compressionGaps.count > 0
        ? compressionGaps.averageClock
        : (cleanText(pauseAverageVar) || "00:00");
    var pauseDetails = compressionGaps.details || cleanText(pauseDetailsVar) || "";

    function normalizeCompressionLog(value) {
        var text = cleanText(value);
        if (!text) return ["No compression timestamps recorded."];
        return text
            .replace(/\s*\|\s*/g, "\n")
            .replace(/\s*(Compressions off:)/gi, "\n$1")
            .replace(/\s*(Compressions on:)/gi, "\n$1")
            .replace(/\s*(Initial compression started)/gi, "\n$1")
            .replace(/\s*(Stopped Compressions:)/gi, "\n$1")
            .split("\n")
            .map(function (line) { return line.trim(); })
            .filter(Boolean);
    }

    /** Timeline lines with computed time-between annotations after each on event. */
    function buildCompressionTimelineLines(rawLog, gaps) {
        var lines = normalizeCompressionLog(rawLog);
        if (!gaps || !gaps.pauses || !gaps.pauses.length) return lines;

        var enriched = [];
        var pauseIndex = 0;
        var pendingOff = null;

        lines.forEach(function (line) {
            enriched.push(line);
            var lower = line.toLowerCase();
            var clockMatch = line.match(/(\d{1,2}:\d{2}(?::\d{2})?)/);
            var clockSec = clockMatch ? clockToSeconds(clockMatch[1]) : null;

            if (lower.indexOf("compressions off") !== -1 && clockSec != null) {
                pendingOff = clockSec;
            } else if (lower.indexOf("compressions on") !== -1 && pendingOff != null && clockSec != null) {
                var pause = gaps.pauses[pauseIndex];
                var gapSec = null;
                if (pause && pause.start === pendingOff && pause.end === clockSec) {
                    gapSec = pause.duration;
                    pauseIndex += 1;
                } else if (clockSec >= pendingOff) {
                    gapSec = clockSec - pendingOff;
                }
                if (gapSec != null) {
                    enriched.push(
                        "Time between compressions: " + formatClock(gapSec) +
                        (gapSec >= LONG_GAP_SECONDS ? " [LONG]" : "")
                    );
                }
                pendingOff = null;
            }
        });

        return enriched;
    }

    function paintPageBackground() {
        doc.setFillColor(theme.paper[0], theme.paper[1], theme.paper[2]);
        doc.rect(0, 0, pageWidth, pageHeight, "F");
    }

    function addHeader() {
        paintPageBackground();

        // Clinical letterhead — white band, typeset brand (crisp), teal rule
        doc.setFillColor(theme.white[0], theme.white[1], theme.white[2]);
        doc.rect(0, 0, pageWidth, headerHeight, "F");

        var brandBlue = [36, 92, 168];
        var brandRed = [214, 40, 41];

        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        doc.setTextColor(brandBlue[0], brandBlue[1], brandBlue[2]);
        doc.text("SimBox", margin, 11.2);
        var simW = doc.getTextWidth("SimBox");
        doc.setTextColor(brandRed[0], brandRed[1], brandRed[2]);
        doc.text("+", margin + simW + 0.4, 11.2);
        var textX = margin + simW + 7.5;

        doc.setDrawColor(theme.border[0], theme.border[1], theme.border[2]);
        doc.setLineWidth(0.4);
        doc.line(textX - 3.5, 5.5, textX - 3.5, headerHeight - 5.5);

        doc.setFont("helvetica", "bold");
        doc.setFontSize(12.5);
        doc.setTextColor(theme.tealDark[0], theme.tealDark[1], theme.tealDark[2]);
        doc.text("Pediatric Cardiac Codes", textX, 10);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(8);
        doc.setTextColor(theme.inkSoft[0], theme.inkSoft[1], theme.inkSoft[2]);
        doc.text("Simulation debrief report", textX, 15.2);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(7.5);
        doc.setTextColor(theme.inkSoft[0], theme.inkSoft[1], theme.inkSoft[2]);
        doc.text(generatedAt, pageWidth - margin, 11.5, { align: "right" });

        doc.setFillColor(theme.teal[0], theme.teal[1], theme.teal[2]);
        doc.rect(0, headerHeight - 2.2, pageWidth, 2.2, "F");
    }

    function addFooter(pageNumber, totalPages) {
        doc.setDrawColor(theme.border[0], theme.border[1], theme.border[2]);
        doc.setLineWidth(0.3);
        doc.line(margin, pageHeight - footerHeight, pageWidth - margin, pageHeight - footerHeight);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(7.5);
        doc.setTextColor(theme.inkSoft[0], theme.inkSoft[1], theme.inkSoft[2]);
        doc.text("SimBox+ · Anonymous session summary · Not a medical record", margin, pageHeight - 4.5);
        doc.text("Page " + pageNumber + " of " + totalPages, pageWidth - margin, pageHeight - 4.5, { align: "right" });
    }

    function ensureSpace(requiredHeight, currentY) {
        if (currentY + requiredHeight > contentBottom) {
            doc.addPage();
            addHeader();
            return contentTop;
        }
        return currentY;
    }

    function measureEntryRow(label, rawValue, width, keepFullDate) {
        var padX = 6;
        var inner = width - padX * 2;
        var values = formatDisplayValues(rawValue, keepFullDate);
        if (!values.length) return 0;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(7.5);
        var labelLines = doc.splitTextToSize(label.replace(/:$/, ""), inner);
        var labelH = labelLines.length * 3.4;

        doc.setFont("courier", "bold");
        doc.setFontSize(9);
        var valueH = 0;
        values.forEach(function (val) {
            var valueLines = doc.splitTextToSize(val, inner);
            valueH += valueLines.length * 4.4 + 0.4;
        });

        return Math.max(labelH + valueH + 5, 11);
    }

    function drawEntryRow(x, y, width, label, rawValue, rowIndex, keepFullDate) {
        var padX = 6;
        var inner = width - padX * 2;
        var values = formatDisplayValues(rawValue, keepFullDate);
        if (!values.length) return 0;

        var rowH = measureEntryRow(label, rawValue, width, keepFullDate);

        if (rowIndex % 2 === 0) {
            doc.setFillColor(theme.white[0], theme.white[1], theme.white[2]);
        } else {
            doc.setFillColor(248, 246, 242);
        }
        doc.rect(x + 1.5, y, width - 3, rowH, "F");

        doc.setFont("helvetica", "normal");
        doc.setFontSize(7.5);
        doc.setTextColor(theme.inkSoft[0], theme.inkSoft[1], theme.inkSoft[2]);
        var labelLines = doc.splitTextToSize(label.replace(/:$/, ""), inner);
        doc.text(labelLines, x + padX, y + 4.2);

        var valueY = y + 4.2 + labelLines.length * 3.4 + 0.8;
        values.forEach(function (val) {
            doc.setFont("courier", "bold");
            doc.setFontSize(9);
            doc.setTextColor(theme.copper[0], theme.copper[1], theme.copper[2]);
            var valueLines = doc.splitTextToSize(val, inner);
            doc.text(valueLines, x + padX, valueY);
            valueY += valueLines.length * 4.4 + 0.4;
        });

        doc.setDrawColor(theme.border[0], theme.border[1], theme.border[2]);
        doc.setLineWidth(0.15);
        doc.line(x + padX, y + rowH, x + width - padX, y + rowH);

        return rowH;
    }

    function measureStageCard(entries, width) {
        var headerH = 16;
        var padBottom = 5;
        if (!stageHasValues(entries)) {
            return headerH + padBottom + 14;
        }
        var total = headerH + padBottom;
        entries.forEach(function (entry) {
            var h = measureEntryRow(entry[0], entry[1], width, entry[2] === true);
            if (h > 0) total += h;
        });
        return total;
    }

    function drawStageCard(stageTheme, entries, x, y, width, height) {
        doc.setFillColor(theme.white[0], theme.white[1], theme.white[2]);
        doc.roundedRect(x, y, width, height, 2.5, 2.5, "F");
        doc.setDrawColor(theme.border[0], theme.border[1], theme.border[2]);
        doc.setLineWidth(0.35);
        doc.roundedRect(x, y, width, height, 2.5, 2.5, "S");

        doc.setFillColor(stageTheme.accent[0], stageTheme.accent[1], stageTheme.accent[2]);
        doc.roundedRect(x, y, width, 13, 2.5, 2.5, "F");
        doc.rect(x, y + 10, width, 3, "F");

        doc.setFillColor(stageTheme.tint[0], stageTheme.tint[1], stageTheme.tint[2]);
        doc.rect(x + 1.5, y + 13, width - 3, 3, "F");

        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.setTextColor(255, 255, 255);
        doc.text(stageTheme.title, x + 6, y + 7.2);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(7);
        doc.setTextColor(240, 248, 247);
        doc.text(stageTheme.subtitle, x + 6, y + 11);

        if (!stageHasValues(entries)) {
            doc.setFont("helvetica", "italic");
            doc.setFontSize(8.5);
            doc.setTextColor(theme.inkSoft[0], theme.inkSoft[1], theme.inkSoft[2]);
            doc.text("Not run in this session", x + 6, y + 22);
            return;
        }

        var cursorY = y + 16;
        var rowIndex = 0;
        var contentLimit = y + height - 2;

        entries.forEach(function (entry) {
            var rowH = measureEntryRow(entry[0], entry[1], width, entry[2] === true);
            if (rowH <= 0) return;
            if (cursorY + rowH > contentLimit) return;
            rowH = drawEntryRow(x, cursorY, width, entry[0], entry[1], rowIndex, entry[2] === true);
            cursorY += rowH;
            rowIndex += 1;
        });
    }

    function drawSectionTitle(y, title, subtitle) {
        y = ensureSpace(12, y);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(11);
        doc.setTextColor(theme.ink[0], theme.ink[1], theme.ink[2]);
        doc.text(title, margin, y);

        if (subtitle) {
            doc.setFont("helvetica", "normal");
            doc.setFontSize(8);
            doc.setTextColor(theme.inkSoft[0], theme.inkSoft[1], theme.inkSoft[2]);
            doc.text(subtitle, margin, y + 4.5);
            y += 4.5;
        }

        doc.setDrawColor(theme.teal[0], theme.teal[1], theme.teal[2]);
        doc.setLineWidth(0.6);
        doc.line(margin, y + 2.5, margin + 42, y + 2.5);
        return y + 8;
    }

    function drawMetricTile(x, y, w, h, label, value, accent, useCourier) {
        doc.setFillColor(theme.white[0], theme.white[1], theme.white[2]);
        doc.roundedRect(x, y, w, h, 2, 2, "F");
        doc.setDrawColor(theme.border[0], theme.border[1], theme.border[2]);
        doc.roundedRect(x, y, w, h, 2, 2, "S");

        doc.setFillColor(accent[0], accent[1], accent[2]);
        doc.roundedRect(x, y, w, 3, 2, 2, "F");
        doc.rect(x, y + 2, w, 1.2, "F");

        var displayValue = pdfSafeText(cleanText(value) || "—");
        doc.setFont(useCourier ? "courier" : "helvetica", "bold");
        doc.setFontSize(displayValue.length > 8 ? 11 : 14);
        doc.setTextColor(theme.ink[0], theme.ink[1], theme.ink[2]);
        var valueLines = doc.splitTextToSize(displayValue, w - 8);
        doc.text(valueLines, x + w / 2, y + (valueLines.length > 1 ? 9 : 11), { align: "center" });

        doc.setFont("helvetica", "normal");
        doc.setFontSize(7.5);
        doc.setTextColor(theme.inkSoft[0], theme.inkSoft[1], theme.inkSoft[2]);
        doc.text(label, x + w / 2, y + 16, { align: "center" });
    }

    function drawGlanceStrip(startY, stageSets) {
        var stagesRun = stageSets.filter(stageHasValues).length;
        var gaps = compressionGaps.count;
        var longGaps = compressionGaps.longCount;
        var longest = gaps > 0 ? compressionGaps.longestClock : "00:00";
        var totalOff = gaps > 0 ? compressionGaps.totalClock : (cleanText(pauseTotalVar) || "00:00");

        var items = [
            { label: "Stages run", value: String(stagesRun) + " / 3", accent: theme.teal, courier: false },
            { label: "Gaps", value: String(gaps || pauseCount || "0"), accent: theme.copper, courier: false },
            { label: "Long gaps", value: String(longGaps), accent: theme.warn, courier: false },
            { label: "Longest gap", value: longest, accent: theme.danger, courier: true },
            { label: "Total off chest", value: totalOff, accent: theme.danger, courier: true }
        ];

        var gap = 4;
        var tileH = 18;
        var tileW = (pageWidth - margin * 2 - gap * (items.length - 1)) / items.length;
        startY = ensureSpace(tileH + 4, startY);

        items.forEach(function (item, i) {
            drawMetricTile(
                margin + i * (tileW + gap),
                startY,
                tileW,
                tileH,
                item.label,
                item.value,
                item.accent,
                item.courier
            );
        });

        return startY + tileH + 6;
    }

    function drawKeyIntervals(startY) {
        var items = [
            { label: "First compressions", value: firstClock(two1), accent: theme.success },
            { label: "Pads", value: firstClock(four1), accent: theme.teal },
            { label: "Epinephrine", value: firstClock(seven1), accent: theme.copper },
            { label: "Defibrillation", value: firstClock(eight1), accent: theme.danger },
            { label: "ROSC announced", value: firstClock(two3), accent: theme.success }
        ];

        startY = drawSectionTitle(
            startY,
            "Key intervals",
            "Simulation-clock times for critical actions"
        );

        var gap = 4;
        var tileH = 20;
        var tileW = (pageWidth - margin * 2 - gap * (items.length - 1)) / items.length;
        startY = ensureSpace(tileH + 4, startY);

        items.forEach(function (item, i) {
            drawMetricTile(
                margin + i * (tileW + gap),
                startY,
                tileW,
                tileH,
                item.label,
                item.value,
                item.accent,
                true
            );
        });

        return startY + tileH + 8;
    }

    function drawCompressionVisualBar(startY) {
        startY = drawSectionTitle(
            startY,
            "Compression activity",
            "Green = compressions on · Red = gap · Amber = long gap (≥10s)"
        );

        var barH = 14;
        var legendH = 8;
        var boxH = 10 + barH + legendH + 8;
        startY = ensureSpace(boxH, startY);

        var boxW = pageWidth - margin * 2;
        var pad = 6;
        var barX = margin + pad;
        var barY = startY + 6;
        var barW = boxW - pad * 2;

        doc.setFillColor(theme.white[0], theme.white[1], theme.white[2]);
        doc.roundedRect(margin, startY, boxW, boxH, 2, 2, "F");
        doc.setDrawColor(theme.border[0], theme.border[1], theme.border[2]);
        doc.roundedRect(margin, startY, boxW, boxH, 2, 2, "S");

        if (!visualSegments.length) {
            doc.setFont("helvetica", "italic");
            doc.setFontSize(8.5);
            doc.setTextColor(theme.inkSoft[0], theme.inkSoft[1], theme.inkSoft[2]);
            doc.text("No compression activity recorded.", barX, barY + 8);
            return startY + boxH + 6;
        }

        var minT = visualSegments[0].start;
        var maxT = visualSegments[visualSegments.length - 1].end;
        var span = Math.max(1, maxT - minT);

        visualSegments.forEach(function (seg) {
            var x0 = barX + ((seg.start - minT) / span) * barW;
            var x1 = barX + ((seg.end - minT) / span) * barW;
            var w = Math.max(0.6, x1 - x0);
            var color = theme.success;
            if (seg.type === "gap") {
                color = seg.isLong ? theme.warn : theme.danger;
            }
            doc.setFillColor(color[0], color[1], color[2]);
            doc.rect(x0, barY, w, barH, "F");

            if (seg.type === "gap" && w >= 10) {
                doc.setFont("courier", "bold");
                doc.setFontSize(6.5);
                doc.setTextColor(255, 255, 255);
                var label = formatClock(seg.duration);
                if (doc.getTextWidth(label) < w - 1) {
                    doc.text(label, x0 + w / 2, barY + 8.5, { align: "center" });
                }
            }
        });

        var legendY = barY + barH + 6;
        var legendItems = [
            { label: "on", color: theme.success },
            { label: "gap", color: theme.danger },
            { label: "long", color: theme.warn }
        ];
        var lx = barX;
        legendItems.forEach(function (item) {
            doc.setFillColor(item.color[0], item.color[1], item.color[2]);
            doc.rect(lx, legendY - 2.5, 4, 4, "F");
            doc.setFont("helvetica", "normal");
            doc.setFontSize(7.5);
            doc.setTextColor(theme.inkSoft[0], theme.inkSoft[1], theme.inkSoft[2]);
            doc.text(item.label, lx + 5.5, legendY + 0.8);
            lx += 22;
        });

        return startY + boxH + 6;
    }

    function drawCompressionStats(startY) {
        var tileGap = 6;
        var tileH = 20;
        var tileW = (pageWidth - margin * 2 - tileGap * 2) / 3;
        var blockH = tileH + 8;

        startY = drawSectionTitle(
            startY,
            "Compression quality",
            "Time between compressions (off to on) from the simulation clock"
        );

        startY = ensureSpace(blockH, startY);

        drawMetricTile(margin, startY, tileW, tileH, "Gaps between CPR", pauseCount || "0", theme.copper, false);
        drawMetricTile(margin + tileW + tileGap, startY, tileW, tileH, "Total time between", cleanText(pauseTotal) || "00:00", theme.danger, true);
        drawMetricTile(margin + (tileW + tileGap) * 2, startY, tileW, tileH, "Average gap", cleanText(pauseAverage) || "00:00", theme.teal, true);

        startY += blockH;

        var detailsText = pdfSafeText(cleanText(pauseDetails));
        if (detailsText && detailsText !== "No completed compression interruptions recorded.") {
            var boxW = pageWidth - margin * 2;
            var pad = 6;
            doc.setFont("helvetica", "normal");
            doc.setFontSize(8.5);
            var detailLines = doc.splitTextToSize(detailsText.replace(/<br\s*\/?>/gi, "\n"), boxW - pad * 2);
            var boxH = 10 + detailLines.length * 4.2;
            startY = ensureSpace(boxH + 4, startY);

            doc.setFillColor(theme.tealTint[0], theme.tealTint[1], theme.tealTint[2]);
            doc.roundedRect(margin, startY, boxW, boxH, 2, 2, "F");
            doc.setDrawColor(theme.border[0], theme.border[1], theme.border[2]);
            doc.roundedRect(margin, startY, boxW, boxH, 2, 2, "S");

            doc.setFont("helvetica", "bold");
            doc.setFontSize(8);
            doc.setTextColor(theme.tealDark[0], theme.tealDark[1], theme.tealDark[2]);
            doc.text("Time between compressions (each gap)", margin + pad, startY + 5.5);

            doc.setFont("courier", "normal");
            doc.setFontSize(8.5);
            doc.setTextColor(theme.ink[0], theme.ink[1], theme.ink[2]);
            doc.text(detailLines, margin + pad, startY + 10.5);

            startY += boxH + 6;
        }

        return startY + 2;
    }

    function drawCompressionLogLine(x, y, line, maxWidth) {
        var safeLine = pdfSafeText(line);
        var lower = safeLine.toLowerCase();
        var isOff = lower.indexOf("compressions off") !== -1;
        var isOn = lower.indexOf("compressions on") !== -1;
        var isGap = lower.indexOf("time between compressions") !== -1;
        var isLong = isGap && lower.indexOf("[long]") !== -1;
        var lineHeight = 4.6;
        var padY = 1.2;

        doc.setFont(isGap || isOff || isOn ? "courier" : "helvetica", isOff || isOn || isGap ? "bold" : "normal");
        doc.setFontSize(8.5);
        var textLines = doc.splitTextToSize(safeLine, maxWidth - 6);
        var blockH = textLines.length * lineHeight + padY * 2;

        if (isLong) {
            doc.setFillColor(theme.warnTint[0], theme.warnTint[1], theme.warnTint[2]);
            doc.setTextColor(theme.warn[0], theme.warn[1], theme.warn[2]);
        } else if (isGap) {
            doc.setFillColor(theme.tealTint[0], theme.tealTint[1], theme.tealTint[2]);
            doc.setTextColor(theme.tealDark[0], theme.tealDark[1], theme.tealDark[2]);
        } else if (isOff) {
            doc.setFillColor(theme.dangerTint[0], theme.dangerTint[1], theme.dangerTint[2]);
            doc.setTextColor(theme.danger[0], theme.danger[1], theme.danger[2]);
        } else if (isOn) {
            doc.setFillColor(theme.successTint[0], theme.successTint[1], theme.successTint[2]);
            doc.setTextColor(theme.success[0], theme.success[1], theme.success[2]);
        } else {
            doc.setFillColor(248, 246, 242);
            doc.setTextColor(theme.ink[0], theme.ink[1], theme.ink[2]);
        }

        doc.roundedRect(x, y, maxWidth, blockH, 1, 1, "F");
        doc.text(textLines, x + 3, y + padY + 3.2);
        return blockH + 1.2;
    }

    function drawCompressionLog(startY) {
        var lines = buildCompressionTimelineLines(compressions, compressionGaps);
        var boxW = pageWidth - margin * 2;
        var pad = 7;
        var headerH = 11;
        var innerW = boxW - pad * 2;

        startY = drawSectionTitle(
            startY,
            "Compressions timeline",
            "Off/on events with calculated time between each compression cycle"
        );

        var lineIndex = 0;
        var firstChunk = true;

        while (lineIndex < lines.length) {
            if (startY + headerH + pad * 2 + 8 > contentBottom) {
                doc.addPage();
                addHeader();
                startY = contentTop;
                firstChunk = false;
            }

            var available = contentBottom - startY - headerH - pad * 2;
            var chunk = [];
            var chunkHeight = 0;
            var probeIndex = lineIndex;

            while (probeIndex < lines.length) {
                doc.setFont("helvetica", "normal");
                doc.setFontSize(8.5);
                var textLines = doc.splitTextToSize(pdfSafeText(lines[probeIndex]), innerW - 6);
                var lineBlockH = textLines.length * 4.6 + 1.2 * 2 + 1.2;
                if (chunk.length && chunkHeight + lineBlockH > available) break;
                if (!chunk.length && lineBlockH > available) {
                    chunk.push(lines[probeIndex]);
                    chunkHeight += lineBlockH;
                    probeIndex += 1;
                    break;
                }
                chunk.push(lines[probeIndex]);
                chunkHeight += lineBlockH;
                probeIndex += 1;
            }

            var boxH = headerH + chunkHeight + pad * 2;
            startY = ensureSpace(boxH, startY);

            doc.setFillColor(theme.white[0], theme.white[1], theme.white[2]);
            doc.roundedRect(margin, startY, boxW, boxH, 2.5, 2.5, "F");
            doc.setDrawColor(theme.border[0], theme.border[1], theme.border[2]);
            doc.roundedRect(margin, startY, boxW, boxH, 2.5, 2.5, "S");

            doc.setFillColor(theme.ink[0], theme.ink[1], theme.ink[2]);
            doc.roundedRect(margin, startY, boxW, headerH, 2.5, 2.5, "F");
            doc.rect(margin, startY + 8, boxW, 3, "F");

            doc.setFont("helvetica", "bold");
            doc.setFontSize(9);
            doc.setTextColor(255, 255, 255);
            doc.text(firstChunk ? "Event log" : "Event log (continued)", margin + pad, startY + 7);

            var cursorY = startY + headerH + pad;
            chunk.forEach(function (line) {
                var h = drawCompressionLogLine(margin + pad, cursorY, line, innerW);
                cursorY += h;
            });

            lineIndex += chunk.length;
            firstChunk = false;
            startY = startY + boxH + 6;
        }

        return startY;
    }

    // Create report.
    addHeader();

    var stageOne = [
        ["Begin simulation", simBegin1, true],
        ["Initial pulse check", one1],
        ["Initiated compressions", two1],
        ["Initiated BVM", three1],
        ["Applied pads", four1],
        ["IV/IO access", five1],
        ["Rhythm/pulse check", six1],
        ["Epinephrine administered", seven1],
        ["Defib delivered", eight1]
    ];

    var stageTwo = [
        ["Begin Stage 2", simBegin2, true],
        ["Rhythm/pulse check", one2],
        ["Epinephrine administered", two2],
        ["Defib delivered", three2],
        ["Switch compressors", four2],
        ["Continuous compressions", five2],
        ["Breath every 2-3 seconds", six2]
    ];

    var stageThree = [
        ["Begin Stage 3", simBegin3, true],
        ["Checked pulse", one3],
        ["Announced ROSC", two3],
        ["Stopped compressions", three3],
        ["Post-resuscitation care", four3],
        ["Called for transfer", five3],
        ["Clicked Go to Debrief", debrief]
    ];

    var stageSets = [stageOne, stageTwo, stageThree];

    var y = contentTop;
    y = drawGlanceStrip(y, stageSets);
    y = drawKeyIntervals(y);

    y = drawSectionTitle(y, "Code timeline by stage", "Clinical actions and simulation clock timestamps");

    var stageHeights = stageSets.map(function (entries) {
        return measureStageCard(entries, cardWidth);
    });
    var stageCardHeight = Math.max.apply(null, stageHeights);
    y = ensureSpace(stageCardHeight + 4, y);

    stageThemes.forEach(function (st, i) {
        drawStageCard(st, stageSets[i], margin + (cardWidth + cardGap) * i, y, cardWidth, stageCardHeight);
    });
    y = y + stageCardHeight + 10;

    y = drawCompressionVisualBar(y);
    y = drawCompressionStats(y);
    drawCompressionLog(y);

    // Add footer after every page is created.
    var totalPages = doc.getNumberOfPages();

    for (var page = 1; page <= totalPages; page++) {
        doc.setPage(page);
        addFooter(page, totalPages);
    }

    function savePdf(doc, filename) {
        var blob;
        try {
            blob = doc.output("blob");
        } catch (e0) {
            try {
                doc.save(filename);
                return;
            } catch (e1) {
                alert("Could not create the PDF. Try opening the case in a new browser tab.");
                return;
            }
        }

        var url = URL.createObjectURL(blob);
        var opened = false;

        try {
            var a = document.createElement("a");
            a.href = url;
            a.download = filename;
            a.rel = "noopener";
            a.style.display = "none";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            opened = true;
        } catch (e2) {}

        if (!opened) {
            try {
                opened = !!window.open(url, "_blank");
            } catch (e3) {}
        }

        if (!opened) {
            try {
                doc.output("dataurlnewwindow");
                opened = true;
            } catch (e4) {}
        }

        window.setTimeout(function () {
            try {
                URL.revokeObjectURL(url);
            } catch (e5) {}
        }, 60000);

        if (!opened) {
            alert(
                "The PDF was created but this embedded page blocked the download. Open the case in a new tab and use Print Summary again."
            );
        }
    }

    var reportDate = new Date().toISOString().slice(0, 10);
    savePdf(doc, "Simulation_Debrief_Report_" + reportDate + ".pdf");
  })();
}

};
