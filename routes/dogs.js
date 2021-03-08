const { Router } = require("express");
const controllers = require("../controllers/dogs");
const restrict = require("../helpers/restrict");

const router = Router();

router.get("/", controllers.getDogs);
router.get("/:id", controllers.getDog);
router.post("/", restrict, controllers.createDog);
router.post("/", restrict, controllers.createDog);
router.put("/:id", restrict, controllers.updateDog);
router.delete("/:id", restrict, controllers.deleteDog);

module.exports = router;
