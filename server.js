const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
var cors = require('cors');

const users = require("./routes/api/users");
const workers = require("./routes/api/employees");

const app = express();

//BodyParser Middleware
app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());
//Database config
const db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true }
)
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));
//Passport Middleware
app.use(passport.initialize());

//passport config
require("./config/passport")(passport);

//Routes
app.use('/api/users', users);
app.use('/api/employees', workers);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server is up and runnning on port " + port));