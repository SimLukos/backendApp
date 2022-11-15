const express = require("express");
const router = express.Router();
const {
  CREATE_SB_RESULT,
  EDIT_TITLE,
  GET_RESULTS,
  GET_SB_RESULTS,
} = require("../controllers/resultsControler");

router.post("/createScore", CREATE_SB_RESULT);

router.put("/editTitle/:id", EDIT_TITLE);

router.get("/getAllResults", GET_RESULTS);

router.get("/getAllResultsByScoreboardId/:id", GET_SB_RESULTS);

module.exports = router;
