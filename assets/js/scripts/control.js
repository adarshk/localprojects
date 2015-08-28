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


	/*$("td").hover(function() {
		// $(this).css("background-color","#D9D0BF");
		$(this).addClass('active');
	}, function() {
		$(this).removeClass('active');
		// $(this).css("background-color","white");
	});*/

	$(".td-yes").click(function(event) {
		var parentCl = $(this).parents().children(':first-child')[0].className;
		// console.log(associations[parentCl]);
		animate(vals[parentCl], "yes");
	});

	$(".td-no").click(function(event) {
		var parentCl = $(this).parents().children(':first-child')[0].className;
		// console.log(associations[parentCl]);
		animate(vals[parentCl], "no");
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
    value: -7,
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

var names = ["Income Tax","Education Level","Public health","Entrepreneurship","Community Art","Immigration", "Crime"];
var values1 = [1,4,7,2,6,5,3];
var values2 = [2,5,9,7,1,2,3];


var vals = {

	"td-1":[{

			token: "incometax",
			yesValue: 5,
			noValue: -3
		},

		{

			token: "education",
			yesValue: 3,
			noValue: -4

		},

		{
			token: "health",
			yesValue: 2,
			noValue: -5
		},

		{
			token: "entrepreneurship",
			yesValue: 3,
			noValue: -1
		},

		{
			token: "art",
			yesValue: -3,
			noValue: 4
		},

		{
			token: "immigration",
			yesValue: 0,
			noValue: 0
		},

		{
			token: "crime",
			yesValue: -3,
			noValue: 4
		}],

		"td-2":[{

			token: "incometax",
			yesValue: -2,
			noValue: 4
		},

		{

			token: "education",
			yesValue: 5,
			noValue: -2

		},

		{
			token: "health",
			yesValue: 4,
			noValue: -1
		},

		{
			token: "entrepreneurship",
			yesValue: -4,
			noValue: 3
		},

		{
			token: "art",
			yesValue: -1,
			noValue: 0
		},

		{
			token: "immigration",
			yesValue: -1,
			noValue: 1
		},

		{
			token: "crime",
			yesValue: 0,
			noValue: 0
		}],

		"td-3":[{

			token: "incometax",
			yesValue: 3,
			noValue: -1
		},

		{

			token: "education",
			yesValue: -2,
			noValue: 1

		},

		{
			token: "health",
			yesValue: 4,
			noValue: -6
		},

		{
			token: "entrepreneurship",
			yesValue: 1,
			noValue: 0
		},

		{
			token: "art",
			yesValue: 0,
			noValue: 0
		},

		{
			token: "immigration",
			yesValue: 0,
			noValue: 0
		},

		{
			token: "crime",
			yesValue: -4,
			noValue: 2
		}],

		"td-4":[{

			token: "incometax",
			yesValue: 4,
			noValue: 0
		},

		{

			token: "education",
			yesValue: 2,
			noValue: -1

		},

		{
			token: "health",
			yesValue:0,
			noValue: 0
		},

		{
			token: "entrepreneurship",
			yesValue: 1,
			noValue: -2
		},

		{
			token: "art",
			yesValue: 6,
			noValue: -3
		},

		{
			token: "immigration",
			yesValue: -1,
			noValue: 3
		},

		{
			token: "crime",
			yesValue: 2,
			noValue: -1
		}],

		"td-5":[{

			token: "incometax",
			yesValue: 5,
			noValue: -1
		},

		{

			token: "education",
			yesValue: 7,
			noValue: -4

		},

		{
			token: "health",
			yesValue:2,
			noValue: -1
		},

		{
			token: "entrepreneurship",
			yesValue: 4,
			noValue: -3
		},

		{
			token: "art",
			yesValue: 2,
			noValue: -1
		},

		{
			token: "immigration",
			yesValue: 3,
			noValue: -1
		},

		{
			token: "crime",
			yesValue: -4,
			noValue: 2
		}],

		"td-6":[{

			token: "incometax",
			yesValue: 2,
			noValue: -1
		},

		{

			token: "education",
			yesValue: 1,
			noValue: -1

		},

		{
			token: "health",
			yesValue: 3,
			noValue: -1
		},

		{
			token: "entrepreneurship",
			yesValue: 5,
			noValue: -3
		},

		{
			token: "art",
			yesValue: 1,
			noValue: 0
		},

		{
			token: "immigration",
			yesValue: 6,
			noValue: -4
		},

		{
			token: "crime",
			yesValue: 4,
			noValue: 3
		}],

		"td-7":[{

			token: "incometax",
			yesValue: 5,
			noValue: -4
		},

		{

			token: "education",
			yesValue: 3,
			noValue: -6

		},

		{
			token: "health",
			yesValue: 1,
			noValue: 0
		},

		{
			token: "entrepreneurship",
			yesValue: 1,
			noValue: 1
		},

		{
			token: "art",
			yesValue: 4,
			noValue: -5
		},

		{
			token: "immigration",
			yesValue: 1,
			noValue: -2
		},

		{
			token: "crime",
			yesValue: 0,
			noValue: 0
		}],

		"td-8":[{

			token: "incometax",
			yesValue: 2,
			noValue: -4
		},

		{

			token: "education",
			yesValue: 1,
			noValue: -3

		},

		{
			token: "health",
			yesValue: 6,
			noValue: -5
		},

		{
			token: "entrepreneurship",
			yesValue: 2,
			noValue: -3
		},

		{
			token: "art",
			yesValue: 0,
			noValue: 0
		},

		{
			token: "immigration",
			yesValue: 1,
			noValue: -1
		},

		{
			token: "crime",
			yesValue: 4,
			noValue: -4
		}],

		"td-9":[{

			token: "incometax",
			yesValue: -4,
			noValue: 3
		},

		{

			token: "education",
			yesValue: -5,
			noValue: 6

		},

		{
			token: "health",
			yesValue: 0,
			noValue: 0
		},

		{
			token: "entrepreneurship",
			yesValue: 0,
			noValue: 0
		},

		{
			token: "art",
			yesValue: 0,
			noValue: 0
		},

		{
			token: "immigration",
			yesValue: -2,
			noValue: 2
		},

		{
			token: "crime",
			yesValue: 7,
			noValue: -2
		}],

		"td-10":[{

			token: "incometax",
			yesValue: 6,
			noValue: -4
		},

		{

			token: "education",
			yesValue: 4,
			noValue: -2

		},

		{
			token: "health",
			yesValue: 3,
			noValue: -1
		},

		{
			token: "entrepreneurship",
			yesValue: 2,
			noValue: -3
		},

		{
			token: "art",
			yesValue: 2,
			noValue: -2
		},

		{
			token: "immigration",
			yesValue: 0,
			noValue: 0
		},

		{
			token: "crime",
			yesValue: -5,
			noValue: 3
		}],

};

var associations = {

		"td-1":{

			incometax: {Yes: 5, No: -3},
			education: {Yes: 3, No: -4},
			health: {Yes: 2, No: -5},
			entrepreneurship: {Yes: 3, No: -1},
			art : {Yes: -3, No: 4},
			immigration: {Yes: 0, No: 0},
			crime: {Yes: -3, No: 4}
		},

		"td-2":{
			
			incometax: {Yes: -2, No: 4},
			education: {Yes: 5, No: -2},
			health: {Yes: 4, No: -1},
			entrepreneurship: {Yes: -4, No: 3},
			art : {Yes: -1, No: 0},
			immigration: {Yes: -1, No: 1},
			crime: {Yes: 0, No: 0}
		},

		"td-3":{
			
			incometax: {Yes: 3, No: -1},
			education: {Yes: -2, No: 1},
			health: {Yes: 4, No: -6},
			entrepreneurship: {Yes: 1, No: 0},
			art : {Yes: 0, No: 0},
			immigration: {Yes: 0, No: 0},
			crime: {Yes: -4, No: 2}
		},

		"td-4":{
			
			incometax: {Yes: 4, No: 0},
			education: {Yes: 2, No: -1},
			health: {Yes: 0, No: 0},
			entrepreneurship: {Yes: 1, No: -2},
			art : {Yes: 6, No: -3},
			immigration: {Yes: -1, No: 3},
			crime: {Yes: 2, No: -1}
		},

		"td-5":{
			
			incometax: {Yes: 5, No: -1},
			education: {Yes: 7, No: -4},
			health: {Yes: 2, No: -1},
			entrepreneurship: {Yes: 4, No: -3},
			art : {Yes: 2, No: -1},
			immigration: {Yes: 3, No: -1},
			crime: {Yes: -4, No: 2}
		},

		"td-6":{
			
			incometax: {Yes: 2, No: -1},
			education: {Yes: 1, No: -1},
			health: {Yes: 3, No: -1},
			entrepreneurship: {Yes: 5, No: -3},
			art : {Yes: 1, No: 0},
			immigration: {Yes: 6, No: -4},
			crime: {Yes: 4, No: 3}
		},

		"td-7":{
			
			incometax: {Yes: 5, No: -4},
			education: {Yes: 3, No: -6},
			health: {Yes: 1, No: 0},
			entrepreneurship: {Yes: 1, No: 1},
			art : {Yes: 4, No: -5},
			immigration: {Yes: 1, No: -2},
			crime: {Yes: 0, No: 0}
		},

		"td-8":{
			
			incometax: {Yes: 2, No: -4},
			education: {Yes: 1, No: -3},
			health: {Yes: 6, No: -5},
			entrepreneurship: {Yes: 2, No: -3},
			art : {Yes: 0, No: 0},
			immigration: {Yes: 1, No: -1},
			crime: {Yes: 4, No: -4}
		},

		"td-9":{
			
			incometax: {Yes: -4, No: 3},
			education: {Yes: -5, No: 6},
			health: {Yes: 0, No: 0},
			entrepreneurship: {Yes: 0, No: 0},
			art : {Yes: 0, No: 0},
			immigration: {Yes: -2, No: 2},
			crime: {Yes: 7, No: -2}
		},

		"td-10":{
			
			incometax: {Yes: 6, No: -4},
			education: {Yes: 4, No: -2},
			health: {Yes: 3, No: -1},
			entrepreneurship: {Yes: 2, No: -3},
			art : {Yes: 2, No: -2},
			immigration: {Yes: 0, No: 0},
			crime: {Yes: -5, No: 3}
		},


};

var realArr = vals["td-1"];

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
    .range([0, width]);

var xA = d3.scale.linear()
    .range([width/3, width]);

var y = d3.scale.ordinal()
    .rangeRoundBands([0, height], 0.2);

var yVals = d3.scale.ordinal()
         .domain(realArr)
         .rangeBands([10, height]);

var y2 = d3.scale.ordinal()
         .domain(names)
         .rangeBands([10, height]);

/*var x3right = d3.scale.ordinal()
         .domain(values1)
         .range([0, width]);

var y3right = d3.scale.ordinal()
         .domain(values1)
         .rangeBands([10, height]);

var y3 = d3.scale.ordinal()
         .domain(values2)
         .rangeBands([10, height]);*/

var svg = d3.select("#viz").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

x.domain([-10,10]);
xA.domain([-10,10]);
y.domain(realArr.map(function (d) {
    return d.token;
}));

var xAxis = d3.svg.axis()
    .scale(xA)
    .orient("top");

svg.selectAll(".bar")
    .data(realArr)
    .enter().append("rect")
    .attr("id", "barchart")
    .attr("class", "bar")
    .attr("x", function (d) {
    return spaceMargin + x(Math.min(0, d.yesValue));
})
    .attr("y", function (d) {
    return y(d.token);
})
    .attr("width", function (d) {
    return 10 + Math.abs(x(d.yesValue) - x(0));
})
    .attr("height", y.rangeBand());


function animate(updateData, yesOrNo){

	var ynVal;
	if (yesOrNo == "yes") {
		ynVal = "yesValue";
	}
	
	else {
		ynVal = "noValue";
	}


	svg.selectAll(".bar")
    .data(updateData)
    .transition()
    .duration(1000)
    .attr("x", function (d) {
    return spaceMargin + x(Math.min(0, d[ynVal]));
})
    .attr("y", function (d) {
    return y(d.token);
})
    .attr("width", function (d) {
    return 2 + Math.abs(x(d[ynVal]) - x(0));
})
    .attr("height", y.rangeBand());


 }

/*svg.selectAll(".bar2")
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
    .attr("height", y.rangeBand());*/

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
        .attr("x", width / 2 - 100)
        .attr("y", function(d){ return y2(d) + y2.rangeBand() / 2;} )
        .attr("dy", ".20em")
        .attr("text-anchor", "middle")
        .attr('class', 'name')
        .text(String);

svg.append("g")
    .attr("class", "x axis")
    .call(xAxis);

/*svg.append("g")
    .attr("class", "y axis")
    .append("line")
    .attr("x1", x(0))
    .attr("x2", x(0))
    .attr("y2", height);*/


/*function type(d) {
    d.value = +d.value;
    return d;
}*/


}