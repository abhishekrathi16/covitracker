# CoViTracker

This app was created in order to simplify the tracking of cases, deaths and recoveries from COVID-19 for all countries.
It utilizes two major COVID-19 apis for fetching the data: https://disease.sh/v3/covid-19/historical/ and https://api.covid19api.com/summary 
The frontend is supported by React and the data is fetched from the backend by axios.

## Client folder
Client folder contains files for the frontend. To get started with the app:

### Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Available Scripts

In the project directory [covitracker/ client], run:

##### `yarn && yarn start`

It installs are the necessary packages and runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

##### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### Deployment

This app was deployed to Netlify at this [link](https://covitracker-opslyft.netlify.app/)


## Database Writer folder and Server Folder

The main idea of this app was to take data from the afore-mentioned apis and add them to a database, then create another api endpoint and fetch the necessary data from there. 
The idea however couldn't be implemented properly. The database writer was created perfectly and works pretty good. I will probably expand it as a seperate project in the future and implement few more features to it.

### Getting started with Database Writer

#### Available Scripts:

##### `yarn` - will install all dependencies needed to run the file 

##### `yarn start` - runs the command `nodemon index.js` and writes in the database

Before running the app, create a `.env` folder and add MONGO_URI in it in order to create a database with a named collection and set up your models in /models folder and /writer folder.

### Getting started with Server folder
The Server folder was created to fetch data from the MongoDB collection using [express-graphql] (https://graphql.org/graphql-js/running-an-express-graphql-server/)
This was not properly implemented as it didn't fetch the query as I wanted.
You are free to contribute to it, fix the app and get it running.
You can add mutations and add code that implements the logic which will fetch data from a pre-exisiting database collection.
Contact me regarding this on abhi16#3157 on discord. 

#### Available Scripts
### Getting started with Database Writer

#### Available Scripts:

##### `yarn` - will install all dependencies needed to run the file 

##### `yarn start` - starts GraphiQl at http://localhost:5000/graphql 


The frontend part also uses GraphQL but wasn't implemented perfectly. I created a [GraphQL API](https://ap-south-1.aws.realm.mongodb.com/api/client/v2.0/app/covidstats-dimtt/graphql) using MongoDB Realm and wrote the rules and schema for the query fetch. Also, I implemented most of the code to fetch the data, but the issue I faced was that I couldn't set up the authorisation for the users who would try to fetch data from the api in the frontend, hence couldn't move ahead with it and had to use [Axios](https://www.npmjs.com/package/axios) for fetching the details. If you think you can help me with the authorization part, do contribute!
Also, any additions from your side will be helpful!
Thank You!
You can find the website hosted [here](https://covitracker-opslyft.netlify.app/)
