const express = require('express');
const app = express();
const path = require("path")
const PORT = require("./app/module/config.json").app.PORT

// Qo'shimcha ......
const fileUpload = require('express-fileupload');
const cookieParser = require("cookie-parser");
const session = require("express-session");
const FileStore = require("session-file-store")(session)

// Session
app.use(cookieParser("sevgi nima . zo'r qo'shiq cfcc"));
app.use(session({
    secret: "sevgi nima . zo'r qo'shiq cfcc",
    resave: false,
    saveUninitialized: false,
    store: new FileStore({ path: __dirname + './session-store' }),
    cookie: { maxAge: 3600000, secure: false, httpOnly: false }
}))


//ejs yaratim .
app.set('view engine', 'ejs');
//settings .
app.use(express.json()).use(express.urlencoded({ extended: false })).use(express.static(path.join(__dirname, 'public'))).use(fileUpload());;

//router
app.use('/', require("./app/app"));

//listin
app.listen(PORT, "192.168.1.12", () => {
    console.log(`Create server : ${PORT}`)
})