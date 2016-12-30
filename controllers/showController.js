const FetchReminderInfo = require("../lib/reminderNPM");
// const FetchRepo = require("../lib/fetchRepos");
// const FetchCommits = require("../lib/fetchCommits");

class ShowController {

    /**
    * This code talks to my API in my libs folder to fetch the user names for when someone searches for a GitHub user handle - file(fetchUsers)
    * @param req,
    * @param res,
    */


        static showReminder(req, res) {
        FetchReminderInfo.doFetchInfo(req.body)
            .then(result => {
                //console.log(result);
                req.session.commits = result;
                res.status(200).send({
                    user: req.body,
                    result: result
                });
            })
            .catch(err => {
                console.log(err.message);
                res.status(400).send(err);
            });
    }
}

module.exports = ShowController;