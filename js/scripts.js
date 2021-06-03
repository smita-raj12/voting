$(document).ready(function() {
  $("#formvot").submit(function(event) {
    event.preventDefault();
    $("#formvot").hide();
    const IdInput = $("input#id").val();
    const nameInput = $("input#name").val();
    const ageInput= $("input#age").val();
    const addInput = $("input#add").val();
    
    $(".id").text(IdInput);
    $(".name").text(nameInput);
    $(".age").text(ageInput);
    $(".add").text(addInput);

    if (ageInput >= 21) {
      $("#eligibal").show();
    }else {
      $("#not-eligibal").show();
    }
  });
});

