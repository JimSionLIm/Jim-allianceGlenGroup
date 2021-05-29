const member = require("./member");
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

app = express();
app.use(cors());
app.use(bodyparser.json());


app.use(member.router);

app.listen(4000);
