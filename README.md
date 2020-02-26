# Matt's Node Mongo Boilerplate
This is a dead simple Node.js with Express.js and MongoDB boilerplate using Babel and Nodemon.

## Requirements
- Yarn v1+
- Node v11.10+

## How to run
### Without Docker
1. Install the dependencies: `yarn`
2. Put a JWT key and a URL for your Mongo database in a env file
3. Start the dev server: `yarn dev`

### With docker-compose
1. Run the command `docker-compose -f docker-compose.dev.yml up`

## Production mode
Running `yarn build` webpack will build the app into a `dist` folder and then express server will be started.
