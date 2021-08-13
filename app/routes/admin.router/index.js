const express = require("express")
const router = express.Router()
const { query } = require("../../database/db.fun")


// router send sms
router.get("/", async(req, res) => {
    res.render("admin/index", { userd: req.userd })
})


// router users
router.get("/users", async(req, res) => {
    let data = await query("SELECT users.*,DATE_FORMAT(udate, '%d:%m:%Y') as adate FROM users")
    res.render("admin/users", { userd: req.userd, data: data })
})

// router users add
router.get("/users/add", async(req, res) => {
    let gruh = await query("SELECT *FROM gruh")
    res.render("admin/users-add", { userd: req.userd, gruh: gruh })
})


// router users add
router.post("/users/add", async(req, res) => {
    let { fio, address, username, user_type, gruh, password, udate, phone, get_address, get_ttj, kg } = req.body
    console.log(req.body)
    await query("INSERT INTO users (fio,address,username,user_type,gruh_id,password,udate,phone,get_address,get_ttj,kg) value (?,?,?,?,?,md5(?),?,?,?,?,?)", [fio, address, username, parseInt(user_type), parseInt(gruh), password, udate, phone, get_address, get_ttj, kg])
    res.redirect("/admin/users")
})


// router group
router.get("/group", async(req, res) => {
    let data = await query("SELECT *FROM gruh")
    res.render("admin/gruh", { userd: req.userd, data: data })
})

// router send sms
router.get("/group/add", async(req, res) => {
    res.render("admin/gruh-add", { userd: req.userd })
})


// router send sms
router.post("/group/add", async(req, res) => {
    let { name, cours } = req.body
    await query("INSERT INTO gruh (name,cours) value (?,?)", [name, cours])
    res.redirect("/admin/group")
})





module.exports = router;