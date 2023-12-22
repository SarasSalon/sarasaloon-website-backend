const express = require("express");
const app = express();
var cors = require('cors')
let PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions ={
  origin:'*', 
  allowHeaders:['http://localhost:5173'],
}

app.use(cors(corsOptions)) // Use this after the variable declaration

const sendMail = require("./controllers/sendMail");

app.get("/", (req, res) => {
  res.send("I am a server");
});

app.post("/mail", sendMail);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`I am live in port no.  ${PORT}`);
    });
  } catch (error) {}
};

start();
