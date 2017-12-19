
	
	
function scrollUp(nn){
	nn++;
}
function scrollNews(){
	var list_news = document.getElementById('lastest-news');
	var listtop=document.getElementById('lastest-news').scrollTop;
	listtop=10;
	var time = 1000;
	var settime=setInterval('scrollUp(listtop)',time);
}
