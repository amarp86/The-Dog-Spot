const { Router } = require("express");
const dogsRouter = require("./dogs");
const usersRouter = require("./users");

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/", usersRouter);
router.use("/dogs", dogsRouter);

module.exports = router;
