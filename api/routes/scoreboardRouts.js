const express = require("express");
const router = express.Router();
const {
  CREATE_SB,
  EDIT_SB_NAME,
  EDIT_SB_DIREC,
  GET_ALL_SB,
  GET_SB_BY_ID,
} = require("../controllers/scoreboardControler");

router.post("/createScoreboard", CREATE_SB);

router.put("/editScoreboardName/:id", EDIT_SB_NAME);

router.put("/editScoreboardDirection/:id", EDIT_SB_DIREC);

router.get("/getAllScoreboards", GET_ALL_SB);

router.get("/getScoreboardById/:id", GET_SB_BY_ID);

module.exports = router;
