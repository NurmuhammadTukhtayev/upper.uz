let upload = (req, res, next) => {


    let fileName = new Date() + Math.random();
    const sha256 = require("sha256")
    fileName = sha256(fileName.toString())

    // console.log(fileName)
    if (!(req.files && req.files.file)) {
        return res.redirect("/admin");
    }

    // Tekshrish
    let sampleFile = req.files.file;
    let mimi = req.files.file.mimetype.split("/");

    if (sampleFile.size > 1000000000) {
        return res.redirect("/admin");
    }

    sampleFile.mv(require("path").join(__dirname, `../../public/lang/${fileName}.${mimi[1]}`), async(err) => {
        req.filename = fileName + "." + mimi[1];
        next()
    })

}

module.exports = upload