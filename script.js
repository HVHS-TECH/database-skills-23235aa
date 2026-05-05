/**************************************************************
 **************************************************************
 **                                                          **
 ** script.js is where you will write most of your code.     **
 **                                                          **
 **************************************************************
 **************************************************************/

const HTML_OUTPUT = document.getElementById("databaseOutput");

/**************************************************************/
// helloWorld()
// Demonstrate a minimal write to firebase
// This function replaces the entire database with the message "Hello World"
// 
// This uses the set() operation to write the key:value pair "message":"Hello World"
// The ref('/') part tells the operation to write to the base level of the database "/"
// This means it replaces the whole database with message:Hello World
/**************************************************************/
function helloWorld(){
  console.log("Running helloWorld()")
  firebase.database().ref('/').set(
    {
      message: 'Kia ora'
    }
  )
}
function goodbye(){
  console.log("Running goodbye()")
  firebase.database().ref('/').set(
    {
      message:'Ka kite ano'
    }
  )
}
function simpleRead(){
  console.log("Reading message");
  firebase.database().ref('/').child('message').once('value', displayRead);
  console.log("Leaving simpleRead")
}

function displayRead(snapshot){
  var dbData = snapshot.val();
  if(dbData == null){// if there is no data the database will be null
console.log('There was no record when trying to read the message')
  }
  else{
    console.log("The message is: " + dbData)
  }
  console.log("Running displayRead() , the message is " + snapshot.val())
  HTML_OUTPUT.innerHTML = snapshot.val()
}
function safeRead(){
  console.log("Reading message");
  firebase.database().ref('/').child('message').once('value', display , fb_readError);
  console.log("Leaving safeRead")
}
function display(snapshot){
var dbData = snapshot.val();
if (dbData == null){ //if there is no data, dbData will be null.
  console.log('There was no record when trying to read the message');
}
else{
  console.log("The message is: " + dbData)
  HTML_OUTPUT.innerHTML = snapshot.val()
}
}
function fb_readError(error){
  console.log("There was an error reading reading the message");
  console.error(error);
};
function fb_readListener(){
  console.log("Read Listener");
  firebase.database().ref('/game1/users').on('value' , fb_logDatabaseRead , fb_readError);
};
var dbData;
function fb_logDatabaseRead(snapshot){
dbData = snapshot.val();
if (dbData == null){
  console.log('There was no record when trying to read the message')
}
else{
  console.log(dbData);
  let names = Object.keys(dbData);
  console.log(names);
  HTML_OUTPUT.innerHTML + snapshot.val()
}
}
//firebase.database().ref('/').set(
  //{
    //game1:{
      //users:{
        //Dhruv:9999,
        //Jack:100000,
        //Toby:9,
        //Yug:987654321,
      //}
    //}
  //}
//)
  highscoreTable = {
    game1:{
      users:{
        Dhruv: 99999,
        Jack: 10000,
        Micheal:"3.141",
        Sasha: 0.5,
        Yug:987654321
      }
    },
    game2:{
      users:{
  Dhruv: 13,
  Jack: 14,
  Mikela: 7,
  Sasha: 3,
  Yug: 12
      }
    }
  }
  firebase.database().ref('/').set(highscoreTable)
firebase.database().ref('/game1/users/Jenna/').set(676767676)
let user = "Toby";
let score = "89";
firebase.database().ref('/game1/users/'+user).set(
  score
);
function fb_readHighScores(){
  console.log("Reading high scores");
  firebase.database().ref('/game1').once('value' , fb_logDatabaseRead , fb_readError)
}