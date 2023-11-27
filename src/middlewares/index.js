const cookieParser = require("cookie-parser");
const cors = require('cors');
const express = require("express");
const { LOCAL_CLIENT, CLIENT, LOCAL_CLIENT1 } = require("../config/defaults");

const applyMiddleware = (app)=>{
    
// middleware
app.use(cors({
    origin: [
        LOCAL_CLIENT,
        CLIENT,
        LOCAL_CLIENT1
    ],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
}

module.exports = applyMiddleware