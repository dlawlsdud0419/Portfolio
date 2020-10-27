function init(){
    setTimeout(function() {
        document.getElementById("loading").classList.add("isFinish")
      }, 3000);
      setTimeout(function() {
        document.getElementById("loading").remove()
      }, 4000);
     setTimeout(function() {
        document.getElementById("overlay").classList.add("is-open")
      }, 4000);
      
}

init();