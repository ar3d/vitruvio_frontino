$(document).ready(function() {

	$(".popup-me_1").click(function(){

		pop_init_1( "Marcus Vitruvius Pollio nacque a Formia all'incirca nell'80 a.C. e morì attorno al 15 a.C. Fu architetto e scrittore romano ed è considerato il più famoso teorico dell'architettura di tutti i tempi." );

	});

});

function pop_init_1( my_content ) {

	var pop_height = 'auto';
        var pop_html = '<div class="pop-bg"></div><div class="pop-wrap"><p class="pop-x">X</p><div class="pop-content"></div></div>';

	$("model-viewer").prepend( pop_html );

	$(".pop-wrap").animate({ "height" : pop_height }, 250).click(function(event){
		event.stopPropagation();
	});

	$(".pop-bg, .pop-x").bind("click", function(event) {
		pop_close();
	});

	$(".pop-content").text(my_content);

}

function pop_close() {
	$(".pop-bg, .pop-wrap").remove();
	$("model-viewer").unbind("click");
}