const express = require('express');
const router = express.Router();
const { query } = require("../database/db.fun")
const conf = require("../module/config.json")
const GetFile = require("../module/fun.get.file")

/* get index */
router.get('/', async(req, res) => {
    let lang = await query("SELECT *FROM lang WHERE action=1");
    res.render('public/lang', { lang });
});

/* get 404 */
router.get('/404', async(req, res, next) => {
    res.render('basic/404');
});

/* get lang */
router.get('/:lang', async(req, res, next) => {
    let navbar = await query("SELECT nav_bar.*,arcticle.url FROM nav_bar ,lang,arcticle WHERE lang.id=nav_bar.lang_id and arcticle.id=nav_bar.arcticle_id and lang.type=?", [req.params.lang])
    if (navbar.length == 0) return res.redirect("/404");
    res.render('public/index', { navbar, lang: req.params.lang, message: conf.app.TEXT });
});

/* get lang url */
router.get('/:lang/:url', async(req, res, next) => {
    let navbar = await query("SELECT nav_bar.*,arcticle.url FROM nav_bar ,lang,arcticle WHERE lang.id=nav_bar.lang_id and arcticle.id=nav_bar.arcticle_id and lang.type=?", [req.params.lang])
    let message = await query("SELECT *FROM arcticle WHERE url=?", [req.params.url])
    if (navbar.length == 0) return res.redirect("/404");
    res.render('public/index', { navbar, lang: req.params.lang, message: GetFile(message, conf) });
});




module.exports = router;