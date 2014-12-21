//update the new color span
$("#newColor").css("background-color", "#000");

function changeColor(){
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  
  $("#newColor").css("background-color", "rgb(" + r + "," + g +", " + b + ")");

  //Update colorMessage
  $("#newMessage").remove();
  $("#colorMessage").append('<p id="newMessage"></p>');
  $("p#newMessage").append( r + ", " + g + ", " + b );
};

//When color sliders change
$("input[type=range]").change(changeColor).mousemove(changeColor);
