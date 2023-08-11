const ObjectId = require('mongoose').Types.ObjectId;
const ScoreboardResultSchema = require('../models/resultModel');
const ScoreboardSchema = require('../models/scoreboardModel');

// creating result
module.exports.CREATE_SB_RESULT = (req, res) => {
  const result = new ScoreboardResultSchema({
    scoreboard_id: req.body.scoreboard_id,
    points: req.body.points,
    title: req.body.title,
  });

  result.save().then((result) => {
    console.log(result);

    ScoreboardResultSchema.findOneAndUpdate(
      { _id: result._id },
      {
        id: result._id,
      }
    ).exec();

    console.log(result._id.toString());
    ScoreboardSchema.find({ _id: req.body.scoreboard_id }).then((results) => {
      return res.status(200).json({ scoreboards: results });
    });

    ScoreboardSchema.updateOne(
      { _id: req.body.scoreboard_id },
      { $push: { results_ids: result._id.toString() } }
    ).exec();
  });
};

// editing result title by id
module.exports.EDIT_TITLE = (req, res) => {
  ScoreboardResultSchema.findByIdAndUpdate(req.params.id, {
    title: req.body.editedTitle,
  }).exec();
  return res.status(200).json({ statusMessage: 'Eddited successfully.' });
};

// geting all results
module.exports.GET_RESULTS = (req, res) => {
  ScoreboardResultSchema.find({}).then((results) => {
    return res.status(200).json({ allResults: results });
  });
};

//geting all result by scoreboard id

module.exports.GET_SB_RESULTS = async function (req, res) {
  const data = await ScoreboardSchema.aggregate([
    {
      $lookup: {
        from: 'results',
        localField: 'results_ids',
        foreignField: 'id',
        as: 'scoreboard_results',
      },
    },
    {
      $match: { _id: ObjectId(req.params.id) },
    },
  ]).exec();

  const scoreDirection = data[0].scoreDirection;

  function sorting(SC) {
    switch (SC) {
      case 'DESC':
        sorted = data[0].scoreboard_results.sort((a, b) => a.points - b.points);
        break;

      case 'ASC':
        sorted = data[0].scoreboard_results.sort((a, b) => b.points - a.points);
    }
    return sorted;
  }

  return res.status(200).json({ scoreboard: sorting(scoreDirection) });
};

// testing other option
module.exports.GETRESULUTSSB = (req, res) => {
  const scoreboardId = req.params.id;

  ScoreboardResultSchema.find({ scoreboard_id: scoreboardId })
    .sort([[`points`, -1]])
    .exec((err, docs) => {
      return res.status(200).json({ scores: docs });
    });
};
