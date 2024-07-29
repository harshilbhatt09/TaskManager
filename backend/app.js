const express = require("express");
const app = express();
require("dotenv").config();
require("./conn/conn")
const cors = require("cors");
const UserAPI = require("./routes/users")
app.use(cors())
app.use(express.json());

app.use("/api/v1", UserAPI);
app.use("/", (req, res) => {
    res.send("Hello from backend");
})

const PORT = 1000;

app.listen(PORT, () => { console.log("server started") })