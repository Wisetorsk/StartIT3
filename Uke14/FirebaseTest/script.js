/*
 Legg inn egen klasse for username når de vises, og er registrert som users eller server.


Elevation parameter: 
0, unregistered user
1, registered user
2, admin user
3, server
 */

var config = {
    apiKey: "AIzaSyBuX8JXDmNLolyuF6Q0P5U9CT66DG_Lo_4",
    authDomain: "testing-av-firebase-5acb5.firebaseapp.com",
    databaseURL: "https://testing-av-firebase-5acb5.firebaseio.com",
    projectId: "testing-av-firebase-5acb5",
    storageBucket: "testing-av-firebase-5acb5.appspot.com",
    messagingSenderId: "98873862790"
};

let dict = {
    '<': '&lt;',
    '>': '&gt;'
};
firebase.initializeApp(config);
const db = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true };
db.settings(settings);
let chatLog = [];
let chatRooms = db.collection('chatrooms');
let room1 = chatRooms.doc('buzHycgehxiq9RRhu5W6').collection('messages');
writeToScreen();

//=================================================================================================================
// Functions
//=================================================================================================================

Date.prototype.today = function () {
    return ((this.getDate() < 10) ? "0" : "") + this.getDate() + "/" + (((this.getMonth() + 1) < 10) ? "0" : "") + (this.getMonth() + 1) + "/" + this.getFullYear();
}

// For the time now
Date.prototype.timeNow = function () {
    return ((this.getHours() < 10) ? "0" : "") + this.getHours() + ":" + ((this.getMinutes() < 10) ? "0" : "") + this.getMinutes() + ":" + ((this.getSeconds() < 10) ? "0" : "") + this.getSeconds();
}

function adminMessage(message) {
    writeToBase(room1, 'admin', 'ADMIN', message);
    writeToScreen();
}

function writeChat() {
    writeToBase(room1, 'unregistered');
    writeToScreen();
}

function escape(inputString) {
    let letters = inputString.split("");
    let output = '';
    for (let letter of letters) {
        output += mapping(letter);
    }
    return output;
}

function sigmoid(x) {
    return (1/(1 + Math.exp(x)))
}

function writeToBase(room, elevation, usrId=null, usrVal=null) {
    if(usrId === null) usrId = escape(document.getElementById('name').value);
    if(usrVal === null) usrVal = escape(document.getElementById('inputField').value);
    let timeVal = Date.now();
    //let timeVal = new Date().today() + " @ " + new Date().timeNow();
    let ids = [...chatLog].map(i => i.messageId);
    console.log(ids);
    let id = Math.floor(Math.random() * 999999999999);
    while (ids.indexOf(id) >= 0) {
        id = Math.floor(Math.random() * 999999999999);
    }
    room.doc('message' + id).set({
        time: timeVal,
        usr: usrId,
        message: usrVal,
        messageId: id,
        elevation: elevation
    })
        .then(writeChatBase)
        .catch(writeChatBase);
}

function writeToScreen() {
    // Enumerate through all rooms and write to screen
    document.getElementById('chat').innerHTML = '';
    room1.get().then(readChatBase).then(function () {
        for (msg of chatLog) {
            document.getElementById('chat').innerHTML += '<li><span class="timestamp hidden">' + String(new Date(msg.timestamp)).slice(0, 24) + '</span>\t<span class="' + msg.elevation + '">' + msg.user + '</span> said: ' + msg.message + '</li>'
        }
    });
}

function sortChatLog(log) {
    for (let message of log) {
        //sort by year
        //sort by month
        //sort by day
        //sort by hour
        //sort by minute
        //sort by second
        console.log(message.timestamp);
    }
}

function removeMessage(room, id) {
    room.doc('message' + id).delete().then(function () {
        console.log('Message ' + id + ' deleted');
    }).catch(function (error) {
        console.error('Error removing message id: ' + id);
    });
}

function nuke(room) {
    for (let x of [...chatLog].map(i => i.messageId)) { removeMessage(room, x) }
}

function nukeAll() {
    let rooms = [room1];
    for (let room of rooms) {
        nuke(room);
        console.log('Nuke complete, all messages removed');
    }
}

function mapping(i) {
    for (let word of Object.keys(dict)) {
        if (word === i) {
            return dict[word];
        }
    }
    return i;
}

//=================================================================================================================
// Callbacks
//=================================================================================================================


function getResponse(response, error) {
    // ReturnValue is the data given back by firestore when executing the callback.
    // This function logs all data in the database... 
    if (error) {
        throw error;
    } else {
        console.log(response)
        response.forEach(i => console.log(i.data()));
    }
}

function readChatBase(response, error) {
    //Reads the content of the chat database and writes it to the page
    console.log('read chat');
    if (!response) {
        console.log('Got nothing back...');
    } else {
        if (error) {
            throw error;
        } else {
            chatLog = [];
            console.log('Got something', response);
            response.forEach(
                function (element) {
                    //console.log(element.data());
                    chatLog.push({
                        user: element.data().usr,
                        timestamp: element.data().time,
                        message: element.data().message,
                        messageId: element.data().messageId,
                        elevation: element.data().elevation
                    });
                });

        }
    }
}

function writeChatBase(error) {
    if (error) {
        throw error;
    } else {
        console.log('Write operation complete');
    }
}