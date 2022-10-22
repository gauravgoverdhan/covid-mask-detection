# covid-mask-detection
Mask detection app to reduce human intervention in health protocols.

## Built with

* HTML
* CSS
* JavaScript
* [Bootstrap](https://getbootstrap.com/)
* [React.js](https://reactjs.org/)
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)

## Getting started

### Prerequisites

You should have the following things installed:

* Node
* npm
* MongoDB
* Git

To run this project in your system follow these steps by running the commands in your CLI:

* Open your working directory and run:

```
git clone https://github.com/gauravgoverdhan/covid-mask-detection.git
```

* Make sure to create a .env file with authentications keys from the following:

```
SALT_ROUNDS=10
MONGO_CONNECT=mongodb://localhost:27017/maskDB
MODEL_SERVER={model-server-url}
```

* Start your Mongo server by running:

```
mongod
```

* Navigate into the server directory and run:

```
npm i
npm start
```

* Navigate into the client directory and run:

```
npm i
npm start
```

* The app should open in your browser, if not open the following in your browser:

```
http://localhost:3000
```
