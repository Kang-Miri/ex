var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var ejs = require("ejs");

var app = express();

app.set("views", __dirname + "/views");
app.set("view engine","ejs");
app.engine("html", ejs.renderFile);

app.use(express.static("assets"));

app.use(cookieParser());
app.use(session({
    secret : "abcdefg",
    resave : false,
    saveUninitialized :true
}));



var router1 = require('./router/router1')(app);

var server = app.listen(2000, function(){
    console.log("포트 2000번으로 서버 실행");
});