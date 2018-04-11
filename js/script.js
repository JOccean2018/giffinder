function giphyURLWithSearchTerm(searchTerm) {
    // write a function that will return a url for the giphy API with
    // the searchTerm provided in the parameters
    
}

function appendImageToBody(srcURL) {
    // write a function that will append an <img> to the body with the
    // URL provided in the parameters
    console.log(srcURL)
    $('#newGif').append('<img src=' + srcURL + '>');
}

function callGiphyAPIWithSearchTerm(searchTerm) {
    $.ajax({
      url: "https://api.giphy.com/v1/stickers/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC",
      method: "GET",
      success: function(response) {
           var url = response.data[2].images.original.url;
           appendImageToBody(url);
      },
    }); 
}


//Add a click handler below to call the function when the button is clicked
$("button").click(function (searchTerm) {
    var searchTerm = $("input").val();
    callGiphyAPIWithSearchTerm(searchTerm);
    $('h1').empty();
});

    