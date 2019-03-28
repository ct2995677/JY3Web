$(function(){
				$("#huadong").css({"display":"flex","height":"100%","flex-direction":"column"});
				$("#huadong").append("<div id='menu'></div>");
				$("#menu").css({"height":"100px","background-color":"white","width":"100%","position":"fixed","bottom":"0","display":"flex","flex-direction":"row","align-items":"center"});
				$("#menu").append("<img src='http://pp0aocw81.bkt.clouddn.com/%E5%A4%B4%E5%83%8F5%20%281%29.png' class='me'>");
				$(".me").css({"height":"80px","display":"flex","flex":"0.08"});
				$("#menu").append("<select><option value='beijin'>北京</option><option value='tianjin'>天津</option><option value='shanghai'>上海</option><option value='guangzhou'>广州</option><option value='chengdu'>成都</option><option value='nanjing'>南京</option><option value='shenzhen'>深圳</option><option value='qingdao'>青岛</option></select>");
				$("select").css({"height":"80px","font-size":"40px","font-weight":"bold","display":"flex","flex":"0.25","padding":"0 2%","text-align":"center","border-top":"none","border-right":"none","border-bottom":"none","text-indent":"69px"});
				$("option").css({"font-size":"14px","color":"orange","font-weight":"bold"});
				$("#menu").append("<input type='datetime-local' class='time'/>");
				$(".time").css({"height":"76px","font-size":"40px","font-weight":"bold","display":"flex","flex":"0.57","border-top":"none","text-indent":"19px","border-bottom":"none"});
				$("#menu").append("<img src='http://pp0aocw81.bkt.clouddn.com/%E7%AE%AD%E5%A4%B4.png' class='jiantou'>");
				$(".jiantou").css({"height":"80px","display":"flex","flex":"0.1"});
				
				
				
				
				
				
				
				
				$("#huadong").append("<div id='shangpin'></div>");
				$("#shangpin").css({"width":"100%","display":"flex","background-color":"blue","top":"0","flex-direction":"column"});
//				$("#shangpin").append("<div id='biaoti'></div>");
				
				$("#biaoti").css({"width":"100%","height":"100px","background-color":"#996699","font-size":"71px","font-family":"jokerman","color":"white","text-align":"center"});
				$("#shangpin").append("<div id='bannder'></div>");
				
				$("#bannder").css({"width":"100%"});






			})