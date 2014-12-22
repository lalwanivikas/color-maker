//update the new color span
$("#newColor").css("background-color", "#000");

function changeColor(){
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();

  // conversion to hex codes
  var rHex = parseInt(r, 10).toString(16);
  var gHex = parseInt(g, 10).toString(16);
  var bHex = parseInt(b, 10).toString(16);
  
  $("#newColor").css("background-color", "rgb(" + r + "," + g +", " + b + ")");

  //Update rgb code
  $("p#rgbCode").html( r + ", " + g + ", " + b );
  
  //Update hex code
  $("p#hexCode").html( "#" + rHex + gHex + bHex);

  function rgbToHsl(r, g, b) {
      r /= 255, g /= 255, b /= 255;
      var max = Math.max(r, g, b), min = Math.min(r, g, b);
      var h, s, l = (max + min) / 2;

      if(max == min){
          h = s = 0; // achromatic
      } else {
          var d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          switch(max){
              case r: h = (g - b) / d ; break;
              case g: h = 2 + ( (b - r) / d); break;
              case b: h = 4 + ( (r - g) / d); break;
          }
          h*=60;
          if (h < 0) h +=360;
      }
     return [Math.round(h) + "&deg;, " + (s*100).toFixed(2) + "%, " + (l*100).toFixed(2) + "%"];
  }  
  	//Update hsl code
	var hsl = rgbToHsl(r, g, b);
	$("p#hslCode").html(hsl);
};

//When color sliders change
$("input[type=range]").change(changeColor).mousemove(changeColor);
