# Hificard project production
# step for installing project 

1-devlopement

# start server by cmd:
node_modules/.bin/nodemon --exec babel-node --presets stage-3 server/server.js

# start webpack server:
./node_modules/.bin/webpack-dev-server --hot --inline --no-info --colors

2-production

# start server by cmd:
node_modules/.bin/nodemon --exec babel-node --presets stage-3 server/server.js

# generate file client:
./node_modules/.bin/webpack-dev-server --hot --inline --no-info --colors
