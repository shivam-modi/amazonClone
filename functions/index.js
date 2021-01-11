const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51I4jNXI6PI1ipyIB7zcI46NCN8MNzJmgDbS68J5WqqZFPzAkRKW8TVNe8QqHznoCrQCAzUNBk5zCXJ2WIeIovcVb00oXs00Tqb');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

//App config
const app = express();
//Middlewares

app.use(cors({origin: true}));
app.use(express.json());

//API routes

app.get('/', (request, response) => response.status(200).send('Hi from blue hat'))

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;

    console.log('Payment method recieved', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // sub units of currency
        currency: "usd"
    });
     // Ok -created
    res.status(201).send({
        clientSecret: paymentIntent.client_secret 
    });
})

//Listen
exports.api = functions.https.onRequest(app)

// http://localhost:5001/azclone-1/us-central1/api