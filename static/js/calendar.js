;(function(window){
	var d,i,c,clickHandler;
	if(window.calendar){
		return false;
	}
	if(!window.FormData){
		return false;	
	}
	
	clickHandler = function(){
		d.parentNode && document.body.removeChild(d);
		c.removeEventListener('click',clickHandler);	
		d = i = c = null;
		delete window.calendar;				
	}
	
	i = document.createElement('iframe');
	i.setAttribute('width','470');
	i.setAttribute('height','320');
	i.setAttribute('autofocus','autofocus');
	i.style.cssText = ';border:none;';
	i.src = 'https://www.google.com/calendar/embed?showTitle=0&showCalendars=0&height=320&wkst=1&hl=zh_CN&bgcolor=%23FFFFFF&src=sdovtcm6h7cqdml18f6sucfseg%40group.calendar.google.com&color=%23853104&ctz=Asia%2FShanghai';
	i.onload = function(){ i.focus(); };
	
	c = document.createElement('div');
	c.innerHTML = '&#x5173;&#x95ED';//关闭
	c.style.cssText = [
		 ''
		,'width:40px'
		,'box-shadow:0 0 2px #333'
		,'position:absolute'
		,'right:0'
		,'bottom:-25px'
		,'line-height:25px'
		,'padding:0'
		,'margin:0'
		,'border-radius:0'
		,'border:none'
		,'background:#515151'
		,'z-index:99999'
		,'text-align:center'
		,'color:#aaa'
		,'cursor:pointer'
		,''
	].join(';');
	c.addEventListener('click',clickHandler);

	d = document.createElement('div');
	d.style.cssText = [
		 ''
		 ,'width:470px'
		 ,'height:320px'
		 ,'box-shadow:0 0 10px #333'
		 ,'position:fixed'
		 ,'top:0'
		 ,'right:0'
		 ,'z-index:1000000'
		 ,'font-family:arial,sans-serif'
		 ,'padding:0'
		 ,'margin:0'
		 ,'border-radius:0'
		 ,'background:#515151'
		 ,''
	].join(';');
	d.appendChild(c);
	d.appendChild(i);
	document.body.appendChild(d);
	window.calendar = d;	
})(window);