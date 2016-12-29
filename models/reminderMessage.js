const Reminder = require('reminder');
const remind = new Reminder();

class ReminderMessage {

    /**
    * This code talks to my fetchCommits API in my libs folder to and only sends back the data listed below. This is the data for the graph, so only whats needed is being displayed
    * @param obj,
    */
    // constructor(obj) {
    //     console.log(obj);
    //     this.author = obj.author.login; //dot notation tells you where to get the informaton from in the object
    //     this.commitDate = new Date(obj.commit.committer.date);
    //     this.commitMessage = obj.commit.message;
    // }
// example model above

//     reminderInput(name){
//         return new Promise(
//             (resolve) => {
//                 resolve("Simeron");
//             }
//         )
//     }

//     function ReminderMessageInfo() {
//     let input = document.getElementById("userInput").value;
//     alert(input);
// }


remind.every('5 minutes', function(date) {
    console.log("Close the Twitter and start to work!");
});

remind.every('4 hours', function(date) {
    console.log("It\'s time to eat something!");
});

}


module.exports = ReminderMessage;
