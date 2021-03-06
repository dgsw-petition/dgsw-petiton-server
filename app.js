const express=require('express');
const app=express();
const server=require('http').createServer(app);
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const db=require('./database')
app.use(morgan('dev'));

app.use(cors({
    origin:true,
    credentials:true
}));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended:false
}));

app.use('/api',require('./routes'));

server.listen(80,()=>{
    db();
    console.log('server running 80 port');
})