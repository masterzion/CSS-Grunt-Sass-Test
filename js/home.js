
var homelayer = 'menuhome';
var lastlayer = '';
var runing = false;

// list of layer objects
var layers={

	'menuhome' : {
	        title:  '',
	        text:    "Join forces with friends to annihilate the enemy. In Warfaces unique Co-op mode you can play with up to five people to take down Blackwood forces around the globe. With new challenges and rewards every day, players of all levels will find something worth fighting for!"
	      },
	'newplayer' : {
	        title:  'NEW PLAYER EXPERIENCE',
	        text:    "Play tutorial missions and master every class. First, learn the craft of Rifleman and Sniper, \nand then get to grips with the support abilities of Engineer and Medic. You'll also discover an easy-to-access co-op experience, where players can choose the difficulty they want to face."
	      },
	'teamwork' : {
	        title:  'TEAMWORK',
	        text:    "Co-op success depends on teamwork and the combination of multiple soldier classes. Hone your skills and earn rewards for collaboration and individual heroics, such as lifting teammates to higher ground, providing them with ammo, \nor pushing heavy obstacles together."
	      },
	'coop' : {
	        title:  'CO-OP REWARD SYSTEM',
	        text:    "Soldiers that complete co-op missions earn crowns for their efforts. Team performance is rated in several categories and each teammate is rewarded accordingly. Brave soldiers can unlock new rewards by replaying missions and improving their record. There truly is no \n in team; you win or lose together."
	      }
};

// main function
function showlayer( sname ) {

	
	

	if (lastlayer != '') {


		// wait fade effect
		if ( runing ) {
			return false;
		} else {
			runing = true;
		}		

		// set texts
		$('#rightbar-texts').fadeOut("slow", function(){
			$('#rightbar-header').text(layers[sname].title);
			$('#rightbar-text').text(layers[sname].text);			

			$('#rightbar-texts').fadeIn();
		});


		// toggle layers
		$('#'+lastlayer).fadeOut( "slow", function() {
			$('#'+sname).fadeIn("slow", function() {
				runing = false; // enable click
			});

		});

		// unset last item color
		if (lastlayer != homelayer) {
			$('#'+lastlayer+'_link').removeClass('is-active');
			$('#'+lastlayer+'_arrow').show();
		}

	} else {

		// set texts (first execution)
		$('#rightbar-header').text(layers[sname].title);
		$('#rightbar-text').text(layers[sname].text);

	}


	// toggle close button and links
	if (sname == homelayer) {
		$('#closebtn-img').fadeOut("slow");
		$('#sidelink-categories').fadeOut("slow");
		$('#sidelink-home').fadeIn("slow");
		
	} else {
		$('#closebtn-img').fadeIn("slow");	
		$('#sidelink-categories').fadeIn("slow");
		$('#sidelink-home').fadeOut("slow");

		// set current link color
		$('#'+sname+'_link').addClass('is-active');
		$('#'+sname+'_arrow').hide();
	}


	// set last layer
	lastlayer = sname;
	
}

// initialize document
$( document ).ready(function() {

	// show first item
	showlayer( 'menuhome' );

	// set functions
	$(".go_home_event").click(      function() { showlayer( 'menuhome' );   } );
	$(".go_newplayer_event").click( function() { showlayer( 'newplayer' );  } );
	$(".go_teamwork_event").click(  function() { showlayer( 'teamwork' );   } );
	$(".go_coop_event").click(      function() { showlayer( 'coop' );       } );

});