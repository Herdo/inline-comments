!function(t,$,n){var i,o="incom_wrapper",e="#"+o,a="html",r="comments-and-form",c="#"+r,s="incom-commentform",u="data-incom",l=u+"-comment",f=[],d=u+"-bubble",m=u+"-ref",p="incom-active",v="."+p,b="incom-visible-comment",h="."+b,g="incom-position-",y="incom-bubble",w="."+y,k=y+"-style",C=y+"-static",S="."+C,T=y+"-dynamic",x=y+"-active",A=y+"-link",I="incom-comments-wrapper",O="."+I,D="incom-reply",W="."+D,j="incom-cancel",q="."+j,z="incom-info-icon",B="."+z,E="incom-scrolled-to",F=c+" .comment",N="data_incom",_=0,L=$(window).width(),Q,X,Y;t.init=function(t){G(t),H(),J(),qn(),On(),$(W+" .comment-reply-link").on("click",function(){$(c+" #commentform").attr("id",s)})};var G=function(t){i=$.extend({selectors:"p",moveSiteSelector:a,countStatic:!0,alwaysStatic:!1,defaultBubbleText:"+",bubbleStyle:"bubble",bubbleAnimationIn:"default",bubbleAnimationOut:"default",position:"left",background:"white",backgroundOpacity:"1"},t)},H=function(){0===$(e).length&&$('<div id="'+o+'"></div>').appendTo($(a)).addClass(g+i.position)},J=function(){$(i.selectors).each(function(){K($(this)),M.createFromElement($(this))})},K=function(t,n){if(n=n||0,!t.attr(u)){var i=P(t);n=R(n,i);var o=i+n;t.attr(u,o)}},M={set:function(t){var i=$.extend({posX:n,posY:n,id:n,visible:!1},t)},createFromElement:function(t){U(t)}},P=function(t){var n=t.prop("tagName").substr(0,5);return n},R=function(t,n){var i=n+t;if(-1!==$.inArray(i,f))for(;-1!==$.inArray(i,f);)t++,i=n+t;return f.push(i),t},U=function(t){var n=V(t),i=tn(t),o=$("<a/>",{href:"","class":A}).text(n).wrap(i).parent().appendTo(e);en(o),pn(t,o),bn(o)?(an(t,o),rn(t,o)):o.hide()},V=function(t){var n;return n=on(t)?Z(t):i.defaultBubbleText},Z=function(t){var n=t.attr(u),i="["+l+"="+n+"]",o=$(i).length;return o+=$(i+" .children li").length},tn=function(t){var n=t.attr(u),i='<div class="'+nn(t)+'" '+d+'="'+n+'" />';return i},nn=function(t){var n=y,o=" ";return(i.alwaysStatic||on(t)&&i.countStatic)&&(n+=o+C),n+=on(t)||!on(t)&&"bubble"===i.bubbleStyle?o+k:o+T},on=function(t){var n=Z(t);return $.isNumeric(n)&&n>0?!0:!1},en=function(t){t.hasClass(C)&&t.css("display","block")},an=function(t,n){n.hasClass(C)||t.add(n).hover(function(){$(w+":not("+S+")").hide(),"fadein"===i.bubbleAnimationIn?n.stop(!0,!0).fadeIn():n.stop(!0,!0).show(),bn(n)||n.hide()},function(){"fadeout"===i.bubbleAnimationOut?n.stop(!0,!0).fadeOut():n.stop(!0,!0).delay(700).hide(0)})},rn=function(t,n){n.on("click",function(i){i.preventDefault(),$(this).hasClass(x)?(Cn(!0),$(this).removeClass(x)):(jn(p),t.addClass(p),Cn(),n.addClass(x),sn(n))})},cn=function(){var t;return t=0===$(O).length?$("<div/>",{"class":I}).appendTo(e).css("background-color","rgba("+Bn(i.background)+","+i.backgroundOpacity+")"):$(O)},sn=function(t){var n=cn();dn(),ln(),pn(t,n),hn(n),wn(),un()},un=function(){$(document).ready(kn()).ajaxStop(function(){kn()})},ln=function(){$(c).appendTo(O).show(),fn()},fn=function(){var t=$("<input>").attr("type","hidden").attr("name",N).val(mn);$(c+" .form-submit").append($(t))},dn=function(){var t="["+l+"="+mn()+"]";$(F).hide(),$(F+t).addClass(b).show(),$(h+" .children li").show()},mn=function(){var t=$(v).attr(u);return t},pn=function(t,n){var i=t.offset();n.css({top:i.top,left:In()?i.left+t.outerWidth():i.left-n.outerWidth()})},vn=function(t){Q=t.outerWidth(),X=t.offset().left,Y=X+Q},bn=function(t){return vn(t),Y>L||0>X?!1:!0},hn=function(t){vn(t),In()&&Y>L?(gn(Y-L),Sn("in")):!In()&&0>X&&(gn(-X),Sn("in"))},gn=function(t){_=t},yn=function(){return _},wn=function(){$("html").click(function(t){0===$(t.target).parents(e).length&&Cn(!0)})},kn=function(){$(q).click(function(t){t.preventDefault(),Cn(!0)})},Cn=function(t){var n=$(w),i=$(O);$(c).appendTo(e).hide(),$(h).removeClass(b),n.hasClass(x)&&(n.removeClass(x),t?i.fadeOut("fast",function(){$(this).remove(),jn(p)}):i.remove(),Sn("out"))},Sn=function(t){var n=$(i.moveSiteSelector);n.css({position:"relative"}),Tn(n,t),i.moveSiteSelector!==a&&(An(t,w),An(t,O))},Tn=function(t,n){var i;"in"===n?i=yn():"out"===n&&(i="initial"),xn(t,i)},xn=function(t,n){var o={};o[i.position]=n,t.css(o)},An=function(t,n){var i=$(n);"in"===t?i.css({left:In()?"-="+yn():"+="+yn()}):"out"===t&&i.css({left:In()?"+="+yn():"-="+yn()})},In=function(){return"right"===i.position?!0:!1},On=function(){var t=m,n=u;Dn(t,n),Wn(t,n)},Dn=function(t,n){$("["+t+"]").each(function(){var i=$(this),o=i.attr(t),e=$("["+n+'="'+o+'"]');e.length||i.parent().remove()})},Wn=function(t,n){$("["+t+"]").click(function(){var i=$(this).attr(t),o=$("["+n+'="'+i+'"]');if(o.length){var e=o.offset().top-30;$("html, body").animate({scrollTop:e},1200,"quart"),jn(E),o.addClass(E)}})},jn=function(t){var n=$("."+t);0!==n.length&&(n.removeClass(t),0===n.prop("class").length&&n.removeAttr("class"))},qn=function(){var t=$(B);if(t.length){t.css({display:"block",visibility:"visible"}),(t.css("opacity")<.2||zn(t)<.2)&&t.css({color:"rgba(0,0,0,1)"}).fadeTo("fast",.5);var n=t.css("font-size").replace(/\D/g,"");6>n&&t.css({"font-size":"13px"});var i=t.css("color");/\s/g.test(i)&&(i=i.replace(/\s/g,"")),i=i.toLowerCase(),("rgb(255,255,255)"===i||"white"===i||"rgba(255,255,255,0)"===i)&&t.css("cssText","color: black!important;")}},zn=function(t){var n=1,i=t.css("color");return/rgba/i.test(i)&&(n=i.replace(/^.*,(.+)\)/,"$1")),n},Bn=function(t){var n=parseInt(En(t).substring(0,2),16),i=parseInt(En(t).substring(2,4),16),o=parseInt(En(t).substring(4,6),16);return n+","+i+","+o},En=function(t){return"#"===t.charAt(0)?t.substring(1,7):t};$.easing.quart=function(t,n,i,o,e){return-o*((n=n/e-1)*n*n*n-1)+i}}(window.incom=window.incom||{},jQuery);