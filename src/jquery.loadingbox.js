(function(a){var b={None:"none",IgnoreAspectRatio:"ignoreAspectRatio",KeepAspectRatio:"keepAspectRatio",KeepAspectRatioByExpanding:"keepAspectRatioByExpanding",AutoDetect:"autoDetect"};var c=function(f){return f===void 0};function e(z){var B=z&&z.options&&z.options.sync||false;var f=z&&z.el||null;function A(x,y){return x+y-1}if(arguments.length===4){this.x1=arguments[0];this.y1=arguments[1];this.x2=A(arguments[0],arguments[2]);this.y2=A(arguments[1],arguments[3])}else{if(f){var u=f.offset().left,v=f.offset().top,t=f.width(),k=f.height();var D=u,E=v,C=t,w=k;if(z.options){if(z.options.usePosition){u=f.position().left;v=f.position().top}if(z.options.marginsEnable){var o=parseInt(f.css("margin-top")||"0"),l=parseInt(f.css("margin-bottom")||"0"),m=parseInt(f.css("margin-left")||"0"),n=parseInt(f.css("margin-right")||"0");D=D-m;E=E-o;C=C+m+n;w=w+o+l}if(z.options.paddingsEnable){var s=parseInt(f.css("padding-top")||"0"),p=parseInt(f.css("padding-bottom")||"0"),q=parseInt(f.css("padding-left")||"0"),r=parseInt(f.css("padding-right")||"0");D=D-q;E=E-s;C=C+q+r;w=w+s+p}if(z.options.bordersEnable){var j=parseInt(f.css("border-top-width")||"0"),g=parseInt(f.css("border-bottom-width")||"0"),h=parseInt(f.css("border-left-width")||"0"),i=parseInt(f.css("border-right-width")||"0");D=D-h;E=E-j;C=C+h+i;w=w+j+g}}this.x1=D;this.y1=E;this.x2=A(D,C);this.y2=A(E,w);this.el=f}else{if(z&&!c(z.x1)&&!c(z.x2)&&!c(z.y1)&&!c(z.y2)){this.x1=z.x1;this.y1=z.y1;this.x2=z.x2;this.y2=z.y2}else{this.x1=0;this.y1=0;this.x2=-1;this.y2=-1}}}this.clone=function(){return new e({x1:this.x1,y1:this.y1,x2:this.x2,y2:this.y2})};this.isNull=function(){return this.x2==this.x1-1&&this.y2==this.y1-1};this.isEmpty=function(){return this.x1>this.x2||this.y1>this.y2};this.isValid=function(){return this.x1<=this.x2&&this.y1<=this.y2};this.left=function(){return this.x1};this.top=function(){return this.y1};this.right=function(){return this.x2};this.bottom=function(){return this.y2};this.setLeft=function(x){this.x1=x;this.sync();return this};this.setTop=function(x){this.y1=x;this.sync();return this};this.setRight=function(x){this.x2=x;this.sync();return this};this.setBottom=function(x){this.y2=x;this.sync();return this};this.setWidth=function(x){this.x2=A(this.x1,x);this.sync();return this};this.setHeight=function(x){this.y2=A(this.y1,x);this.sync();return this};this.width=function(){return this.x2-this.x1+1};this.height=function(){return this.y2-this.y1+1};this.size=function(){return{width:this.width(),height:this.height()}};this.scale=function(J,x,F){if(F==b.None){return this}if(F===b.IgnoreAspectRatio||J===0||x===0){this.setWidth(J);this.setHeight(x);this.sync();return this}var H=this.width();var G=this.height();if(F==b.AutoDetect){if(H>J&&G>x){F=b.KeepAspectRatioByExpanding}else{if(H>J||G>x){F=b.KeepAspectRatio}else{F=b.None;return this}}}var I=false;var y=x*H/G;if(F==b.KeepAspectRatio){I=y<=J}else{I=y>=J}if(I){this.setWidth(y);this.setHeight(x)}else{this.setHeight(J*G/H);this.setWidth(J)}this.sync();return this};this.topLeft=function(){return{x:this.x1,y:this.y1}};this.bottomRight=function(){return{x:this.x2,y:this.y2}};this.topRight=function(){return{x:this.x2,y:this.y1}};this.bottomLeft=function(){return{x:this.x1,y:this.y2}};this.center=function(){return{x:(this.x1+this.x2)/2,y:(this.y1+this.y2)/2}};this.moveLeft=function(x){this.x2+=(x-this.x1);this.x1=x;this.sync();return this};this.moveTop=function(x){this.y2+=(x-this.y1);this.y1=x;this.sync();return this};this.moveRight=function(x){this.x1+=(x-this.x2);this.x2=x;this.sync();return this};this.moveBottom=function(x){this.y1+=(x-this.y2);this.y2=x;this.sync();return this};this.moveTopLeft=function(x){this.moveLeft(x.x);this.moveTop(x.y);this.sync();return this};this.moveBottomRight=function(x){this.moveRight(x.x);this.moveBottom(x.y);this.sync();return this};this.moveTopRight=function(x){this.moveRight(x.x);this.moveTop(x.y);this.sync();return this};this.moveBottomLeft=function(x){this.moveLeft(x.x);this.moveBottom(x.y);this.sync();return this};this.moveCenter=function(y){var F=this.x2-this.x1;var x=this.y2-this.y1;this.x1=y.x-F/2;this.y1=y.y-x/2;this.x2=this.x1+F;this.y2=this.y1+x;this.sync();return this};this.united=function(H){if(this.isNull()){return H}if(H.isNull()){return this}var F=this.x1;var I=this.x1;if(this.x2-this.x1+1<0){F=this.x2}else{I=this.x2}var G=H.x1;var J=H.x1;if(H.x2-H.x1+1<0){G=H.x2}else{J=H.x2}var K=this.y1;var x=this.y1;if(this.y2-this.y1+1<0){K=this.y2}else{x=this.y2}var L=H.y1;var y=H.y1;if(H.y2-H.y1+1<0){L=H.y2}else{y=H.y2}var M=new e({x1:Math.min(F,G),x2:Math.max(I,J),y1:Math.min(K,L),y2:Math.max(x,y)});return M};this.toString=function(){return"Rect(x:"+this.left()+" y:"+this.top()+" width:"+this.width()+" height:"+this.height()+")"};this.debug=function(x){var y=a("<div>").appendTo("body");y.css({position:"absolute",top:this.top()+"px",left:this.left()+"px",width:this.width()-1+"px",height:this.height()-1+"px",border:"1px solid "+x,zIndex:"99999999999999"});return y};this.toCss=function(){return{top:this.top()+"px",left:this.left()+"px",width:this.width()+"px",height:this.height()+"px"}};this.sync=function(){if(B&&f){f.offset({top:this.top(),left:this.left()}).css({position:"absolute",width:this.width(),height:this.height()})}}}var d={init:function(g){var i={marginsEnable:true,paddingsEnable:false,bordersEnable:false};a.extend(i,g);var f=a(this);if(f.length==0){return new e()}if(f.length==1){return new e({el:a(this),options:i})}var h=new e();this.each(function(){var j=new e({el:a(this),options:i});if(!j.isEmpty()){h=h.united(j)}});return h}};a.fn.rect=function(f){if(d[f]){return d[f].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof f==="object"||!f){return d.init.apply(this,arguments)}else{a.error("Method "+f+" does not exist on jQuery.rect")}}};a.fn.rect.RectClass=e;a.fn.rect.ScaleMode=b})(jQuery);

(function ($) {

    function _renderFullscrren(imgUrl, message) {
        var baseCss = {
            top: 0,
            left: 0,
            position: "fixed"
        };

        var fullscreenSize = {
            width: "100%",
            height: "100%"
        };

        var wrapperEl = $('<div class="loadingBox fade">')
            .css(baseCss)
            .css(fullscreenSize);

        var backgroundEl = $('<div class="background">')
            .css(baseCss)
            .css(fullscreenSize);


        var textEl = null;
        if (message) {
            textEl = $('<div class="message">').css({
                position: "fixed",
                top: "50%",
                width: "100%",
                textAlign: "center"
            }).text(message);
        }

        $("<img>").load(function () {
            var halfWidth = this.width / 2
            , halfHeight = this.height / 2;

            if (message) {
                textEl.css({
                    marginTop: halfHeight + 5 + "px"
                });
            }

            var imgEl = $(this).css({
                marginLeft: -halfWidth + "px",
                marginTop: -halfHeight + "px",
                top: "50%",
                left: "50%",
                position: "fixed"
            });

            wrapperEl.append(imgEl);
        })
        .attr("src", imgUrl);

        wrapperEl.append(backgroundEl);
        wrapperEl.append(textEl);
        wrapperEl.appendTo($("body"));

        setTimeout(function () {
            wrapperEl.addClass("in");
        }, 200);
        
        return wrapperEl;
    }


    function _renderBoundingRect(boundingRect, imgUrl, message) {
        var $el = $(this);
        
        var baseCss = {
            position: "absolute"
        };

        var bondingCss = boundingRect.toCss();
        bondingCss = $.extend({}, bondingCss, { top: 0, left: 0 });
        
        var wrapperEl = $('<div class="loadingBox fade">')
            .css(baseCss)
            .css(bondingCss);

        var backgroundEl = $('<div class="background white">')
            .css(baseCss)
            .css(bondingCss);

        var textEl = null;
        if (message) {
            textEl = $('<div class="text-bold">').css({
                position: "absolute",
                top: "50%",
                width: "100%",
                textAlign: "center"
            }).text(message);
        }

        $("<img>").load(function () {
            var halfHeight = this.height / 2;

            if (message) {
                textEl.css({
                    marginTop: halfHeight + 5 + "px"
                });
            }

            var imgRect = new $.fn.rect.RectClass(0, 0, this.width, this.height);
            boundingRect.moveTop(0);
            boundingRect.moveLeft(0);
            imgRect.moveCenter(boundingRect.center());

            var imgEl = $(this).css(baseCss).css(imgRect.toCss());

            
            wrapperEl.append(imgEl);
        })
        .attr("src", imgUrl);

        wrapperEl.data("loadingBox", { el: $el, originalPosition: $el.css("position"), originalMinHeight: $el.css("min-height") });
        $el.data("loadingBox", { wrapperEl: wrapperEl, originalPosition: $el.css("position"), originalMinHeight: $el.css("min-height") });
        $el.css("position", "relative");
        
        wrapperEl.append(backgroundEl);
        wrapperEl.append(textEl);
        wrapperEl.appendTo($el);

        setTimeout(function () {
            wrapperEl.addClass("in");
        }, 200);
        
        return wrapperEl;
    }

    var methods = {
        init: function (options) {
            var settings = {
                fullscrrenLoadingImgUrl: "imgs/loading-fullscreen.gif",
                loadingImgUrl: "imgs/loading.gif",
                message: "",
                boundingRect: null
            };

            var $el = $(this);
            settings = $.extend(settings, options);

            if ($(this).length) {
                if (!settings.boundingRect) {
                    if ($el.width() > 0 && $el.height() < 40) {
                        $el.css("min-height", "40px");
                    }
                    settings.boundingRect = $(this).rect();
                }
                return _renderBoundingRect.apply(this,[settings.boundingRect, settings.loadingImgUrl, settings.message]);
            }

            return _renderFullscrren(settings.fullscrrenLoadingImgUrl, settings.message);
        },

        destroy: function () {
            var $el = $(this);
            var $wrapperEl = $el;
            var data = $el.data("loadingBox");
            
            if (data) {
                if (data.wrapperEl) {
                    $wrapperEl = data.wrapperEl;
                } else if (data.el) {
                    $el = data.el;
                    $wrapperEl = $(this);
                }

                $el.css({
                    "position": "",
                    "min-height": data.originalMinHeight
                });

                $wrapperEl.remove();
            } else {
                this.remove();
            }
        }
    };


    $.fn.loadingBox = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.loadingBox');
        }
    };

})(jQuery);
