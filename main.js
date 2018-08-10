$.ajax({
  type: 'get',
  url: 'https://www.redbullshopus.com/products.json',
  success: function(response) {
    for(i=0; i < response.products.length; i++)
		$('#container').append("<img class='productPhotos' src=" + (response.products[i].images[0].src) + ">"),
		$('#container').append("<div class='product'>" + response.products[i].title + "</div>");
}
})