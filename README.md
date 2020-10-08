# PerspectiveTool

### `Stack Used`
`React` for Frontend & `NodeJS + Mysql` for Backend
- At the beginning I wanted to use serverless architecture and host my APIs in `lambda function` the only thing that stopped me is I was not sure if you will want to run the cloudformation script in your account or not.
- The task took way more than 3 hours, many functionalities could have been added to database like questions for instance, while it is not hard at all I preferred to just load them from json file right now.
- One thing I didn't understand much from docs is when we have perfect balanced answers `"We should default to first in list"` which list? for me I am currently defaulting to the first entry in Dimension and getting first letter like E in EI.

### `Frontend`

- Navigate to `frontend` folder
- Run `npm install` to install all dependencies.
- Once done you can run `npm start` to start the server.
- The server will use port `3000`
- Backend URL can be changed from `frontend/Api.js` file.


### `Backend`
- Navigate to `backend` folder.
- You need to update the connection strings for database, you will find it in `db/mysql.js`
- You also need to import the sql file located in same folder to create the database & users table.
- Run `npm install` to install all dependencies.
- Once done you can run `npm start` to start the server.
- The server will use port `4000`
- Questions are saved in a json file located in backend root.
- I've added 3 simple test-cases for APIs using `Mocha`, you can run them using `npm test`


### `What is done?`
- You should be able to see list of questions in homepage.
- The system validate both answers and email before being able to save it to database.
- Once saved you will be redirected to your result page.
- All answers are saved and linked to the email address.
- I am saving the user's email address and answers in a `JSON` format.
- If user exists, system will update current user else will create a new one.
- The logic behind the Perspective Tool mostly works perfectly, tried all test cases and all work except 1, honestly I think it is a wrong testcase because manually I was never been able to achieve the result provided.
- The test-case D is the failing one, mostly in JP part only.
