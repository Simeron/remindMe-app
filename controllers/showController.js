const fetchReminderInfo = require("../models/reminderMessage");
// const FetchRepo = require("../lib/fetchRepos");
// const FetchCommits = require("../lib/fetchCommits");

class ShowController {

    /**
    * This code talks to my API in my libs folder to fetch the user names for when someone searches for a GitHub user handle - file(fetchUsers)
    * @param req,
    * @param res,
    */
    static ReminderMessage(req, res) {
        fetchReminderInfo.doFetchUsers()
            .then(result => {
                res.status(200).send({
                    user: req.body.username,
                    result: result
                });
            })
            .catch(err => {
                res.status(400).send(err);
            });
    }
}

module.exports = ShowController;