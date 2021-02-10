$(document).ready(function() {
let searchForm = $("form.search");

  console.log('movies.js loaded')


  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  searchForm.on("submit", function( event ) {
      event.preventDefault();
      let movieSearchInput = $("#moviesSearch").val().trim();
      let genreSearchInput = $("#genreSearch").val().trim();
      let prefActorsInput = $("#prefActors").val().trim();
      let yearSearchInput = $("#yearSearch").val().trim();
      console.log( "Handler for .submit() called." );
      console.log(movieSearchInput);
      let searchData = {
        movieSearch: movieSearchInput
      };
      console.log(searchData.movieSearch)
      if (!searchData.movieSearch) {
        console.log(searchData.movieSearch + "testing")
        console.log(movieSearchInput.val())
        return;
      }
      if (genreSearchInput) {
        searchData.genreSearch = genreSearchInput;
      }
      if (prefActorsInput) {
        searchData.prefActors = prefActorsInput;
      }
      if (yearSearchInput) {
        searchData.yearSearch = yearSearchInput;
      }
    console.log(searchData);
      // If we have an email and password we run the loginUser function and clear the form
      // searchMovies(searchData);
      movieSearchInput.val("");
      genreSearchInput.val("");
      prefActorsInput.val("");
      yearSearchInput.val("");

});

// function searchMovies(searchData) {
// 	const url = "/api/search/" + $.param(searchData);
// 	console.log("URL:", url);
// 	search(searchData).then(function (data) {
// 		console.log("Recipe search completed successfully");
// 		window.location.href = url;
// 	}).catch(function(error) {
// 		console.log("Recipe search failed", error);
// 	});
// }

// // AJAX http request for recipe search
// function search(searchParam) {
// 	return $.ajax({
// 		url: searchParam,
// 		type: "GET",
// 	});
// }



});