// Requiring our models and passport as we've configured it
let db = require("../models");
let passport = require("../config/passport");
const movies = require("../models/movies");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function () {
        res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
  //movies routes
  app.get("/api/movies", function (req, res) {
    
    db.Movies.findAll({}).then(function (movies) {
      console.log(JSON.stringify(movies[0]));
      // res.json(movies);
     res.render('movies', {movies:movies})
    });

  })


  app.get("/api/search/title/:title", function (req, res) {
    console.log(req.params.title)
    

    db.Movies.findAll({
      where: {title: req.params.title}
    }).then(function (movies) {
       res.render('suggestion', {movies:movies})
        //  res.json(movies);
      // console.log(movies)
    });
  });


  app.get("/api/search/year/:year", function (req, res) {
    console.log(req.params.year)
    
    db.Movies.findAll({
      where: {release_year: req.params.year}
    }).then(function (movies) {
      //  res.render('suggestion', {movies:movies})
          res.json(movies);
      console.log(movies)
    });
  });
  app.get("/api/search/director/:director", function (req, res) {
    console.log(req.params.director)
    
    db.Movies.findAll({
      where: {director: req.params.director}
    }).then(function (movies) {
       res.render('suggestion', {movies:movies})
        //  res.json(movies);
      // console.log(movies)
    });
  });

  app.get("/api/search/genre/:genre", function (req, res) {
    console.log(req.params.genre)
    
    db.Movies.findAll({
      where: {listed_in: req.params.genre}
    }).then(function (movies) {
       res.render('suggestion', {movies:movies})
        //  res.json(movies);
      // console.log(movies)
    });
  });

};




