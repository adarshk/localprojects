window.onload = load;


// (function(){
function load(){

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


	$("td").hover(function() {
		// $(this).css("background-color","#D9D0BF");
		$(this).addClass('active');
	}, function() {
		$(this).removeClass('active');
		// $(this).css("background-color","white");
	});



var data = [{
    token: "Income Tax",
    value: 1,
    value2: 2
}, {
    token: "Education level",
    value: 4,
    value2: 5
}, {
    token: "Public health",
    value: 7,
    value2: 9
}, {
    token: "Entrepreneurship",
    value: 2,
    value2: 7
}, {
    token: "Community Art",
    value: 1,
    value2: 1
}, {
    token: "Immigration",
    value: 5,
    value2: 2
}];

var names = ["Income Tax","Education Level","Public health","Entrepreneurship","Community Art","Immigration"];
var values1 = [1,4,7,2,6,5];
var values2 = [2,5,9,7,1,2];

var margin = {
    top: 30,
    right: 10,
    bottom: 10,
    left: 10
},
width = 500 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var spaceMargin = 80;

var x = d3.scale.linear()
    .range([0, width])

var y = d3.scale.ordinal()
    .rangeRoundBands([0, height], .2);

var y2 = d3.scale.ordinal()
         .domain(names)
         .rangeBands([10, height]);

var x3right = d3.scale.ordinal()
         .domain(values1)
         .range([0, width]);

var y3right = d3.scale.ordinal()
         .domain(values1)
         .rangeBands([10, height]);

var y3 = d3.scale.ordinal()
         .domain(values2)
         .rangeBands([10, height]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("top");

var svg = d3.select("#viz").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

x.domain([-10,10])
y.domain(data.map(function (d) {
    return d.token;
}));

svg.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", function (d) {
    return spaceMargin + x(Math.min(0, d.value));
})
    .attr("y", function (d) {
    return y(d.token);
})
    .attr("width", function (d) {
    return Math.abs(x(d.value) - x(0));
})
    .attr("height", y.rangeBand());

svg.selectAll(".bar2")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar2")
    .attr("x", function (d) {
    return x(Math.min(0, -d.value2)) - spaceMargin ;
})
    .attr("y", function (d) {
    return y(d.token);
})
    .attr("width", function (d) {
    return Math.abs(x(-d.value2) - x(0));
})
    .attr("height", y.rangeBand());

/*svg.selectAll("text.leftscore")
        .data(values2)
        .enter().append("text")
        .attr("x", function(d) { return width - x(d) - spaceMargin;})
        .attr("y", function(d, z){ return y3(d) + y3.rangeBand() / 2; } )
        .attr("dx", "10")
        .attr("dy", ".20em")
        .attr("text-anchor", "end")
        .attr('class', 'leftscore')
        .text(String);

svg.selectAll("text.rightscore")
        .data(values1)
        .enter().append("text")
        .attr("x", function(d) { return x3right(d) +  spaceMargin; })
        .attr("y", function(d,z){ return y3right(d) + y3right.rangeBand()/2; } )
        .attr("dx", -5)
        .attr("dy", ".36em")
        .attr("text-anchor", "end")
        .attr('class', 'score')
        .text(String);*/

svg.selectAll("text.name")
        .data(names)
        .enter().append("text")
        .attr("x", width / 2)
        .attr("y", function(d){ return y2(d) + y2.rangeBand() / 2;} )
        .attr("dy", ".20em")
        .attr("text-anchor", "middle")
        .attr('class', 'name')
        .text(String);

/*svg.append("g")
    .attr("class", "x axis")
    .call(xAxis);*/

/*svg.append("g")
    .attr("class", "y axis")
    .append("line")
    .attr("x1", x(0))
    .attr("x2", x(0))
    .attr("y2", height);*/


function type(d) {
    d.value = +d.value;
    return d;
}


}