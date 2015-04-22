<!--
var divElms = {
	lv0:"modalContainer",
	lv1:"modalBody",
	lv2:"modalBase"
};
var flashvars = {
	si_id:''
};
var params = {
	menu:"false",
	bgcolor: "#666666"
//	wmode:"transparent"
};
var attributes = {
	id:divElms.lv2
};
var FlashElm = {
	File:'',
	Width:640,
	Height:480,
	Version:'9.0.45'
}
var myBody;
var updateWindowSize;
/* ------------------------------
	init modal window
------------------------------ */
function phModalInit(){
	myBody = $$('body')[0];
	//make div element
	new Insertion.Bottom( myBody , new Element( 'div', { id : divElms.lv0 , style : 'display:none;' } ));
	new Insertion.Bottom( myBody , new Element( 'div', { id : divElms.lv1 , style : 'display:none;' } ));
	new Insertion.Bottom( divElms.lv0 , new Element( 'span' ));
	//for IE6
	if (Prototype.Browser.IE) {	Prototype.Browser.IE6 = parseInt(navigator.userAgent.substring(navigator.userAgent.indexOf("MSIE")+5))==6;}
	if (Prototype.Browser.IE6) {
		Element.setStyle( divElms.lv0 , {
			height:document.documentElement.scrollHeight+"px"
		});
	}
	//set position
	Element.setStyle( divElms.lv1 , {
		width:FlashElm.Width+"px",
		height:FlashElm.Height+"px"
	});
	phSetModalPosition();
}
/* ------------------------------
	open modal window
------------------------------ */
var isExistSwfDiv = false;
function loadSwf( id ){
	//make element
	new Insertion.Bottom( divElms.lv1 , new Element( 'div', { id : divElms.lv2 } ));
	if (isExistSwfDiv == false) {
		new Insertion.Bottom( divElms.lv2 , '<div style="text-align:center; margin:200px 300px 200px 300px; background-color:white"><div style="padding:70px 50px 30px 50px">このコンテンツをお楽しみいただくには、<br />最新のAdobe Flash Playerのプラグインの<br />インストールが必要です。<br /><br /><a href="http://www.adobe.com/go/JP-H-GET-FLASH" target="_blank"><span class="color_01">Adobe Flash Playerのダウンロードはこちら</a></div><br /><div style="text-align:right; padding:0px 30px 50px 30px"><a href="javascript:void(0)" onclick="Element.hide(divElms.lv2);Element.hide(divElms.lv1);Element.hide(divElms.lv0);return false;"><span class="color_01">閉じる</span></a></div></div>');
		isExistSwfDiv = true;
	}
	//show element
	Element.show(divElms.lv0);
	Element.show(divElms.lv1);
	Element.show(divElms.lv2);
	//call swf
	flashvars.si_id = id;
	swfobject.embedSWF(
		FlashElm.File ,
		divElms.lv2 ,
		FlashElm.Width ,
		FlashElm.Height ,
		'9.0.45' ,
		false,
		flashvars ,
		params ,
		attributes
	);
}
/* ------------------------------
	close modal window
------------------------------ */
function phCloseModal(){
	Element.remove(divElms.lv2);
	Element.hide( divElms.lv1 );
	Element.hide( divElms.lv0 );
}
/* ------------------------------
	event:resize
------------------------------ */
function phWindowRisize(){
	phSetModalPosition();
}
/* ------------------------------
	set position
------------------------------ */
function phSetModalPosition(){
	var updateWindowSize = Element.getDimensions(myBody);
	if (Prototype.Browser.IE6) {updateWindowSize.height = document.documentElement.clientHeight;}
	if( FlashElm.Height/2 > updateWindowSize.height/2 ){
		Element.setStyle( divElms.lv1 , { marginTop:"0" , top:"0" });
	}else{
		Element.setStyle( divElms.lv1 , { marginTop:"-"+Math.round(FlashElm.Height/2)+"px" , top:"50%" });
	}
	if( FlashElm.Width/2 > updateWindowSize.width/2 ){
		Element.setStyle( divElms.lv1 , { marginLeft:"0" , left:"0" });
	}else{
		Element.setStyle( divElms.lv1 , { marginLeft:"-"+Math.round(FlashElm.Width/2)+"px" , left:"50%" });
	}
//	var moveElm = Position.cumulativeOffset(divElms.lv1); 
}
Event.observe(window, "load", phModalInit, false);
Event.observe(window, "resize", phWindowRisize, false);
//-->
