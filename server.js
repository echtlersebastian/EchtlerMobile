const express =  require("express");
const mailer = require("nodemailer");
const cors = require("cors");
const path = require("path");
require('./db-connection')();
require('dotenv/config');
const bodyParser = require('body-parser');
const booking = require('./routes/booking');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, "/build")));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.get('/', (req, res) => res.send('Hello World'));
app.use('/booking', booking);

app.get("/buchung", (req,res)=>{
    console.log("GET index")
    res.sendFile(path.join(__dirname, "/build", "index.html"))
})

app.get("/fotos", (req,res)=>{
    console.log("GET index")
    res.sendFile(path.join(__dirname, "/build", "index.html"))
})

// Accept POST for mailing
app.post("/contactus", (req, resp)=>{
    console.log("asdasd")
    const message = req.body.message;
    const sender = req.body.sender;
    const name = req.body.name
    const phone = req.body.phone;

    console.log(`incoming request: 
    name    : ${name}
    sender  : ${sender}
    message : ${message}`);

    let transport = mailer.createTransport({
        host : "smtp.strato.de",
        port : 465,
        auth : {
            user : "info@echtler-mobile.de",
            pass : "I#NBY47^zs"
        }
    });

    const body = `Neue Anfrage von ${name} (${sender} / ${phone})
    Nachricht: ${message}`;

    transport.sendMail({
        from : 'info@echtler-mobile.de',
        to :   'info@echtler-mobile.de',
        subject : 'Neue Anfrage von ' + name,
        text : body
    }).then((result)=>{
        if(result.error){
            console.log(result.error);
            resp.sendStatus(500);
        }

        resp.sendStatus(200);
    }).catch((err)=>{
        console.log(err);
        resp.sendStatus(500);
    })
} )

app.listen(3001, () =>{
    console.log("running");
});
