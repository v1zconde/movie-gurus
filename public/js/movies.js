const db = require("/models");
let movieSearch = $("input#movieSearch");
let genreSearch = $("input#genreSearch");
let prefActors = $("input#prefActors");
let yearSearch = $("input#yearSearch");

$(document).ready(function() {
  console.log('movies.js loaded')
  let searchForm = $("form.search");
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  searchForm.on("submit", function( event ) {
      event.preventDefault();
      console.log( "Handler for .submit() called." );
      let searchData = {
        movieSearch: movieSearch.val().trim(),
      };
  
      if (!searchData.movieSearch) {
        return;
      }
      if (genreSearch.val()) {
        searchData.genreSearch = genreSearch.val().trim();
      }
      if (prefActors.val()) {
        searchData.prefActors = prefActors.val().trim();
      }
      if (yearSearch.val()) {
        searchData.yearSearch = yearSearch.val().trim();
      }

      // If we have an email and password we run the loginUser function and clear the form
      search(searchData);
      genreSearch.val("");
      prefActors.val("");
      yearSearch.val("");

});

function search(searchData) {
  // $.get("/api/movies", {
  //   genre: genre,
  //   actors: actors,
  //   year: year
  // })
  //   .then(function(data) {
  //     console.log("searching")
  //     db.Movies.findAll()
  //     // If there's an error, log the error
  //   })
  //   .catch(function(err) {
  //     console.log(err);
  //   });

  app.get("/api/movies", function (req, res) {
		db.Movies.findAll({
			where: req.body
		}).then(function (movies) {
			res.json(movies);
      console.log(movies);
		});
	});

}



});