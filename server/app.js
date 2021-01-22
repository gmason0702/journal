require("dotenv").config();
let express = require("express");
let app = express();
const sequelize = require("./db");

let journal = require("./contollers/journalcontroller");
let user = require("./contollers/usercontroller");

sequelize.sync();
app.use(require("./middleware/headers"));
app.use(express.json());

app.use("/user", user);

// app.use(require("./middleware/validate-session"));
app.use("/journal", journal);

app.listen(3000, function () {
  console.log("App is listening on port 3000");
});
