const e = require("expres");
const hikers = require(`./db.json`)

module.exports = {
    getHikers: (req,res) => {
        res.status(200).send(hikers)
    }
}