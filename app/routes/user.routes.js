import * as user from "../controllers/user.controller.js";
import express from "express";

export default app => {
    var router = express.Router();

    router.post("/login", user.login);
    router.post("/register", user.register);
    router.get("/", user.findAll);
    router.get("/:id", user.findOne);
    router.put("/:id", user.update);
    router.delete("/:id", user.deleteById);
    router.delete("/", user.deleteAll);

    app.use('/api/users', router);
};