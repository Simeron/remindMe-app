var Reminder = require('reminder');
var remind = new Reminder();

remind.every('5 minutes', function(date) {
    console.log("Close the Twitter and start to work!");
});

remind.every('4 hours', function(date) {
    console.log("It\'s time to eat something!");
});
