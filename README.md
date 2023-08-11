# BackendApp

This backEnd app is used for making scoreboards and saving results in them.
Results can be sorted by ages in descending or ascending order.

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
