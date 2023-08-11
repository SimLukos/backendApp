# BackendApp

This backEnd app is used for making scoreboards and saving results in them.
Results can be sorted by points in descending or ascending order.

## Running the app:

Before running the app, you have to be installed Node.js.
When using my source code, make sure to run
`npm install` in the extracted folder.

To start application run`npm start`.
Application runs on port 3000 by default. It can be changed at index.js file.

### A few samples of requests at some EndPoints:

#### /createScoreboard

`{
  "name": "Bowling",
  "scoreDirection": "ASC"
}`  
Choosing scoreBorads name and scores direction (descending 'DESC' or ascending 'ASC').

#### /createScore

`{
  "scoreboard_id": "<scoreBoardsID>",
  "points": 100,
  "title": "James Bond"
}`  
Saving score to specific scoreBoard.

#### /getAllResultsByScoreboardId/<scoreBoardsID>

GET request to get results from the specific ScoreBoard.

Output example:  
`{
  "scoreboard": [
    {
      "_id": "6373a5b145d946c847c468a8",
      "scoreboard_id": "6373a52a45d946c847c4689d",
      "points": 99,
      "title": "Daniel",
      "__v": 0,
      "id": "6373a5b145d946c847c468a8"
    },
    {
      "_id": "6373a5d245d946c847c468b2",
      "scoreboard_id": "6373a52a45d946c847c4689d",
      "points": 25,
      "title": "James Bond",
      "__v": 0,
      "id": "6373a5d245d946c847c468b2"
    },
    {
      "_id": "6373a5bf45d946c847c468ad",
      "scoreboard_id": "6373a52a45d946c847c4689d",
      "points": 11,
      "title": "Magnusen",
      "__v": 0,
      "id": "6373a5bf45d946c847c468ad"
    }
  ]
}`
