const express = require('express');
const cors = require(`cors`);
const path = require('path');
const ctrl = require('./controller');

const app = express();

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'cc99ab9d2b5a467eb95297b8e6fb4af0',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Connected')

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 4005;


app.get('/api/hikers', ctrl.getHikers)



app.listen(port, () => {
    console.log(`listening on port ${port}`)
})