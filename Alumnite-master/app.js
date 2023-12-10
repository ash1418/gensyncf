const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');
//const db = require('./config/mongoose');
const mongoose = require('mongoose');
var sockets = require('./server/loaders')
const router = require('./server/routes');
const emailTransported = require('./emailTransporter');
const session = require("cookie-session");
require('dotenv').config();
require("colors");


const PORT = process.env.PORT || 4000;

const app = express();

const userRoutes = require("./server/routes/doubtRoute/user");
const questionRoutes = require("./server/routes/doubtRoute/questions");
const searchRoutes = require("./server/routes/doubtRoute/search");
const commentRoutes = require("./server/routes/doubtRoute/comments");
const godmode = require("./server/routes/doubtRoute/godmode");
const localauth = require("./server/middleware/localauth");
const passport = require("passport");
const auth = require("./server/middleware/auth");


app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload());
app.use('/', router);
app.use(session({ secret: "secret" }));

app.use(passport.initialize());
app.use(passport.session());
app.get("/getData",(req,res)=>{
    res.send("Hello");
})

app.use('/uploads', express.static(__dirname +'/uploads'));

    app.use("student/doubtSection/user", userRoutes);
	app.use("student/doubtSection/question", questionRoutes);
	app.use("student/doubtSection/comment", commentRoutes);
	app.use("student/doubtSection/search", searchRoutes);
	app.use("student/doubtSection/godmode", godmode);

mongoose.set('useFindAndModify', false);
// mongoose.connect(
//     process.env.MONGODB_URI, 
//     {
//         useNewUrlParser : true,
//         autoIndex: true
//     }
// );
mongoose.connect('mongodb://localhost/admimmm',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4
 
 }).catch(error => {
    console.error("MongoDB connection error:", error);
});
const connection = mongoose.connection;
connection.once('open', function(){
    console.log("MongoDB connection established successfully.");
})

const server = app.listen(PORT, function(){
    console.log("Server is running on port : ", PORT );
});

sockets.init(server);

module.exports = app;