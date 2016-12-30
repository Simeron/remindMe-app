const Push = require('push.js');
// const Reminder = require('reminder');
// const remind = new Reminder();



class ReminderMessage {

    static doPushMessage(pushSomething) {
    Push.create("Hello world!", {
    body: "How's it hangin'?",
        icon: 'icon.png',
            timeout: 4000,
                onClick: function () {
                    window.focus();
                    this.close();
                }
}
    }

}


module.exports = ReminderMessage;
