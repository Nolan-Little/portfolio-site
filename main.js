$(document).ready(function () {
  $('.sidenav').sidenav();
});

$(document).ready(function () {
  $('.scrollspy').scrollSpy();
});

$(document).ready(function(){
  $('.tabs').tabs();
});


// technologies tabs-----------------------------------------
$('#tool').on("click", () => {
  $('.tool').removeClass("hidden")
  $('.code').addClass("hidden")
})

$('#code').on("click", () => {
  $('.code').removeClass("hidden")
  $('.tool').addClass("hidden")
})

$('#all').on("click", () => {
  $('.code').removeClass("hidden")
  $('.tool').removeClass("hidden")
})

