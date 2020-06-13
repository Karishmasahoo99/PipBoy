$(document).ready(function(){
	var weapons=[{
		"name":"44-pistol",
		"damage":48,
		"fire_rate":6,
		"range":119,
		"accuracy":66,
		"weight":4.2,
		"value":99,
	},
	{
		"name":"10mm-pistol",
		"damage":18,
		"fire_rate":46,
		"range":119,
		"accuracy":61,
		"weight":4.2,
		"value":53,
	},
	{
		"name":"assault-rifle",
		"damage":30,
		"fire_rate":40,
		"range":119,
		"accuracy":72,
		"weight":13.2,
		"value":144,
	},

	];

	$('.container .row .col-12 li a').on('click',function(e){
		$(e.currentTarget).css({
			background:"#020000",
			border:"1px solid transparent",
		});
	});

	$('.item-list a').on('click',function(e){
		$('.item-list a').removeClass('active');
		$(e.currentTarget).addClass('active');
	});

	$('.item-list a').on('mouseenter',function(e){
		var current=$(e.currentTarget).attr('class');
		console.log(current);

		for(item in weapons){
		    if(weapons[item].name==current){
		    	console.log(weapons[item]);

		    	var container=$('.item-stats');
		    	container.find('.damage').html(weapons[item].damage);
		    	container.find('.fire-rate').html(weapons[item].fire_rate);
		    	container.find('.weight').html(weapons[item].weight);
		    	container.find('.value').html(weapons[item].value);
		    	container.find('.range').html(weapons[item].range);
		    	container.find('.accuracy').html(weapons[item].accuracy);
		    }
		}
	});

	
})