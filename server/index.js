const express = require('express');
const cors = require(`cors`);
const path = require('path');
const ctrl = require('./controller');

const app = express();

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 4005;


app.get('https://sd-deployment-lab.herokuapp.com/api/hikers', ctrl.getHikers)



app.listen(port, () => {
    console.log(`listening on port ${port}`)
})