const express =  require("express");
const bodyParser =  require("body-parser").json();
const mailer = require("nodemailer");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(bodyParser);

app.use(express.static(path.join(__dirname, "/build")));

// GET to index serves the built file
app.get("/", (req,res)=>{
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
