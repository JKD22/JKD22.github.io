  // search bar functionality
    $("#buttonId").on("click", function(){
      searchValue = $("#searchBar").val();
      var gifBtn = $("<button>").addClass("gifBtnClass btn btn-default");

      gifBtn.prepend(searchValue);

    $("#gifButtons").append(gifBtn);

    console.log(searchValue);
    //gif button functionality
      $(".gifBtnClass").on("click", function() {
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          searchValue + "&api_key=6NKQJTUnlWSFTjEXnpayvw16KJ75iBfH&limit=10";
          $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function(response) {
          var results = response.data;
          console.log(response);
          
          for (var i = 0; i < 10; i++) {
            var gifDiv = $("<div>");
              var searchImage = $("<img>");
  
              searchImage.attr("src", results[i].images.fixed_height.url);
  
              gifDiv.html(searchImage);
  
              $("#gifDisplay").prepend(gifDiv);
            }
        });
      });
    });