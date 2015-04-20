$(document).ready(function($){
	initUsersPhoto();
	
	initAlphaRollOver();
});

var CAPACITY = 15;

function initAlphaRollOver(){
	var target = $('#UPList a');
	target.append($('<span></span>'));
	target.find('span').css("width","280px")
			           .css("height","320px")
			           .css("background","#FFFFFF")
			           .css("position","absolute")
			           .css("z-index","1000")
			           .css("top","0px")
			           .css("left","30px")
			           .css("opacity","0")
			           .css("cursor","pointer")
			                    
	$('#UPList a').hover(
		function(){
			$(this).find("span").animate(
				{opacity: 0.28},
				{duration:100, easing: "easeOutQuart",queue: false}
			);
		},
		function(){
			$(this).find("span").animate(
				{opacity: 0},
				{duration:100, easing: "easeOutQuart",queue: false}
			);
		}
	);
}

function initUsersPhoto(){
	initUsersPhotoBtns();
	var target = $('#UPList');
	var listNum = target.find('div.box').length;
	var COLNUM = CAPACITY/3;
	var PAGENUM = Math.floor(listNum/CAPACITY);
	var TOTALCOLNUM = Math.floor(listNum/3);
	var incNum=0;
	if(listNum%CAPACITY)PAGENUM++;
	if(listNum%COLNUM)TOTALCOLNUM++;
	
	//pageMake
	for(var i=0;i<PAGENUM;i++){
		target.append('<div id="UPpage'+i+'"></div>');
		var targetY = 930*i;
		target.find('#UPpage'+i+'').css("top","0px")
		                           .css("position","absolute")
		                           .css("left",targetY)
		                           .css("width",'930px')
		for(var j=0;j<COLNUM;j++){
			if(TOTALCOLNUM>0){
				target.find('#UPpage'+i+'').append('<ul id="UPpageUL'+j+'"></ul>');
				var targetUL = target.find('#UPpage'+i+' #UPpageUL'+j+'')
				for(var k=0;k<3;k++){
					if(incNum<listNum){
						var targetObj = $('#UPList div.box:eq('+incNum+')');
						targetUL.append('<li>'+targetObj.html()+'</li>');
					}
					incNum ++;
				}
			}
			TOTALCOLNUM--;
		}
	}
	var targetH = target.find("#UPpage0").height();
	$('#UPListOut').css("height",targetH);
	$('#UPListin').remove();
}

function initUsersPhotoBtns(){
	var target=$('#pageList');
	var listNum = $('#UPList').find('div.box').length;
	var PAGENUM = Math.floor(listNum/CAPACITY);
	var CurrentPageNum = 1;
	if(listNum%CAPACITY)PAGENUM++;
	for(var i=1;i<=PAGENUM;i++){
		target.append('<li><a href="###">'+i+'</a></li>');
	}
	target.find('li:nth-child('+CurrentPageNum+')').addClass("current");
	target.find("a").click(function () {
		num = $(this).text();
		target.find('li:nth-child('+CurrentPageNum+')').removeClass("current");
		CurrentPageNum = num;
		target.find('li:nth-child('+CurrentPageNum+')').addClass("current");
		movePage(num);
		return false;
	});

}

function movePage(num){
	var target=$('#UPList');
	var targetY = -(num-1)*930;
	var targetH = $('#UPpage'+(num-1)+'').height();
	
	$('#UPListOut').animate(
		{height: targetH},
		{duration:800, easing: "easeOutQuart",queue: false}
	);
	
	target.animate(
		{left: targetY},
		{duration:800, easing: "easeOutQuart",queue: false}
	);
}





