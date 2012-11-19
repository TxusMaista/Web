
//var template = $('#personTpl').html();
var template = Template.f_body();



var setLang = function(lang){
	//console.log(lang);
	if(lang == 'es') changeLang('javascripts/lang/es.json');
	else if(lang == 'eu') changeLang('javascripts/lang/eu.json');
	else changeLang('javascripts/lang/en.json');
	//console.log('end setLang');
};


var changeLang = function(uri){

	$.getJSON(uri, function(data){
		var html = Mustache.to_html(template, data);
		$('body').html(html);
	});
};

var userLang = (navigator.language) ? navigator.language : navigator.userLanguage;

if(userLang == 'es'){
	changeLang('javascripts/lang/es.json');
}
else if (userLang == 'eu'){
	changeLang('javascripts/lang/eu.json');
}
else{
	changeLang('javascripts/lang/en.json');
}


