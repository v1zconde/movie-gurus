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
      let searchData = movieSearchInput
     
      // let searchData = {
      //   title: movieSearchInput
      // };
  
      if (movieSearchInput) {
        searchMoviesTitle(movieSearchInput);
      }
      if (genreSearchInput) {
        searchMoviesGenre(genreSearchInput);
      }
      if (prefActorsInput) {
        searchMoviesDirector(prefActorsInput);
      }
      if (yearSearchInput) {
        searchMoviesYear(yearSearchInput);
      }
     
      // if (genreSearchInput) {
      //   searchData.genreSearch = genreSearchInput;
      // }
      // if (prefActorsInput) {
      //   searchData.prefActors = prefActorsInput;
      // }
      // if (yearSearchInput) {
      //   searchData.yearSearch = yearSearchInput;
      // }

      // If we have an email and password we run the loginUser function and clear the form
   
      $("#moviesSearch").val("");
      $("#genreSearch").val("");
      $("#prefActors").val("");
      $("#yearSearch").val("");
return
});

function searchMoviesTitle(searchData) {
	// const url = "/api/search/" + $.param(searchData);
   const url = "/api/search/title/" + searchData;
	console.log("URL:", url);
	search(url).then(function (data) {
		console.log("Movie search completed successfully");
		window.location.href = url;
	}).catch(function(error) {
		console.log("Movie search failed", error);
	});
}


// AJAX http request for recipe search
function search(searchParam) {
	return $.ajax({
		url: searchParam,
		type: "GET",
	});
}

function searchMoviesYear(searchData) {
	// const url = "/api/search/" + $.param(searchData);
   const url = "/api/search/year/" + searchData;
	console.log("URL:", url);
	search(url).then(function (data) {
		console.log("Movie search completed successfully");
		// window.location.href = url;
    console.log(data)
      var list;
    if (data.length > 4) {
      list = 4;
    }
    else{
      list = data.length;
    }
    for (i = 0; i < list; i ++) {
    var section = $("#suggestions")
    var card = $("<div>").addClass("card").attr("style", "width: 18rem;")
    var body = $("<div>").addClass("card-body")
    var title = $("<h5>").addClass("card-title").text(`
    ${data[i].title}
    ${data[i].country}
    ${data[i].duration}
    ${data[i].type}
    `)
    var text = $("<p>").addClass("card-text").text(`Description: ${data[i].description}`)
   
    body.append(title, text)
    card.append(body)
    section.append(card)
  }
 

	}).catch(function(error) {
		console.log("Movie search failed", error);
	});
}

function searchMoviesDirector(searchData) {
	// const url = "/api/search/" + $.param(searchData);
   const url = "/api/search/director/" + searchData;
	console.log("URL:", url);
	search(url).then(function (data) {
		console.log("Movie search completed successfully");
		window.location.href = url;
	}).catch(function(error) {
		console.log("Movie search failed", error);
	});
}

function searchMoviesGenre(searchData) {
	// const url = "/api/search/" + $.param(searchData);
   const url = "/api/search/genre/" + searchData;
	console.log("URL:", url);
	search(url).then(function (data) {
		console.log("Movie search completed successfully");
		window.location.href = url;
	}).catch(function(error) {
		console.log("Movie search failed", error);
	});
}

});
