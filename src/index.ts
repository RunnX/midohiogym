import express from "express";
import path from "path";
const app = express();
const port = process.env.PORT || 8080;

// tslint:disable-next-line:no-console
console.log(`dirname=${ __dirname }`);
// Configure Express to use EJS
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

// Configure Express to serve static files in the js folder
app.use('/bootstrap', express.static( path.join( __dirname, "bootstrap" ) ) );
app.use('/css', express.static( path.join( __dirname, "css" ) ) );
app.use('/fonts', express.static( path.join( __dirname, "fonts" ) ) );
app.use('/img', express.static( path.join( __dirname, "img" ) ) );
app.use('/js', express.static( path.join( __dirname, "js" ) ) );

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    // render the index template
    res.render( "index" );
} );

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
