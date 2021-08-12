const express = require('express');
const app = express();

//ejs yaratim .
app.set('view engine', 'ejs');
//settings .
app.use(express.json()).use(express.urlencoded({ extended: false })).use(express.static(path.join(__dirname, 'public')));

//router
app.use('/', require("./app/app"));

//listin
app.listen(port,()=>{
  console.log(`Create server :`)
})
