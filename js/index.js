
function init(){
    setTimeout(function() {
        document.getElementById("loading").classList.add("isFinish")
      }, 5000);
      setTimeout(function() {
        document.getElementById("loading").remove()
      }, 6000);
     setTimeout(function() {
        document.getElementById("overlay").classList.add("is-open")
        document.getElementById("canvas-bg").classList.add("is-open")
      }, 6000);
      setTimeout(function() {
        document.getElementById("navbar").style.display ='flex';
        document.getElementById("prev").style.opacity = '1';
        document.getElementById("next").style.opacity = '1';
      }, 7000);
      //document.getElementById("overlay").classList.add("is-open");
}

init();

