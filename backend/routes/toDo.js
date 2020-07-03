const express = require("express");
const router = express.Router();
const Thing = require('../models/Things');
const toDoCtrl = require('../controllers/toDo');

router.post("/", toDoCtrl.createThing)
router.put("/:id", toDoCtrl.modifyThings);
router.get("/:id", toDoCtrl.getOneThings);
router.delete("/:id", toDoCtrl.deleteThing);
router.use("/", toDoCtrl.getAllThings);

module.exports = router;
