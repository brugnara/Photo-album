var obj;
$.getJSON('http://jsonplaceholder.typicode.com/albums', function( data ) {
	var items = [];
	$.each( data, function( key, value ) {
		obj = value;
  		items.push( "<a href='#' id='" + key + "' class='list-group-item link' val='"+value.title+"'>" + value.title + "</a>" );
  	});
	$( "<div/>", {
			"class": "list-group",
			"id": "album",
			html: items.join( "" )
		}).appendTo( ".primo" );
	})
	.always(function(data) {
	$(function() {
		$(".link").click(function(){
			$('.alb').css('display','none');
			$('.foto').css('display','block');
			var id = $(this).attr("id");
			var titolo = $(this).attr("val");
			$('.secondo').append('<div class="col-md-12" id="titolo"><h1>'+titolo+'</h1></div>');
			$.getJSON('http://jsonplaceholder.typicode.com/photos', function( data ) {
				var items = [];
				$.each( data, function( key, value ) {
					if (value.albumId == id) { 
  						items.push("<div class='col-md-3 item'><a href='#' class='thumbnail'><img class='img-responsive' src='"+value.thumbnailUrl+"' ind='"+value.url+"' value='"+value.title+"'><p>'"+value.title+"'</p></a></div>");
  					}
  				});
				$( "<div/>", {
					"class": "col-md-12",
					"id": "foto",
					html: items.join( "" )
				}).appendTo( ".secondo" );
			})
			.always(function(data) {
				$(function(){
					$('.img-responsive').click(function(){
						$('.foto').css('display','none');
						var im = $(this).attr('ind');
						var tit = $(this).attr('value');
						$('.immagine').append('<img class="img-responsive" src='+im+'><br><h3>'+tit+'</h3>');
						$('.immagine').css('display','block');
					});
				});
			});
      })
	});
});

