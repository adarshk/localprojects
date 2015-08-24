// (function(){

	$(".btn-game").click(function(event) {
		$(".btn-admin").hide();
	});

	$(".btn-admin").click(function(event) {

		$.ajax({
			url: "/admin",
			type: 'GET',
			dataType: "html",
			success: function(data){
				console.log("success");
				console.log(data);
				/*$(".section-game").hide();
				$(".section").append();*/
			},
			error: function(){

			},
			});

			/*.then(function() {

			console.log("success");

			}).fail(function(){
				console.warn("Error fetching data. Invalid URL");
				// showError();
			});*/


	});

	// var admin = "hi";

	$.ajax({
			url: "/getallquestions",
			type: 'GET',
			success: function(data){
				console.log("success");
				console.log("got");
				console.log(data);
				/*$(".section-game").hide();
				$(".section").append();*/
			},
			error: function(){
				console.log("error");
			},
			});

// })();