const db = require('../models/poolsModel.js');
userController = {};

userController.createUser = async(req, res) => {
    try {
      // destructure user info from response from server.js
      const { name, ext_urls, access_token, refresh_token } = res.locals.userProfile;
      // Query our database to check if user that is logging in exists
      // if user spotify link doesn't exist in our database
      const findUserQuery = `SELECT * FROM "public"."user" WHERE spotify_uri = '${ext_urls}'`; //grabs the access token in the params if it exists in the user db 

      const findUserResults = await db.query(findUserQuery) // if user exists, it returns array with user data, if user doesn't exist, it returns an empty array 

      if (!findUserResults.rows.length) { // this checks if the array is empty or if it contains the user 
      
      // insert new user into user table
      const createUserQuery = `INSERT INTO "public"."user" (name, acc_token, ref_token, spotify_uri)
      VALUES ('${name}', '${access_token}', '${refresh_token}', '${ext_urls}')`;
      
      const results = await db.query(createUserQuery);
      }
      
    }
    catch (err) {
      console.log(err)
    }
}

userController.getUser = async(req, res, next) => {
  try {
    // front end is sending a request with an access token 
    // destructure access token from req.body 
    const { access_token } = req.body;
    // look into database and find a user's access token that matches the access token from the req body 
    const query = `SELECT * FROM "public"."user" WHERE acc_token = '${access_token}'`;
    //results
    const results = await db.query(query);
    // if we find it, we want to return all of that user's data and save that object to res.locals as user 
    if (results.rows.length) {
      res.locals.user = results.rows[0];
      console.log(res.locals.user);
    }
    return next();
    
  }
  catch (err) {
    next(err);
  }
}



module.exports = userController;