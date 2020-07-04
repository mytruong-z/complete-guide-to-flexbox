const express  = require('express');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.set('views','./views');
app.set('view engine', 'ejs');

app.get('/', require('./routes/index'));
app.use(express.static('public'));

app.listen(port);
console.log(`Server is listening on port ${port}`);