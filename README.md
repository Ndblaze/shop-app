# SHOP-APP
An e-commerce website that . . . more about this later.

## Setup Instructions
* Download and Install Nodejs here https://nodejs.org/en/
* Install yarn globally if you don't already have it with `npm install -g yarn`
* Downloand MongoDB Community server from: https://www.mongodb.com/try/download/community
* Be sure to check the `install mongodb as a service option` to have the mongodb server running in the background as a service.
* Clone project with `git clone git@github.com:barman47/shop-app.git`
* Install client and server dependencies by executing `npm run install-deps` from the project root (<b>Recommended</b>). Or you execute `npm install` from the project root to install server dependencies and then cd into the client directory and execute `yarn` to install client dependencies.
* Set environment variables by creating a `.env` file in the root of the project and request for the variables from other members of the team.
* Run application with `npm run dev` from the root directory
If you see an error the first time you run the project, exit the process by pressing `ctrl + c` or `cmd + c` and execute the command again.
* Optionally, you can download MongoDB Compass to easily preview the contents of the database from https://www.mongodb.com/products/compass
<hr>

Alternatively you can run the server with `npm run start:server`
And client by changing into the client directory and running `yarn start` or `npm start`