const express = require('express');
const router = express.Router();
const { query } = require("../database/db.fun")
const conf = require("../module/config.json")
const iupload = require("../module/iupload")
router.get("/", (req, res) => {
    res.render("admin/sign")
})

router.post("/", async(req, res) => {
    let h = req.body
    let users = await query("SELECT *FROM users WHERE usr=? and psw=md5(?)", [h.usr, h.psw])
    if (users.length == 0) return res.render("admin/sign")
    req.session.userid = users[0].id
    res.redirect("/admin/home")
})

router.use("/", (req, res, next) => {
    if (req.session.userid) return next();
    res.redirect("/")
})

router.get("/home", (req, res) => {
    res.render("admin/index")
})


router.get("/lang", async(req, res) => {
    let langs = await query("SELECT *FROM lang WHERE action=1");
    res.render("admin/lang", { langs })
})


router.get("/lang/delete/:id", async(req, res) => {
    await query("UPDATE lang SET action=0 WHERE id=?", [req.params.id]);
    res.redirect("/admin/lang")
})

router.get("/lang/add", async(req, res) => {
    res.render("admin/lang-add")
})

router.post("/lang/add", [iupload], async(req, res) => {
    let h = req.body
    await query("INSERT INTO lang (name_lang,icon_lang,type) value(?,?,?)", [h.name, req.filename, h.type])
    res.redirect("/admin/lang")
})


router.get("/arcticle", async(req, res) => {
    let arcticle = await query("SELECT *FROM arcticle");
    res.render("admin/arcticle", { arcticle })
})

module.exports = router;