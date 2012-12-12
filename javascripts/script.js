/* Author: Gukere

*/
$(document).ready(function() {
   // do stuff when DOM is ready
   $(".section-link").click(function(e) {
   		goToByScroll($(this).prop('id') + '-section');
	});

   $("#contactgukere").submit(function() {

   		var valid = true;
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

		if($('#cname').val() == '' || $('#cname').val() == 'Nombre'){
			console.log("cname fail");
			$('#cname').attr('class', 'error');
			valid = false;
		}
		else{
			$('#cname').attr('class', '');
		}

		var cemail = $('#cemail').val();
		if(cemail == '' || !emailReg.test(cemail)){
			console.log("cemail fail");
			$('#cemail').attr('class', 'error');
			valid = false;
		}
		else{
			$('#cemail').attr('class', '');
		}

		if($('#ccomments').val() == ''){
			console.log("ccomments fail");
			$('#ccomments').attr('class', 'error');
			valid = false;
		}
		else{
			$('#ccomments').attr('class', '');
		}
		return valid;
   });
});

function goToByScroll(id){
	$('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');
};

function changeImage(img){
	$('#avat').src=img;
}





