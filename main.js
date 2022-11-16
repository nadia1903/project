$(document).ready(function(){
$('.header').height($(window).height());
})
$(document).ready(function(){
    $('a.nav-link').click(function() {
      let navigationHeight = $(".navbar").innerHeight();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - navigationHeight
          }, 1000);
        return false;
      });
});
$(document).ready(function(){
    $('a.navbar-brand').click(function() {
        $('html, body').animate({
            scrollTop: "0"
          }, 1000);
        return false;
      });
});


function rnd_btn_click(e){
  let min = Number(document.getElementById("min").value);
  let max = Number(document.getElementById("max").value);
  let h = document.getElementById("result");
  let a = Math.floor(Math.random()*(max - min + 1) + min);
  h.textContent = String(a);
  return false;
}