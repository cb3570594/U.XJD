var slidesIndex=0;
window.onload = function() {
	//showSlides(1);
	
	autoShowslides();
	clickShowslides();
	stopstart_Slides();
	plusSlides();
	//stopstart_Slides();
//	var list_news = document.getElementById('lastest-news');
//	list_news.scrollTop = 10;
	//scrollNews();
}

function plusSlides() {
	addEvent('prev','click',function(){
		clearTimeout(time);
		autoShowslides();
	})
	addEvent('next','click',function(){
		clearTimeout(time);
		autoShowslides();
	})
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if(n > slides.length) {
		n = 1;
		slidesIndex = 1;
	}
	if(n < 1) {
		n = slides.length
	}
	for(i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for(i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[n - 1].style.display = "block";
	dots[n - 1].className += " active";
}
function clickShowslides(){
	var spans=document.getElementsByClassName('dot');
	for(var i=0;i<spans.length;i++){
		spans[i].index=i;
		spans[i].onclick=function(){
			clearTimeout(time);
			slidesIndex=this.index+1;
			showSlides(slidesIndex);
		}
	}
}
function autoShowslides(){
	slidesIndex++;
	showSlides(slidesIndex);
	time=setTimeout(autoShowslides,2000);
}
function stopstart_Slides(){
	var slides=document.getElementsByClassName('dot');
	for(var i=0;i<slides.length;i++){
		slides[i].onmouseenter=function(){
			clearTimeout(time);
		}
		slides[i].onmouseout=function(){
			clearTimeout(time);
			slidesIndex-=1;
			autoShowslides();
		}
	}
}
