var dataset = [
			   'Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood',
			   'Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood',
			   'Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood',
			   'Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood','Muslim Brotherhood',
			   'Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social',
			   'Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social','Labor & Social',
			   'Students','Students','Students','Students','Students','Students','Students','Students','Students','Students','Students','Students','Students','Students',
			   'Civil Powers','Civil Powers','Civil Powers','Civil Powers','Civil Powers','Civil Powers','Civil Powers','Civil Powers',
			   'Pro-Regime','Pro-Regime','Pro-Regime','Pro-Regime','Pro-Regime','Pro-Regime'
			   ];
var colors = ['#4D5E83','#E7654B','#579E9C','#BD4E6B','#A88A79']
var groups = ['Muslim Brotherhood', 'Labor & Social', 'Students', 'Civil Powers', 'Pro-Regime'];
var w = 600, h = 350;
var y = 20;
var x = 20;
var steps = 1;
var counter = 0;

var svg = d3.select('#chart').append('svg')
	.attr('width', w)
	.attr('height', h);

var xScale = d3.scale.linear()
	.domain([0, d3.max(dataset)])
	.range([0, w]);


svg.selectAll('circle')
	.data(dataset)
	.enter()
	.append('circle')
	.attr('class', 'circle')
	.attr('cy', function(d,i){

		if (y <= 60) {
			y += 20;
			return y;
		} else {
			y = 40;
			return y;
		};		
	
	})
	.attr('cx', function(d, i){
		
		if (steps < 4) {
			steps += 1;
			return x;
		} else {
			steps = 2;
			x += 20;
			return x;
		};	
	})
	.attr('fill', function(d,i){
		switch(d) {
		    case 'Muslim Brotherhood':
		        return colors[0];
		        break;
		    case 'Labor & Social':
		        return colors[1];
		        break;
		    case 'Students':
		        return colors[2];
		        break;
		    case 'Civil Powers':
		        return colors[3];
		        break;
		    case 'Pro-Regime':
		        return colors[4];
		        break;
		    default:
		        return 'gray';
		        break;
		} 
	})
	.attr('r', 3.5);