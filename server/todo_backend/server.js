const express = require('express')
const mongoose  = require('mongoose')
const cors = require('cors')
const TodoRoute = require('./routes/todos')
const body_parser = require('body-parser')
require ('dotenv').config()

const app = express()
const port = process.env.PORT ||5000

app.use(cors())
app.use(express.json())
app.use(body_parser.json())

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{console.log("connectd to mongodb")})
.catch((err)=>{console.log("error creating databse",err)})

app.use('/api/todo', (req, res, next) => {
    console.log('API  Request received');
    next();
}, TodoRoute);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))