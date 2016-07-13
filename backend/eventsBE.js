'use strict'
let fs = require('fs');

module.exports = Events;

function Events() {
    this.nextId = 1;

    this.eventsArray = [];
    this.load();

    return this;
}

Events.prototype.load = function () {
    let that = this;

    // where to read from, what 'encoding' (format) its in, what to do once we've read it
    fs.readFile('public/api/events.json', 'utf8', function (err, contents) {
        // Once we get the data back
        console.log('read event data');
        that.eventsArray = JSON.parse(contents);
    });
};

Events.prototype.save = function () {
    // where to put it, what to put there
    let that = this
    fs.writeFile('public/api/events.json', function(err, contents){
      that.eventsArray = JSON.stringify(that.eventsArray);
      console.log('event data written/loaded');
    });
}

Events.prototype.addEvent = function (eventsToAdd) {
    eventsToAdd.signedup = false;
    eventsToAdd.id = this.nextId++;

    this.eventsArray.push(events);
};

Events.prototype.signedup = function (id) {
    for (let i = 0; i < this.eventsArray.length; i++) {
        if (this.eventsArray[i].id === id) {
            this.eventsArray[i].signedup = true;
        }
    }
    // Record the sining up
    this.save();
};
Events.prototype.getAllEvents = function () {
    return this.eventsArray;
};
