
let can = document.getElementById("canvas-bg");
const ctx = can.getContext('2d');
const video = document.getElementById('video');
let currentPage = 1;

function canvas(){
    can.style.top = 48+"px";
    can.style.width =  window.innerWidth+"px";
    can.style.height = window.innerHeight-48+"px";
}

function click_next(){
  currentPage = currentPage+1;
  if(currentPage >= 5 && currentPage === 5){
    currentPage = 4;
    back();
  } else {
    video.src = "video/"+currentPage+".mp4";
    back();
  }
}

function click_prev(){
  currentPage = currentPage-1;
  if(currentPage <= 0 && currentPage === 0){
    currentPage = 1;
    back();
  } else {
    video.src = "video/"+currentPage+".mp4";
    back();
  }
}


function back(){
    video.addEventListener('play', function() 
    {
      var i=window.setInterval(function() {ctx.drawImage(video,0,0,300,150)},60);
    },false);
    video.addEventListener('pause',function() 
    {
      window.clearInterval(i);
    },false);
    video.addEventListener('ended',function() 
    {
      clearInterval(i);
    },false); 
}

function init(){
    canvas()
    setInterval(canvas, 10); 
    
}

init();
back(); 

