require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

// connexion MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Atlas connecté ✅"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("Backend RatCMS OK 🚀");
});

app.get("/data", (req, res) => {
    res.send("Donnée venant du backend 🚀");
});

app.listen(3000, () => {
    console.log("Serveur lancé sur http://localhost:3000");
});