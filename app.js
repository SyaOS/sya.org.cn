var $board;$.fn.board3d=function(){var e,n,t;return e=$(this),t=e.width(),n=e.height(),e.on("mousemove",function(a){return e.css({position:"relative",transform:"rotateX("+-(a.originalEvent.layerY-n/2)/n*10+"deg) rotateY("+(a.originalEvent.layerX-t/2)/t*10+"deg)",transition:"all .2s"})}),e.on("mouseleave",function(n){return e.css({transform:""})})},($board=$('[data-board="3d"]')).each(function(e){return $(this).board3d()});var $body,$inner,$member,$memberList,$ori,$outer,$window,baseGamma,members,rangeGamma;$.fn.noscroll=function(e){var n,t,a;return n=$(this),t=null,t=e?$(e):n.parent(),function(e){return e.preventDefault(),e.stopPropagation()},a=function(e){var a,r,o;if(r=t.width(),a=n.width(),$.event.fix(e),(o=e.originalEvent.x-t.offset().left||e.originalEvent.layerX)>0&&r<a)return n.css({marginLeft:(r-a)*o/r})},t.on("mousemove",a)},members=["pan_wenbin","chen_chi","chen_long","chen_weiyu","cheng_qixiang","feng_guangyu","li_xiaolong","liang_xuanran","meng_xiaolong","cao_rui","shang_jiashuang","shu_mi","wang_dan","wei_yuanyue","wen_xutao","wu_yingchuan","zhang_su","zhang_zhuobin","zhao_weizhong"],$body=$("body"),$memberList=$(".memberinfo ul"),members.forEach(function(e,n){return $memberList.append($('<li class="member"><img data-member="'+e+'" src="members/'+e+'/default.png"></li>'))}),$memberList.noscroll($body),$member=$(".member img"),$body.on("mousemove",function(e){var n;return n=e.clientX,$member.each(function(){var e,t,a,r;return e=$(this),t=e.data("member"),r=e.width(),a=e.offset().left,e.removeClass("focus").removeClass("left").removeClass("right"),a<n&&a>=n-r?e.attr("src","members/"+t+"/focus.png"):a>=n?e.attr("src","members/"+t+"/left.png"):a<n-r?e.attr("src","members/"+t+"/right.png"):void 0})}),baseGamma=0,rangeGamma=10,$window=$(window),$ori=$("#ori"),$outer=$("body"),$inner=$(".memberinfo ul"),$window.on("deviceorientation",function(e){var n,t,a,r,o,i;return t=e.originalEvent,o=$outer.width(),r=$inner.width(),i=$window.width(),n=t.alpha,a=t.gamma,$inner.css({marginLeft:(o-r)*(n-360)/-360}),$member.each(function(){var e,n,t,r,o;return e=$(this),t=e.data("member"),o=e.width(),r=e.offset().left,n=i*(a+rangeGamma)/(2*rangeGamma),e.removeClass("focus").removeClass("left").removeClass("right"),r<n&&r>=n-o?e.attr("src","members/"+t+"/focus.png"):r>=n?e.attr("src","members/"+t+"/left.png"):r<n-o?e.attr("src","members/"+t+"/right.png"):void 0})}),$("[data-show]").on("click",function(){return $($(this).attr("data-show")).addClass("active").one("click",function(){return $(this).removeClass("active")})}),function(e){var n,t;n=$("#cloud-section .foreground"),t=$("#cloud-section img"),e.fullpage({verticalCentered:!1,resize:!1,easing:"swing",menu:".menu, toggle-menu",anchors:["home","data","cloud","mobile","case","contact"],animateAnchor:!1,sectionSelector:"section",touchSensitivity:Modernizr.touch?void 0:Infinity,onLeave:Modernizr.cssanimations?function(e,a){var r;if(3===e&&(r=t.offset(),n.css("background-position",r.left+"px "+r.top+"px")),3===a)return n.css("background-position","")}:void 0})}(jQuery("article"));var $langButtons,$langs;$langButtons=$("[data-lang]"),$langs={},$langButtons.each(function(){var e;return e=$(this).attr("data-lang"),$langs[e]=$("[data-lang-"+e+"]")}),$(".lang").on("click","[data-lang]",function(){var e;return $langButtons.attr("aria-checked","false").removeClass("active"),e=$(this).addClass("active").attr("aria-checked","true").attr("data-lang"),$("html").attr("lang",e),$langs[e].each(function(){var n;return(n=$(this)).is("img")?n.attr("alt",n.attr("data-lang-"+e)):n.html(n.attr("data-lang-"+e))})}),$('[data-lang="zh"]').trigger("click"),$(window).load(function(){return $(".splash").addClass("load")});var $body,$toggleMenu,$toggleMenuButton;$body=$("body"),$toggleMenuButton=$(".toggle-menu-button"),$toggleMenu=$(".toggle-menu"),$toggleMenuButton.on("click",function(e){return e.stopPropagation(),$toggleMenu.toggleClass("show")}),$toggleMenu.on("click",function(e){return e.stopPropagation()}),$body.on("click",function(){return $toggleMenu.removeClass("show")});