$(function(){
				$("#background").css({"position":"fixed","width":"100%","height":"100%"});
				$("#background").append("<image src='http://pp0aocw81.bkt.clouddn.com/timg%20%283%29.jpg' class='beijing'>");	
				$("#background").append("<div id='logo'></div>");
				$("#logo").append("<img src='http://pp0aocw81.bkt.clouddn.com/%E8%AF%B4%E6%97%B6%E4%BE%9D%E6%97%A7.PNG' class='logoa'>");
				$("#logo").append("<img  src='http://pp0aocw81.bkt.clouddn.com/%E5%95%86%E6%A0%87%E8%AE%A4%E8%AF%81.png' class='shangbiao'/>");
				$("#logo").css({"position":"absolute","left":"377px","top":"523px"});
				$("#logo").css({"position":"absolute","left":"377px","top":"523px"});
				$(".logoa").css({"width":"216px","height":"189px"});
				$(".beijing").css({"width":"100%","height":"100%"});
				$(".shangbiao").css({"width":"50px","height":"50px","position":"relative","left":"9px","top":"-191px"});
				$("#background").append("<button id='anniu'><p><b>登&nbsp;&nbsp;&nbsp;陆</b></p></button>");
				$("#anniu").css({"background-color":"#006666","width":"301px","height":"68px","font-size":"38px","border-radius":"17px","transition":"background-color 1.5s","position":"absolute","left":"326px","top":"1411px","color":"white"});
				
				
				
				
				$("#background").append("<div id='tanchuang'></div>");
				$("#tanchuang").css({"width":"100%","height":"100%","position":"absolute","top":"1600px","background-color":"rgba(0,0,0,0.5)"});
				$("#tanchuang").append("<div id='xiatanchuang'></div>");
				$("#xiatanchuang").css({"width":"100%","height":"33%","position":"absolute","bottom":"0px","background-color":"rgba(0,0,0,0.1)"});
				$("#tanchuang").append("<img src='http://pp0aocw81.bkt.clouddn.com/%E5%BE%AE%E4%BF%A1%20%281%29.png' class='tcwx'>");
				$("#tanchuang").append("<img src='http://pp0aocw81.bkt.clouddn.com/QQ%20%281%29.png' class='tcqq'>");
				$("#tanchuang").append("<img src='http://pp0aocw81.bkt.clouddn.com/%E5%BE%AE%E5%8D%9A.png' class='tcwb'>");
				$(".tcwx").css({"position":"absolute","width":"100px","height":"100px","left":"139px","top":"1024px"});
				$(".tcqq").css({"position":"absolute","width":"100px","height":"100px","left":"442px","top":"1024px"});
				$(".tcwb").css({"position":"absolute","width":"100px","height":"100px","left":"724px","top":"1024px"});
//				$("#tanchuang").append("<hr /> class='leftxian'>");
//				$(".leftxian").css({"position":"absolute","left":"100px","top":"100px","color":"red"});
				$("#tanchuang").append("<hr / class='leftxian'>");
				$(".leftxian").css({"position":"absolute","left":"0px","top":"936px","align":"left","width":"35%","background-color":"lightgrey"});
				$("#tanchuang").append("<hr / class='rightxian'>");
				$(".rightxian").css({"position":"absolute","left":"634px","top":"936px","align":"right","width":"35%","background-color":"lightgrey"});
				$("#tanchuang").append("<p class='disanfang'>第三方账号登录</p>");
				$(".disanfang").css({"position":"absolute","left":"375px","top":"912px","color":"lightgrey","font-size":"33px"});
				$("#tanchuang").append("<p class='wangjimima'>忘记密码？</p>");
				$(".wangjimima").css({"position":"absolute","left":"764px","top":"848px","color":"lightgrey","font-size":"30px"});
				$("#tanchuang").append("<input type='text' placeholder='手机号/邮箱/会员名' class='user'/>");
				$(".user").css({"position":"absolute","left":"165px","top":"610px","border-radius":"20px","width":"650px","height":"70px","font-size":"33px","text-indent":"42px"});
				$("#tanchuang").append("<input type='password' placeholder='密码' class='password'/>");
				$(".password").css({"position":"absolute","left":"165px","top":"710px","border-radius":"20px","width":"650px","height":"70px","font-size":"33px","text-indent":"42px"});
				
				
				
				$("#background").append("<div id='erweima'></div>");
				$("#erweima").css({"position":"absolute","left":"264px","top":"410px","width":"800px","height":"800px"});
				$("#erweima").append("<img src='http://pp0aocw81.bkt.clouddn.com/IdWTZX2cMA==.jpg'  class='erweimaone'/>");
				$("#background").append("<p id='saomiao'>长按识别二维码登陆</p>");
				$("#saomiao").css({"font-size":"40px","color":"white","position":"absolute","left":"40px","top":"531px"});
				
				
				
				$("#background").append("<div id='qqtanchuang'></div>");
				$("#qqtanchuang").css({"position":"absolute","left":"87px","top":"410px","width":"800px","height":"500px","background-color":"white","opacity":"0","z-index":"-1"});
				$("#qqtanchuang").append("<p><b>QQ登陆</b></p>");
				$("#qqtanchuang").append("<span id='shenqing'>QQ申请获得以下权限</span>");
				$("#qqtanchuang").append("<hr id='fengexian' />");
				$("#qqtanchuang").append("<span id='huode'>获得你的公开信息（昵称、头像等）</span>");
				$("#qqtanchuang p").css({"font-size":"50px","position":"absolute","left":"305px","top":"30px"});
				$("#shenqing").css({"font-size":"30px","position":"absolute","left":"255px","top":"121px"});
				$("#huode").css({"font-size":"30px","position":"absolute","left":"175px","top":"260px"});
				$("#fengexian").css({"position":"absolute","left":"75px","top":"210px","width":"659px","background-color":"black"});
				$("#qqtanchuang").append("<button id='fou'><p><b>否</b></p></button>");
				$("#qqtanchuang").append("<a href='商品.html'><button id='shi'><p><b>是</b></p></button></a>");
				$("#fou").css({"border":"1px solid black","position":"absolute","left":"100px","top":"360px","width":"254px","height":"77px","font-size":"38px"});
				$("#shi").css({"border":"1px solid black","position":"absolute","left":"455px","top":"360px","width":"254px","height":"77px","font-size":"38px"});
				
				
				
				
//				$("#qqtanchuang").append("<img src='http://pp0aocw81.bkt.clouddn.com/IdWTZX2cMA==.jpg'  class='tan'/>");
//				$(".tan").append("<p id='saomiao'>长按识别二维码登陆</p>");
//				$("#saomiao").css({"font-size":"40px","color":"white","position":"absolute","left":"40px","top":"531px"});
//				
				
				
				
				
				
			})