const Rollbar = require("rollbar")
const hikers = require(`./db.json`)

module.exports = {
    getHikers: (req,res) => {
        res.status(200).send(hikers)
        Rollbar.info('hiker list was requested')
    }
}