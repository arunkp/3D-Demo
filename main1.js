$(document).ready(function(){
	$(function() {
    $( "#slider" ).slider({
    	animate: "slow",
	    max: 360,
	    min: 0,
	    value: 10,
	    slide: function (event, ui) {
	        val = $("#slider").slider("value");
	        change();
	    },
	    change: function (event, ui) {
	        val = $("#slider").slider("value");
	        change();
	    }
    });

    function change() {
		    $(".cube").css("-webkit-transform","rotateY("+val+"deg");
		}
	});

	$(function(){
	    $( "#slider_vert" ).slider({
	    	orientation: "vertical",
	    	animate: "slow",
		    max: 360,
		    min: 0,
		    value: 10,
		    slide: function (event, ui) {
		        val = $("#slider_vert").slider("value");
		        change_vert();
		    },
		    change: function (event, ui) {
		        val = $("#slider_vert").slider("value");
		        change_vert();
		    }
	    });
	    
	    function change_vert() {
			    $(".cube").css("-webkit-transform","rotateX("+val+"deg");
			}
	});
	$(function(){
	    $( "#slider_z" ).slider({
	    	orientation: "vertical",
	    	animate: "slow",
		    max: 360,
		    min: 0,
		    value: 10,
		    slide: function (event, ui) {
		        val = $("#slider_z").slider("value");
		        change_vert();
		    },
		    change: function (event, ui) {
		        val = $("#slider_z").slider("value");
		        change_vert();
		    }
	    });
	    
	    function change_vert() {
			    $(".cube").css("-webkit-transform","rotateZ("+val+"deg");
			}
	});
});