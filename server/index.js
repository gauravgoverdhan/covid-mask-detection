require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = parseInt(process.env.SALT_ROUNDS);

const app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const maskSchema = new mongoose.Schema ({
    timestamp: String, 
    result: String
});

const adminSchema = new mongoose.Schema ({
    email: String,
    password: String
});
  
const Admin = mongoose.model("Admin", adminSchema);
const Mask = mongoose.model("Mask", maskSchema);

app.post("/adminlogin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    Admin.findOne({email: username}, (err, foundUser) => {
        if (err) {
            console.log(err);
        } else {
        if (foundUser) {
                bcrypt.compare(password, foundUser.password, (err, result) => {
                    if (result === true) {
                        res.json({
                            isLogged: true
                        });
                    } else {
                        res.json({
                            isLogged: false
                        });
                    }
                });
            } else {
                res.json({
                    isLogged: false
                });
            }
        }
    });
});

app.post("/maskdetection", (req, res) => {
    console.log(req.body);
    
});

let port = process.env.PORT;
if (port == null || port == "") 
    port = 3001;

app.listen(port, () => {
    console.log("Server started on port " + port);
});