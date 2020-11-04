
function init(){
    setTimeout(function() {
        document.getElementById("loading").classList.add("isFinish")
      }, 6000);
      setTimeout(function() {
        document.getElementById("loading").remove()
      }, 7000);
     setTimeout(function() {
        document.getElementById("overlay").classList.add("is-open")
        document.getElementById("canvas-bg").classList.add("is-open")
      }, 7000);
      setTimeout(function() {
        document.getElementById("navbar").style.display ='flex';
        document.getElementById("prev").style.opacity = '1';
        document.getElementById("next").style.opacity = '1';
      }, 8000);
      //document.getElementById("overlay").classList.add("is-open");
}

init();

