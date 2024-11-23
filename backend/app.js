require("dotenv").config()


const express = require('express')
const app = express()
const session = require("express-session")
const PORT = process.env.PORT||5050
const mongoose = require('mongoose')
const passport = require("passport")
const LocalStrategy = require("passport-local")
const User = require('./models/user');
const cors = require("cors")


mongoose.connect(process.env.MONGODB)


//cookie
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    }
}))

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(express.json())
app.use(cors({origin:"http://localhost:5173", credentials:true}))

app.post("/signup", async(req,res)=>{
    try{
        const {username, email, password} = req.body
        await User.register(new User({username,email}),password)
        res.status(201).json({message:"user registered succesfully"})
    } catch (err) {
        console.log(err)
        res.status(201).json({message:"user mission faild"})
    }
})

app.post('/login',passport.authenticate('local'),(req, res) =>{

      res.status(200).json({message:"user login succesfully"})
    
    });

app.listen(PORT)