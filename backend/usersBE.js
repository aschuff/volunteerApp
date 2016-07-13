'use strict'
let fs = require('fs');

module.exports = Volunteers;

function Volunteers() {
    this.nextId = 1;

    this.vollsArray = [];
    this.load();

    return this;
}
Volunteers.prototype.load = function () {
    let that = this;

    // where to read from, what 'encoding' (format) its in, what to do once we've read it
    fs.readFile('public/api/users.json', 'utf8', function (err, contents) {
        // Once we get the data back
        console.log('read user data');
        that.vollsArray = JSON.parse(contents);
    });
};

Volunteers.prototype.save = function () {
    // where to put it, what to put there
    let that = this
    fs.writeFile('public/api/users.json', function(err, contents){
      that.vollsArray = JSON.stringify(that.vollsArray);
      console.log('user data written/loaded');
    });
}

Volunteers.prototype.addVoll = function (vollsToAdd) {
    vollsToAdd.signedup = false;
    vollsToAdd.id = this.nextId++;

    this.vollsArray.push(Volunteers);
    this.save();
    
};

Volunteers.prototype.getAllVolls = function () {
    return this.vollsArray;
};
