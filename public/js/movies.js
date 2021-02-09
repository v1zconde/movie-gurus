$(document).ready(function() {
    console.log('movies.js loaded')
    let searchForm = $("form.search");
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    searchForm.on("submit", function( event ) {
        event.preventDefault();
        console.log( "Handler for .submit() called." );


  });
});