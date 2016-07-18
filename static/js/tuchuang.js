;(function(window){
	var d,i,c,clickHandler;
	if(window.tuchuang){
		return false;
	}
	if(!window.FormData){
		return false;	
	}
	
	clickHandler = function(){
		d.parentNode && document.body.removeChild(d);
		c.removeEventListener('click',clickHandler);	
		d = i = c = null;
		delete window.tuchuang;				
	}
	
	i = document.createElement('iframe');
	i.setAttribute('width','100%');
	i.setAttribute('height','300');
	i.setAttribute('autofocus','autofocus');
	i.style.cssText = ';border:none;';
	i.src = 'http://wxtuchuang.duapp.com/drag';
	i.onload = function(){ i.focus(); };
	
	c = document.createElement('div');
	c.innerHTML = '&#x5173;&#x95ED';//关闭
	c.style.cssText = [
		 ''
		,'width:40px'
		,'box-shadow:0 0 2px #333'
		,'position:absolute'
		,'left:0'
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
		 ,'width:100%'
		 ,'height:300px'
		 ,'box-shadow:0 0 10px #333'
		 ,'position:fixed'
		 ,'top:0'
		 ,'left:0'
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
	window.tuchuang = d;	
})(window);