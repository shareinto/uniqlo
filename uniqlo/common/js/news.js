$(document).ready(function($){
    initNews();
});

var TOTAL_NUM;
var CURRENT_NUM;
var RELOAD_TIME = 5000;

function initNews(){
	var NEWS_LINE = $("#news li")
	TOTAL_NUM = NEWS_LINE.length;
	$('#news li:nth-child(1)').css('top', '8px');
	for(var i=2;i<=TOTAL_NUM;i++){
		$('#news li:nth-child('+i+')').css('top', '36px');
	}
	CURRENT_NUM = 1;
	setTimeout("changeNews()", RELOAD_TIME);
}

function changeNews(){
	hideNews();
	showNews();
}

function showNews(){
	if(CURRENT_NUM == TOTAL_NUM){
		CURRENT_NUM = 1;
	}else{
		CURRENT_NUM ++;
	}
	
	var targetList = $('#news li:nth-child('+CURRENT_NUM+')');
	targetList.css('top', '36px');
	
	targetList.animate(
		{top: "8px"},
		{duration:500, easing: "easeOutQuart"}
	);
	setTimeout("changeNews()", RELOAD_TIME);
}

function hideNews(){
	var targetList = $('#news li:nth-child('+CURRENT_NUM+')');
	
	targetList.animate(
		{top: "-34px"},
		{duration:500, easing: "easeOutQuart"}
	);
}



