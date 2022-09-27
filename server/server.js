const express = require('express');
const app = express();
const port = 3500;
const bodyParser = require('body-parser');
var cors = require('cors')

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

const routes = require('./settings/routes')
routes(app)

app.listen(port, () => {
	console.log(`App listen on port ${port}`);
})