function giphyURLWithSearchTerm(searchTerm) {
    
    return "https://api.giphy.com/v1/stickers/search?q="+searchTerm+"&api_key=dc6zaTOxFJmzC";
     
    // write a function that will return a url for the giphy API with
    // the searchTerm provided in the parameters
   }


function appendImageToBody(srcURL) {
    // write a function that will append an <img> to the body with the
    // URL provided in the parameters
    $('body').append('<img src=' + srcURL + '>');
    
}

function callGiphyAPIWithSearchTerm(searchTerm) {
    $.ajax({
      url: giphyUrlWithSearchTerm(searchTerm) ,
      method: "GET",
      success: function(response) {
           var url = response.data[0].images.original.url;
           appendImageToBody(url);
      },
    }); 
}

//Add a click handler below to call the function when the button is clicked

   
  $("button").click(function() {
var searchTerm = $("input").val;
 callGiphyAPIWithSearchTerm(searchTerm);
});