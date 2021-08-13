const path = require("path");
const fs = require("fs");

let GetFile = (msg, conf) => {
    if (!msg.length) return conf.app.TEXT
    try {
        data = fs.readFileSync(path.join(__dirname, `../html/${msg[0].url}.html`), { encoding: "utf-8" });
        return data;
    } catch (e) {
        return conf.app.TEXT
    }

}

module.exports = GetFile