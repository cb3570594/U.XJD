$(window).on('load',function(){
	var list_news=document.getElementById('lastest-news');
	var con1=document.getElementById('con1');
	var con2=document.getElementById('con2');
	con2.innerHTML=con1.innerHTML;
	list_news.scrollTop=0;
	function scrollUp(){
		if(list_news.scrollTop>con1.offsetHeight){
			list_news.scrollTop=0;
		}else{
			list_news.scrollTop++;
		}
	}
	var myScroll=setInterval('scrollUp()',50);
	list_news.onmouseover=function(){
		clearInterval(myScroll);
	}
	list_news.onmouseout=function(){
		myScroll=setInterval('scrollUp()',50);
	}
	getDate();	
	getWeather();
	$('.top-content li a').on({
		mouseover:function(){
			$(this).css('color','#959595')},
		mouseout:function(){
			$(this).css('color','#666666')}
	})
	$('.nav-left li a').on({
		mouseover:function(){
			$(this).css('color','#000000')},
		mouseout:function(){
			$(this).css('color','#F5F5F5');}
	})
	setInterval(clock,100);
})
//获取天气
function getWeather(){
	$.getScript('http://php.weather.sina.com.cn/iframe/index/w_cl.php?code=js&day=0&city=&dfc=1&charset=utf-8',function(a){
		var s="",r="",q="";
		for(s in window.SWther.w){
			q=SWther.w[s][0];
			r={city:s,date:SWther.add.now.split(" ")[0]||"",day_weather:q.s1,night_weather:q.s2,day_temp:q.t1,night_temp:q.t2,day_wind:q.p1,night_wind:q.p2},
			$("#weather").html("今日天气："+q.s1+"&nbsp&nbsp&nbsp&nbsp"+"位置："+r.city);
			//alert(q[0])
		}
	});
}
//获取日期
function getDate(){
	var myDate=new Date();
	var weekday=['星期日',"星期一","星期二","星期三","星期四","星期五","星期六"];
	$('#date').html("|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"
	+myDate.getFullYear()+"年"
	+(myDate.getMonth()+1)+"月"
	+myDate.getDate()+"日"+"&nbsp;"
	+weekday[myDate.getDay()]);
}
//获取时间
var mytime;
function clock(){
	var myDate=new Date();
	if(myDate.getHours()<10){
		var h='0'+myDate.getHours();
	}else{
		var h=myDate.getHours();
	}
	if(myDate.getMinutes()<10){
		var m='0'+myDate.getMinutes();
	}else{
		var m=myDate.getMinutes();
	}
	if(myDate.getSeconds()<10){
		var s='0'+myDate.getSeconds();
	}else{
		var s=myDate.getSeconds();
	}
	mytime=h+":"+m+":"+s;
	$('#time').html("|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+mytime);
}

	


//通过id获取dom元素
var getDom=function(id){
		return document.getElementById(id);
}
//添加事件
var addEvent=function(id,event,fn){
	var el =getDom(id)||document;
	if(el.addEventListener){
		el.addEventListener(event,fn,false);
	}else if(el.attachEvent){
		el.attachEvent('on'+event,fn);
	}
}