const chai = require('chai');
const should = chai.should();
const expect = require('chai').expect;
const assert = require('chai').assert;
const ReminderMessage = require("../models/reminderMessage");
const func = new ReminderMessage();
    /**
    * This is my test document which tests out my model
    * @param reminderMessage,
    */

describe("reminderMessageModel", () => {
    // it("should exist", (done) => {

    //     let testObject = {
    //         author:
    //         {
    //             login:'miller'
    //         }, 
    //         commit:
    //         {
    //             committer:
    //             {
    //                 date:"2016-05-23T13:04:12Z"
    //             },
    //             message: 'test'
    //         }, //testing my obj out with a dummy one
            
    //     }
    //     let commitModel = new ReminderMessage(testObject);
    //     assert.isObject(commitModel,"it is an object");
    //     done();
    // });

    it("should be store user input", (done) =>{
        func.reminderInput().should.equal("reminder message");
        done();
    })
})