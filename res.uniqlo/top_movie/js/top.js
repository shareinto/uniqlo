// UNIQLO
// TOP ムービーに関する JavaScript

/** アセットクラス */
var AppConstant = {
	/** 使用するアセット情報 */
	ASSETS:["top_movie/imgs/s19_replay.jpg","top_movie/imgs/s19_logo.png","top_movie/imgs/s19_txt4.png","top_movie/imgs/s14_VARIATION.gif","top_movie/imgs/s14_variation_08.jpg","top_movie/imgs/s14_variation_07.jpg","top_movie/imgs/s14_variation_06.jpg","top_movie/imgs/s14_variation_05.jpg","top_movie/imgs/s14_variation_04.jpg","top_movie/imgs/s14_variation_03.jpg","top_movie/imgs/s14_variation_02.jpg","top_movie/imgs/s14_variation_01.jpg","top_movie/imgs/s03_bg.png","top_movie/imgs/s13_txt.jpg","top_movie/imgs/s13_VARIATION.png","top_movie/imgs/bg.png","top_movie/imgs/s08_colorpicker.jpg","top_movie/imgs/s08_COLOR.gif","top_movie/imgs/s12_cloth.jpg","top_movie/imgs/s11_cloth.jpg","top_movie/imgs/s10_cloth.jpg","top_movie/imgs/s09_cloth.jpg","top_movie/imgs/s08_cloth.jpg","top_movie/imgs/s03_bg.png","top_movie/imgs/s07_txt.png","top_movie/imgs/s07_COLOR.png","top_movie/imgs/bg.png","top_movie/imgs/s05_bmp2.gif","top_movie/imgs/s05_bmp.gif","top_movie/imgs/s05-2_bmp.gif","top_movie/imgs/s05_1_bmp.gif","top_movie/imgs/s04_txts_e.gif","top_movie/imgs/s04_txts_z.gif","top_movie/imgs/s04_txts_i2.gif","top_movie/imgs/s04_txts_m.gif","top_movie/imgs/s04_txts_o2.gif","top_movie/imgs/s04_txts_t.gif","top_movie/imgs/s04_txts_r.gif","top_movie/imgs/s04_txts_s.gif","top_movie/imgs/s04_txts_u2.gif","top_movie/imgs/s04_txts_s.gif","top_movie/imgs/s04_txts_u2.gif","top_movie/imgs/s04_txts_c.gif","top_movie/imgs/s04_txts_o.gif","top_movie/imgs/s04_txts_m.gif","top_movie/imgs/s04_txts_l.gif","top_movie/imgs/s04_txts_k.gif","top_movie/imgs/s04_txts_q.gif","top_movie/imgs/s04_txts_i.gif","top_movie/imgs/s04_txts_n.gif","top_movie/imgs/s04_txts_u.gif","top_movie/imgs/s04_txtl_e.gif","top_movie/imgs/s04_txtl_z.gif","top_movie/imgs/s04_txtl_i2.gif","top_movie/imgs/s04_txtl_m.gif","top_movie/imgs/s04_txtl_o2.gif","top_movie/imgs/s04_txtl_t.gif","top_movie/imgs/s04_txtl_r.gif","top_movie/imgs/s04_txtl_s.gif","top_movie/imgs/s04_txtl_u2.gif","top_movie/imgs/s04_txtl_s.gif","top_movie/imgs/s04_txtl_u2.gif","top_movie/imgs/s04_txtl_c.gif","top_movie/imgs/s04_txtl_o.gif","top_movie/imgs/s04_txtl_m.gif","top_movie/imgs/s04_txtl_l.gif","top_movie/imgs/s04_txtl_k.gif","top_movie/imgs/s04_txtl_q.gif","top_movie/imgs/s04_txtl_i.gif","top_movie/imgs/s04_txtl_n.gif","top_movie/imgs/s04_txtl_u.gif","top_movie/imgs/s03_DESIGN.gif","top_movie/imgs/s03_overlay.png","top_movie/imgs/s03_cloth.jpg","top_movie/imgs/s03_bg.png","top_movie/imgs/s02_txt.png","top_movie/imgs/s02_DESIGN.png","top_movie/imgs/s01_logo.png","top_movie/imgs/s01_txt1.png","top_movie/imgs/bg.png"]
};

/** トップムービークラス */
function TopMovie(){
    this.initialize.apply(this, arguments);
}

TopMovie.prototype = {

    _preloaderView : null,
    _preloaderModel : null,
    
    /** コンストラクタ */
    initialize: function(){

        this._preloaderView = new PreloaderView();

        this._preloaderModel = new Preloader(AppConstant.ASSETS);

        this._preloaderModel.onProgress = $.proxy(this._progressHandler, this);
        this._preloaderModel.onComplete = $.proxy(this._loadCompleteHandler, this);
        this._preloaderModel.execute();
    },

    _progressHandler : function(){
        this._preloaderView.setPercent( this._preloaderModel.getPercent() );
    },
    
    _loadCompleteHandler:function(){
        // プリローダー関係は削除
        this._preloaderView.dispose();
        this._preloaderView = null;
        this._preloaderModel = null;
        // 再生
        this._startMotion();
    },
    
    _resetMotion : function(){
        // リセット処理
        var targetDiv = $("#top_movie");
        targetDiv.html("");

        // 再生
        this._startMotion();        
    },

    /** タイムラインアニメーションを再生 */
    _startMotion : function(){
        
        var self = this;
        
        var targetDiv = $("#top_movie");
        targetDiv.css({
            width: 753,
            height: 368,
            position: "absolute",
            overflow: "hidden",
            background: "#fff"
        });
        // 以下、モーション制御
        //==============================================================================
      setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s19_replay.jpg" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "81")
            .css("left", 87)
            .css("top", 257)
            .css("opacity", 0)
            .animate({opacity:1}, 266 )
		$(obj)
                .css("cursor", "pointer")
                .click(function(){
                    self._resetMotion();
                });
    }, 27433);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s19_logo.png" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "80")
            .css("left", 87)
            .css("top", 209)
            .css("opacity", 0)
            .animate({opacity:1}, 366 )
    }, 26567);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s19_txt4.png" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "79")
            .css("left", 84)
            .css("top", 98)
    }, 26167);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s14_VARIATION.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "78")
            .css("left", 622)
            .css("top", 26)
        setTimeout(function(){removeObject(obj);}, 2767);
    }, 22867);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s14_variation_08.jpg" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "77")
            .css("left", 188)
            .css("top", 0)
        setTimeout(function(){removeObject(obj);}, 433);
    }, 25200);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s14_variation_07.jpg" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "76")
            .css("left", 188)
            .css("top", 0)
        setTimeout(function(){removeObject(obj);}, 433);
    }, 24867);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s14_variation_06.jpg" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "75")
            .css("left", 188)
            .css("top", 0)
        setTimeout(function(){removeObject(obj);}, 400);
    }, 24533);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s14_variation_05.jpg" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "74")
            .css("left", 188)
            .css("top", 0)
        setTimeout(function(){removeObject(obj);}, 400);
    }, 24200);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s14_variation_04.jpg" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "73")
            .css("left", 188)
            .css("top", 0)
        setTimeout(function(){removeObject(obj);}, 400);
    }, 23867);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s14_variation_03.jpg" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "72")
            .css("left", 188)
            .css("top", 0)
        setTimeout(function(){removeObject(obj);}, 400);
    }, 23533);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s14_variation_02.jpg" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "71")
            .css("left", 188)
            .css("top", 0)
        setTimeout(function(){removeObject(obj);}, 400);
    }, 23200);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s14_variation_01.jpg" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "70")
            .css("left", 188)
            .css("top", 0)
        setTimeout(function(){removeObject(obj);}, 367);
    }, 22867);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s03_bg.png" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "69")
            .css("left", 0)
            .css("top", 0)
        setTimeout(function(){removeObject(obj);}, 2767);
    }, 22867);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s13_txt.jpg" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "68")
            .css("left", 86)
            .css("top", 193)
            .css("opacity", 0)
            .animate({opacity:1}, 333 )
        setTimeout(function(){removeObject(obj);}, 2733);
    }, 20133);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s13_VARIATION.png" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "67")
            .css("left", 84)
            .css("top", 119)
        setTimeout(function(){removeObject(obj);}, 3233);
    }, 19633);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/bg.png" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "66")
            .css("left", 0)
            .css("top", 0)
        setTimeout(function(){removeObject(obj);}, 6000);
    }, 19633);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s08_colorpicker.jpg" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "65")
            .css("left", 372)
            .css("top", -25)
            .animate({top:147}, 800 , "easeInOutQuint")
        setTimeout(function(){removeObject(obj);}, 1300);

    }, 16100);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s08_COLOR.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "64")
            .css("left", 662)
            .css("top", 26)
        setTimeout(function(){removeObject(obj);}, 3867);
    }, 15900);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s12_cloth.jpg" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "63")
            .css("left", 0)
            .css("top", 0)
            .css("opacity", 0)
            .animate({opacity:1}, 133 )
        setTimeout(function(){removeObject(obj);}, 1200);
    }, 18567);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s11_cloth.jpg" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "62")
            .css("left", 0)
            .css("top", 0)
            .css("opacity", 0)
            .animate({opacity:1}, 100 )
        setTimeout(function(){removeObject(obj);}, 633);
    }, 18100);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s10_cloth.jpg" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "61")
            .css("left", 0)
            .css("top", 0)
            .css("opacity", 0)
            .animate({opacity:1}, 66 )
        setTimeout(function(){removeObject(obj);}, 567);
    }, 17667);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s09_cloth.jpg" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "60")
            .css("left", 0)
            .css("top", 0)
            .css("opacity", 0)
            .animate({opacity:1}, 100 )
        setTimeout(function(){removeObject(obj);}, 567);
    }, 17200);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s08_cloth.jpg" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "59")
            .css("left", 0)
            .css("top", 0)
        setTimeout(function(){removeObject(obj);}, 1867);
    }, 15900);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s03_bg.png" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "58")
            .css("left", 0)
            .css("top", 0)
        setTimeout(function(){removeObject(obj);}, 3867);
    }, 15900);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s07_txt.png" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "57")
            .css("left", 86)
            .css("top", 193)
            .css("opacity", 0)
            .animate({opacity:1}, 366 )
        setTimeout(function(){removeObject(obj);}, 3433);
    }, 12600);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s07_COLOR.png" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "56")
            .css("left", 85)
            .css("top", 119)
        setTimeout(function(){removeObject(obj);}, 4000);
    }, 12033);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/bg.png" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "55")
            .css("left", 0)
            .css("top", 0)
        setTimeout(function(){removeObject(obj);}, 7733);
    }, 12033);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s05_bmp2.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "54")
            .css("left", 250)
            .css("top", 165)
            .delay( 333 )
            .animate({left:244}, 133 )
            .delay( 200 )
            .animate({top:168}, 133 )
            .delay( 266 )
            .animate({top:165}, 100 )
        setTimeout(function(){removeObject(obj);}, 2200);
    }, 10000);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s05_bmp.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "53")
            .css("left", 250)
            .css("top", 165)
        setTimeout(function(){removeObject(obj);}, 267);
    }, 9733);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s05-2_bmp.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "52")
            .css("left", 253)
            .css("top", 174)
        setTimeout(function(){removeObject(obj);}, 400);
    }, 9333);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s05_1_bmp.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "51")
            .css("left", 239)
            .css("top", 181)
        setTimeout(function(){removeObject(obj);}, 467);
    }, 8867);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txts_e.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "50")
            .css("left", 332)
            .css("top", 150)
        setTimeout(function(){removeObject(obj);}, 3900);
    }, 8300);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txts_z.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "49")
            .css("left", 324)
            .css("top", 150)
        setTimeout(function(){removeObject(obj);}, 4000);
    }, 8200);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txts_i2.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "48")
            .css("left", 321)
            .css("top", 150)
        setTimeout(function(){removeObject(obj);}, 4067);
    }, 8133);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txts_m.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "47")
            .css("left", 312)
            .css("top", 150)
        setTimeout(function(){removeObject(obj);}, 4100);
    }, 8100);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txts_o2.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "46")
            .css("left", 304)
            .css("top", 150)
        setTimeout(function(){removeObject(obj);}, 4233);
    }, 7967);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txts_t.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "45")
            .css("left", 296)
            .css("top", 150)
        setTimeout(function(){removeObject(obj);}, 4433);
    }, 7767);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txts_r.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "44")
            .css("left", 296)
            .css("top", 150)
        setTimeout(function(){removeObject(obj);}, 200);
    }, 7567);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txts_s.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "43")
            .css("left", 296)
            .css("top", 150)
        setTimeout(function(){removeObject(obj);}, 167);
    }, 7400);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txts_u2.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "42")
            .css("left", 296)
            .css("top", 150)
        setTimeout(function(){removeObject(obj);}, 33);
    }, 7367);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txts_s.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "41")
            .css("left", 289)
            .css("top", 150)
        setTimeout(function(){removeObject(obj);}, 4867);
    }, 7333);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txts_u2.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "40")
            .css("left", 281)
            .css("top", 150)
        setTimeout(function(){removeObject(obj);}, 4900);
    }, 7300);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txts_c.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "39")
            .css("left", 273)
            .css("top", 150)
        setTimeout(function(){removeObject(obj);}, 4967);
    }, 7233);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txts_o.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "38")
            .css("left", 260)
            .css("top", 150)
        setTimeout(function(){removeObject(obj);}, 5267);
    }, 6933);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txts_m.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "37")
            .css("left", 253)
            .css("top", 151)
        setTimeout(function(){removeObject(obj);}, 100);
    }, 6700);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txts_l.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "36")
            .css("left", 253)
            .css("top", 150)
			.delay( 33 )
			.animate({opacity:0}, 33 )
            .delay( 100 )
			.animate({opacity:1}, 33 )
        setTimeout(function(){removeObject(obj);}, 5533);
    }, 6667);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txts_k.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "35")
            .css("left", 252)
            .css("top", 150)
            .delay( 100 )
            .delay( 133 )
        setTimeout(function(){removeObject(obj);}, 100);
    }, 6567);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txts_q.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "34")
            .css("left", 244)
            .css("top", 150)
        setTimeout(function(){removeObject(obj);}, 5700);
    }, 6500);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txts_i.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "33")
            .css("left", 241)
            .css("top", 150)
        setTimeout(function(){removeObject(obj);}, 5767);
    }, 6433);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txts_n.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "32")
            .css("left", 233)
            .css("top", 150)
        setTimeout(function(){removeObject(obj);}, 5833);
    }, 6367);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txts_u.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "31")
            .css("left", 225)
            .css("top", 150)
            .delay( 33 )
            .animate({opacity:0}, 33 )
            .animate({opacity:1}, 33 )
            .animate({opacity:0}, 33 )
            .delay( 66 )
            .animate({opacity:1}, 33 )
        setTimeout(function(){removeObject(obj);}, 6167);
    }, 6033);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txtl_e.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "30")
            .css("left", 713)
            .css("top", 145)
        setTimeout(function(){removeObject(obj);}, 3900);
    }, 8300);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txtl_z.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "29")
            .css("left", 690)
            .css("top", 145)
        setTimeout(function(){removeObject(obj);}, 4000);
    }, 8200);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txtl_i2.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "28")
            .css("left", 681)
            .css("top", 145)
        setTimeout(function(){removeObject(obj);}, 4067);
    }, 8133);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txtl_m.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "27")
            .css("left", 655)
            .css("top", 145)
        setTimeout(function(){removeObject(obj);}, 4100);
    }, 8100);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txtl_o2.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "26")
            .css("left", 633)
            .css("top", 145)
        setTimeout(function(){removeObject(obj);}, 4233);
    }, 7967);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txtl_t.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "25")
            .css("left", 611)
            .css("top", 145)
        setTimeout(function(){removeObject(obj);}, 4433);
    }, 7767);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txtl_r.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "24")
            .css("left", 610)
            .css("top", 145)
        setTimeout(function(){removeObject(obj);}, 200);
    }, 7567);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txtl_s.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "23")
            .css("left", 610)
            .css("top", 145)
        setTimeout(function(){removeObject(obj);}, 167);
    }, 7400);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txtl_u2.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "22")
            .css("left", 610)
            .css("top", 145)
        setTimeout(function(){removeObject(obj);}, 33);
    }, 7367);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txtl_s.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "21")
            .css("left", 591)
            .css("top", 145)
        setTimeout(function(){removeObject(obj);}, 4867);
    }, 7333);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txtl_u2.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "20")
            .css("left", 568)
            .css("top", 145)
        setTimeout(function(){removeObject(obj);}, 4900);
    }, 7300);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txtl_c.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "19")
            .css("left", 545)
            .css("top", 145)
        setTimeout(function(){removeObject(obj);}, 4967);
    }, 7233);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txtl_o.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "18")
            .css("left", 510)
            .css("top", 145)
        setTimeout(function(){removeObject(obj);}, 5267);
    }, 6933);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txtl_m.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "17")
            .css("left", 486)
            .css("top", 145)
        setTimeout(function(){removeObject(obj);}, 100);
    }, 6700);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txtl_l.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "16")
            .css("left", 488)
            .css("top", 145)
            .delay( 33 )
			.animate({opacity:0}, 16 )
            .delay( 100 )
			.animate({opacity:1}, 16 )
        setTimeout(function(){removeObject(obj);}, 5533);
    }, 6667);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txtl_k.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "15")
            .css("left", 486)
            .css("top", 145)
        setTimeout(function(){removeObject(obj);}, 100);
    }, 6567);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txtl_q.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "14")
            .css("left", 465)
            .css("top", 145)
        setTimeout(function(){removeObject(obj);}, 5700);
    }, 6500);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txtl_i.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "13")
            .css("left", 456)
            .css("top", 145)
        setTimeout(function(){removeObject(obj);}, 5767);
    }, 6433);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txtl_n.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "12")
            .css("left", 432)
            .css("top", 145)
        setTimeout(function(){removeObject(obj);}, 5833);
    }, 6367);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s04_txtl_u.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "11")
            .css("left", 409)
            .css("top", 145)
            .animate({opacity:0}, 33 )
            .animate({opacity:1}, 33 )
            .animate({opacity:0}, 33 )
            .animate({opacity:1}, 33 )
            .animate({opacity:0}, 33 )
            .delay( 66 )
            .animate({opacity:1}, 33 )
        setTimeout(function(){removeObject(obj);}, 6167);
    }, 6033);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s03_DESIGN.gif" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "9")
            .css("left", 663)
            .css("top", 26)
        setTimeout(function(){removeObject(obj);}, 7300);
    }, 4900);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s03_overlay.png" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "8")
            .css("left", 755)
            .css("top", 0)
            .animate({left:375}, 966, "easeInOutQuint" )
        setTimeout(function(){$(obj).hide(); removeObject(obj);}, 7300);
		$(obj).fixPng();
    }, 4900);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s03_cloth.jpg" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "7")
            .css("left", 0)
            .css("top", 0)
        setTimeout(function(){removeObject(obj);}, 7300);
    }, 4900);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s03_bg.png" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "6")
            .css("left", 0)
            .css("top", 0)
        setTimeout(function(){removeObject(obj);}, 7300);
    }, 4900);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s02_txt.png" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "5")
            .css("left", 86)
            .css("top", 193)
            .css("opacity", 0)
            .animate({opacity:1}, 366 )
        setTimeout(function(){removeObject(obj);}, 2433);
    }, 2467);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s02_DESIGN.png" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "4")
            .css("left", 86)
            .css("top", 119)
        setTimeout(function(){removeObject(obj);}, 2767);
    }, 2133);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s01_logo.png" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "3")
            .css("left", 87)
            .css("top", 209)
            .css("opacity", 0)
            .animate({opacity:1}, 366 )
        setTimeout(function(){removeObject(obj);}, 1400);
    }, 400);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/s01_txt1.png" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "2")
            .css("left", 84)
            .css("top", 143)
        setTimeout(function(){removeObject(obj);}, 1767);
    }, 33);

    setTimeout(function(){
        var obj = $("<img>", { src : "top_movie/imgs/bg.png" })
            .appendTo(targetDiv)
            .css("position", "absolute")
            .css("z-index", "1")
            .css("left", 0)
            .css("top", 0)
        setTimeout(function(){removeObject(obj);}, 27467);
    }, 0);


        //==============================================================================
        function removeObject(o){ $(o).remove(); }
    }
    
};

/** プリローダークラス */
function Preloader(){
    this.initialize.apply(this, arguments);
}

Preloader.prototype = {
    
    /** URLリスト */
    _urlArr : [],

    /** 読み込みカウント */
    _loadCount: 0,

    /** 読み込み進行中イベントハンドラー */
    onProgress : null, 

    /** 読み込み完了イベントハンドラー */
    onComplete : null,
    
    /** コンストラクタ */
    initialize: function(urlArr){
        this._urlArr = urlArr;
    },
    
    /** 処理実行 */
    execute : function(){
        this._loadCount = 0;
        this._loadAssets();
    },

    /**
     * 読み込んだ割合(0〜1)を取得
     * @return 読み込んだ割合(0〜1)
     */
    getPercent : function(){
        return this._loadCount / this._urlArr.length;
    },
    
    /** 読み込み処理 */
    _loadAssets:function(){
        
        if(typeof(this.onProgress) == "function"){
            this.onProgress();
        }
        
        if(this._loadCount == this._urlArr.length){
            if(typeof(this.onComplete) == "function"){
                this.onComplete();
            }
            return;
        }
        
        var url = this._urlArr[this._loadCount];
        var img = new Image();
        img.onload = $.proxy(this._delayFunc, this);
        img.src = url; //console.log(url);
        
        this._loadCount++;
    },

    /** 遅延読み込み(IEのスタックオーバーフロー対策) */
    _delayFunc : function(){
        setTimeout($.proxy(this._loadAssets, this), 5);
    }
};

/** プリローダーの表示クラス */
function PreloaderView() {
    this.initialize.apply(this, arguments);
}
PreloaderView.prototype = {
    COLORS:["#000001", "#ff6600", "#ff0000", "#ff6262", "#ffa19c",
            "#c45d01", "#5d2b03", "#5d2b03", "#ffcc33", "#ff9966",
            "#bfdb4e", "#21a52a", "#00663f", "#abfcab", "#36ffaa",
            "#66cccc", "#00938c", "#005450", "#006cff", "#839aff",
            "#ffb1ff", "#ff6699"
    ],

    _obj:null,

    /** コンストラクタ */
    initialize: function(){
        var divStr = '<div id="top_preloader">';
        for(var i=0; i<this.COLORS.length; i++){
            divStr += '    <div id="top_rect_' + i + '" class="top_rect"></div>'
        }
        divStr += '    <img id="top_preloader_text" src="top_movie/imgs/loading.jpg" />'
        divStr += '</div>';

        this._obj = $(divStr);
        this._obj.appendTo("#top_movie");

        for(var i=0; i<this.COLORS.length; i++){
            $("#top_rect_" + i).css("left", i * 12);
        }
    },
    
    /**
     * 読み込んだ割合(0〜1)を設定
     * @param 読み込んだ割合(0〜1)
     */
    setPercent : function(value){
        var index = Math.floor((this.COLORS.length + 1) * value);
        for(var i=0; i<index; i++){
            $("#top_rect_" + i).css("background-color", this.COLORS[i]);
        }
    },
    
    /** 破棄 */
    dispose : function(){
        $(this._obj).remove();
    }
}

// トップムービー再生
$(document).ready(function(){
    new TopMovie();
});