var http = require('http');
//var $ = require("jQuery");
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );




const { default: firebase } = require("firebase");
firebase.initializeApp({
   databaseURL: "https://client-order-c2e84-default-rtdb.firebaseio.com"
 });

 var zavtraki = firebase.database().ref("name/");

zavtraki.on('child_added', function (snapshot) {
snapshot.forEach(function (snapshot) {
  var zavtrak = snapshot.val();

 document.write("title" + zavtrak.title);
$("#name").append(zavtrak.title);
document.getElementById("name").innerHTML=zavtrak.title;

 });
});