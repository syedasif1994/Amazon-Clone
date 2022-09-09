import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Stripe from "stripe";

// -------------------------Setup-------------------------

dotenv.config();
const app = express();
const port = process.env.PORT || 9000;
const stripe = new Stripe(process.env.STRIPE_KEY_SECRET);

// -------------------------Middlewares-------------------------

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// -------------------------Mongoose-------------------------

const url = process.env.DATABASE;
mongoose.connect(url).catch((err) => {
  console.log(err.stack)
  process.exit(1)
}).then(() => {
  console.log("Connect to MongoDb")
})

const PaymentSchema = mongoose.Schema({

});
const Order = mongoose.model("paymentcontents", PaymentSchema)

// -------------------------Router-------------------------

app.post('/payments/create', async (req, res) => {
  const total = req.query.total;
  console.log("Received Payment", total)
  const sesssion = await stripe.checkout.sesssions.create({
    submit_type:'pay',
    mode:"payment",
    payment_method_types:['card'],
    line_items: [
      {
        amount:total,
        currency: "Rs",
      },
    ],
  })
  res.send({
    clientSecret: sesssion.client_secret,
  });
})

app.get("/", (req, res) => {
  res.json("Server Started")
})

if (process.env.NODE_ENV === "production") {
  app.use(express.static("/client/build"));
}

// -------------------------Listener-------------------------

app.listen(port, () => {
  console.log(`Server is start now: ${port}`)
})