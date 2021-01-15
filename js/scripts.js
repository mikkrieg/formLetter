$(document).ready(function(){
  $("form").submit(function(e){
    e.preventDefault();
    let name = $("input#letter").val();
    $("span#name").text(name);
    $(".hide").hide();
    $("div#hidden").show();
  });
});