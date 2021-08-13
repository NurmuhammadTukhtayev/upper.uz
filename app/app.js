const express = require("express")
const app = express()

// admin router
app.use("/admin", require("./routes/admin.js"))

//public www router
app.use("/", require("./routes/public"))


module.exports = app;