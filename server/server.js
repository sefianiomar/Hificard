/* @flow weak */

import express from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import path from 'path';
import process from 'process';
import flash from 'req-flash';
import session from 'express-session';
import auth from './auth'; // Authentication server
import getLocalIP from '../scripts/getLocalIP'
import graphql from '../graphql/server'; // GraphQL server
import log from './log';
import {name,version} from '../configuration/package'
import serverExtensions from '../configuration/server/serverExtensions'
import webapp from '../webapp/server'; // Isomorphic React server


// Read environment
require( 'dotenv' ).load( );
const startupInformation =
{
  name:                 name,
  version:              version,

  NODE_ENV:             process.env.NODE_ENV,
  HOST:                 process.env.HOST,
  PORT:                 process.env.PORT,
  PUBLIC_URL:           process.env.PUBLIC_URL,

  process_title:        process.title,
  process_pid:          process.pid,
  local_ip:             getLocalIP( ),
}

// Log starting application, also print to console
log.log( 'info', 'Starting application', startupInformation );
console.log( startupInformation )

// Main router
let router = express( );

// Add headers
router.use(function (req, res, next)
{
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', process.env.PUBLIC_URL);
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

router.set( 'trust proxy', 'loopback' );
router.set( 'x-powered-by', false );

router.use( compression( ) );
router.use( cookieParser( ) );
router.use(session({ secret: '123' }));
router.use(flash());
// GraphQL server
router.use( '/graphql', graphql );

// Authentication server
router.use( '/', auth );

// Static assets server
let oneYear = 365*86400000;
router.use( express.static( path.resolve( __dirname + '/../public/' ), { maxAge: oneYear } ) );

// Add extensions - custom configurations
serverExtensions( router )

// Application with routes
router.use( '/*', webapp );

let server = router.listen( process.env.PORT, process.env.HOST );

export default server;
