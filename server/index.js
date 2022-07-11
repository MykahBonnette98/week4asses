const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')
const { createName } = require('./controller')
const { delName } = require('./controller')
const { getAge } = require('./controller')

app.get("/api/compliment", getCompliment)
app.get("/api/fortune", getFortune)
app.post("/api/createUser", createName)
app.put("/api/delUser/:name", delName)
app.get("/api/age", getAge)

app.listen(4000, () => console.log("Server running on 4000"));



