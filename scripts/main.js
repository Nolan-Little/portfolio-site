// Materialize.js initializations-------------------------
$(document).ready(function () {
  $('.sidenav').sidenav();
});

$(document).ready(function () {
  $('.scrollspy').scrollSpy();
});

$(document).ready(function(){
  $('.tabs').tabs();
});


$(document).ready(function(){
  $('.modal').modal();
});

$(document).ready(function(){
  $('.materialboxed').materialbox();
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

