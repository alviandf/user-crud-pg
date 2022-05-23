import express from 'express';
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

import db from "./app/models/index.js";
db.sequelize.sync();

// Simple route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to @Alviandf application."
    });
});

import userRoutes from "./app/routes/user.routes.js";
userRoutes(app);

// Set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});