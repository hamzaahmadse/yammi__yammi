$(document).ready(function(){
  $("#priceType1").click(function(){
    $("#priceSize").hide();
    $("#cloneInput").hide();
  });

  $("#priceType1").click(function(){
    $(".single-price").show();
  });


    $("#priceType2").click(function(){
    $(".single-price").hide();
  });
    
  $("#priceType2").click(function(){
    $("#priceSize").show();
    $("#cloneInput").show();
  });

});
