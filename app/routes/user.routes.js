module.exports = app => {
    const user = require("../controllers/user.controller.js");
    var router = require("express").Router();

    router.post("/login", user.login);
    router.post("/register", user.register);
    router.get("/", user.findAll);
    router.get("/:id", user.findOne);
    router.put("/:id", user.update);
    router.delete("/:id", user.delete);
    router.delete("/", user.deleteAll);

    app.use('/api/users', router);
};