'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:       process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,

  // Server port
  port:     process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            8080,

  // MongoDB connection options
  mongo: {
    uri:    //process.env.MONGODB_URI ||
            //process.env.MONGOLAB_URI ||
            //process.env.MONGOHQ_URL ||
            //process.env.OPENSHIFT_MONGODB_DB_URL+process.env.OPENSHIFT_APP_NAME ||
            'mongodb://localhost/tttime' 
            //mongodb://heroku_mx279h6b:1dftcdhd4i8bodfegc6p4gp3v0@ds117348.mlab.com:17348/heroku_mx279h6b
  }
};