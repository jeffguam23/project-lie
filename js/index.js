var time;
var transparency = 0;

function fadeIn() {
  
  transparency += 5; 
  
  transparency = (transparency == 100) ? clearInterval(time) : transparency;
  
  obj = document.getElementById('fading');
 
  if (document.all){ 
    
    obj.style.filter = 'alpha(opacity='+transparency+')';
  }else{
    // Safari 1.2, Firefox y Mozilla, CSS3
    obj.style.opacity = transparency /100;
    
    // anteriores Mozilla y Firefox
    obj.style.MozOpacity = transparency /100;
    
    // Safari anterior a 1.2, Konqueror
    obj.style.KHTMLOpacity = transparency /100;  
  } 
};

window.onload = function() {
  
  time = setInterval('fadeIn()',100);
};