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
app.get("/buchung", (req,res)=>{
    console.log("GET index")
    res.sendFile(path.join(__dirname, "/build", "index.html"))
})


app.post("/buchung2", (req, resp)=>{
    
    console.log("asdasd")    
    const vorname =req.body.vorname;
    const nachname =req.body.nachname;
    const geburtsdatum =req.body.geburtsdatum;
    const firma =req.body.firma;
    const straße =req.body.straße;
    const plz =req.body.plz;
    const ort =req.body.ort;
    const land =req.body.land;
    const telefon =req.body.telefon;
    const fax =req.body.fax;
    const email =req.body.email;
    const startDate =req.body.startDate;
    const endDate =req.body.endDate;

    console.log(vorname);
    
 
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://MongoDBUser:ZQjwpLG4cdA3IvvY@echtler-mobile-mp8sd.azure.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("Echtler-Mobile").collection("Buchungen");
  var booking = {
    vorname : req.body.vorname,
    nachname : req.body.nachname,
    geburtsdatum : req.body.geburtsdatum,
    firma : req.body.firma,
    straße : req.body.straße,
    plz : req.body.plz,
    ort : req.body.ort,
    land : req.body.land,
    telefon : req.body.telefon,
    fax : req.body.fax,
    email : req.body.email,
    startDate : req.body.startDate,
    endDate : req.body.endDate
}

  // Insert the student data into the database
  collection.insert(booking, function (err, result){
    if (err) {
      console.log(err);
      resp.sendStatus(500)
    } 
    resp.sendStatus(200);

    // Close the database
    client.close();
  });
})


}

)


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
