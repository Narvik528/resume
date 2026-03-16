document.addEventListener("DOMContentLoaded", function() {
  let intervalId = setInterval(function() {
    let progress = 0;
    document.querySelector(".HTML-bar").style.width = progress + 195 + 'px'
    document.querySelector(".BootStrap-bar").style.width = progress + 180 + 'px'
    document.querySelector(".CSS-bar").style.width = progress + 170 + 'px'
    document.querySelector(".React-bar").style.width = progress + 160 + 'px'
    document.querySelector(".JavaScript-bar").style.width = progress + 60 + 'px'
    document.querySelector(".Jquery-bar").style.width = progress + 5 + 'px'
    document.querySelector(".Java-bar").style.width = progress + 90 + 'px'
    document.querySelector(".Python-bar").style.width = progress + 40 + 'px'
    document.querySelector(".Node-bar").style.width = progress + 10 + 'px'
    document.querySelector(".SQL-bar").style.width = progress + 120 + 'px'
    document.querySelector(".Russion-bar").style.width = progress + 180 + 'px'
    document.querySelector(".English-bar").style.width = progress + 30 + 'px'
    if (progress >= 200) {
      clearInterval(intervalId);
    }
  }, 2500);
});