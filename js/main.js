$(document).ready(function(){
  $("#searchSubmit").on("click", function(){
    searchWiki();
  });
  
  $("#searchResult").html(cardCreate);
});

//function to create cards
function cardCreate(){
'<div class="well">' +
'<h3>' + "name" + '</h3>' +
'<p>' + 'content' + '</p>' + 
'</div>';  
}
function searchWiki(){
  $.ajax({
    url: "https://en.wikipedia.org/w/api.php?",
    data:{
      action: "query",
      format: "json",
      list: "search",
      utf8: "1",
      srsearch: "peanut%20butter"      
    },
    type: "GET",
    dataType: "jsonp",
    success: function(data){
      console.log(data);
    }
    
  });
}