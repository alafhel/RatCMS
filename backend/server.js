const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); // 🔥 en haut

const app = express();
app.use(cors());
app.use(express.json());

// 🔗 connexion MongoDB
mongoose.connect("mongodb+srv://adil:1234@projetpfa.lqic6y7.mongodb.net/ratcms?appName=ProjetPFA")
.then(() => console.log("MongoDB Atlas connecté ✅"))
.catch(err => console.log(err));

// routes
app.get("/", (req, res) => {
    res.send("Backend RatCMS OK 🚀");
});

app.get("/data", (req, res) => {
    res.send("Donnée venant du backend 🚀");
});

// serveur
app.listen(3000, () => {
    console.log("Serveur lancé sur http://localhost:3000");
});