const express = require('express');
const app = express();
const val = require('./mongoconnection/mongos.js');
val();
// const cookie = require('cookie-parser');
const rout = require('./routes/routes_user');
const routpost = require('./routes/post');
const bodyParser = require('body-parser');
// const cors = require('cors');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// app.use(cors({credentials:true,origin:"http://localhost:3000"}));
// app.use(cors());
app.use('/rout',rout);
app.use('/routpost',routpost);
// app.use(cookie());


// app.get('/', (req,res) =>{
//     res.send('hello there worked ....???');
// });

// SERVER PUSHING TO HEROKU
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*',(req,res) => {
      res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
  }

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('server is running....');
})