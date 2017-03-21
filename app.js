//Search function
function search(){
     $("#search-form").submit(function (event) {
          event.preventDefault();
          getResults($("#search-term").val());
});
}


// This function gets the data from the YouTube API and displays it on the page
function getResults(searchTerm) {
     $.getJSON("https://www.googleapis.com/youtube/v3/search",
          {
               "part": "snippet",
               "key": "AIzaSyBgufq2j_g7-z-sPEllzjMoS0Izfk6hCuI",
               "q": searchTerm,
               "maxResults": 12
          },

          function (data) {
               if (data.pageInfo.totalResults === 0) {
                    alert("Sorry, there are no videos found with that title.");
               }
               // If no results, empty the list
               displayResults(data.items);
          }
     );
}

//Append results in ul
function displayResults(videos) {
     var html = "";
     $.each(videos, function (index, video) {
          // Append results li to ul
          html = html + "<li> <p class='result-title'>"
               + video.snippet.title
               +"</p> <a target='_blank' href='https://www.youtube.com/watch?v="
               + video.id.videoId
               + "'> <img src='"
               +  video.snippet.thumbnails.high.url
               + "'/> </a> </li>" ;
     });
     $("#search-results ul").html(html);
}




$(document).ready(function () {
     search();
	getResults();
     displayResults();
});
