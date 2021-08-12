const express =require("express")
const app =express()

//public www router
app.use("/",require("./routes/public"))

//admin router
// app.use("/",require("./routes/public.js"))

module.exports = app;