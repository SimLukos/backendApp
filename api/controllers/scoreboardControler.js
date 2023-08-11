// schema
const ScoreboardSchema = require('../models/scoreboardModel');

//creating scoreboard
module.exports.CREATE_SB = (req, res) => {
  const scoreboard = new ScoreboardSchema({
    name: req.body.name,
    dateCreated: new Date(),
    results_ids: [],
    scoreDirection: req.body.scoreDirection,
  });

  scoreboard.save().then((result) => {
    return res.status(200).json({ response: 'Scoreboard is cretated.' });
  });
};

//editing scoreboard name
module.exports.EDIT_SB_NAME = (req, res) => {
  ScoreboardSchema.updateOne(
    { _id: req.params.id },
    { name: req.body.editedName }
  ).then((result) => {
    return res.status(200).json({
      statusMessage: 'Eddited successfully',
      editedScoreboard: result,
    });
  });
};

// editing scoreboard direction
module.exports.EDIT_SB_DIREC = async (req, res) => {
  const currentScoreboard = await ScoreboardSchema.findOne({
    _id: req.params.id,
  }).exec();
  console.log(currentScoreboard);

  function direction(value) {
    switch (value) {
      case 'ASC':
        value = 'DESC';
        break;
      case 'DESC':
        value = 'ASC';
    }
    return value;
  }

  ScoreboardSchema.updateOne(
    { _id: req.params.id },
    {
      scoreDirection: direction(currentScoreboard.scoreDirection),
    }
  ).then((result) => {
    return res.status(200).json({
      statusMessage: 'Eddited successfully',
      editedScoreboard: result,
    });
  });
};

// getting all scoreboards
module.exports.GET_ALL_SB = (req, res) => {
  ScoreboardSchema.find({}).then((results) => {
    return res.status(200).json({ scoreboards: results });
  });
};

// getting scoreboard by id
module.exports.GET_SB_BY_ID = (req, res) => {
  ScoreboardSchema.findById(req.params.id).then((result) => {
    return res.status(200).json({ scoreboard: result });
  });
};
