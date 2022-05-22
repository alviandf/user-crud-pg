const express = require("express");
const app = express();

// Parse requests of content-type - application/json
app.use(express.json());
// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({
    extended: true
}));

const db = require("./app/models");
db.sequelize.sync();

// Simple route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to @Alviandf application."
    });
});

require("./app/routes/user.routes.js")(app);

// Set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});