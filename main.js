//Yellow search bar drop down
$(document).ready("#yellowSearchIcon").click(function(){
    $('#searchBar').slideDown(200);
});

//add actual search functionality



// Home page call for all items
$.ajax({
  type: 'get',
  url: 'https://www.redbullshopus.com/products.json',
  success: function(response) {
    for(i=0; i < response.products.length; i++)
    	$('#container').append("<div class='wrap'>"
    	 + "<img class='productPhotos' src=" + (response.products[i].images[0].src) + ">" 
    	 + "<div class='product'>" + response.products[i].title + "</div>"
    	 + "</div>");
	}
});




// Call for mens items and places them into mens product container on mens page.
$.ajax({
  type: 'get',
  url: 'https://www.redbullshopus.com/products.json',
  success: function(response) {
    for(i=0; i<response.products.length; i++)
      if(response.products[i].tags.includes("Men")) {
    	$('#mensContainer').append("<div class='wrap'>"
    	 + "<img class='productPhotos' src=" + (response.products[i].images[0].src) + ">" 
    	 + "<div class='product'>" + response.products[i].title + "</div>"
    	 + "</div>");  
      }
  }
});



// Womens product call
$.ajax({
  type: 'get',
  url: 'https://www.redbullshopus.com/products.json',
  success: function(response) {
    for(i=0; i<response.products.length; i++)
      if(response.products[i].tags.includes("Women")) {
    	$('#womensContainer').append("<div class='wrap'>"
    	 + "<img class='productPhotos' src=" + (response.products[i].images[0].src) + ">" 
    	 + "<div class='product'>" + response.products[i].title + "</div>"
    	 + "</div>");  
      }
  }
});



