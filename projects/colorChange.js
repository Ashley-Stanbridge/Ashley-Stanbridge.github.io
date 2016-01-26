



var array = ["#3333ff", "#3333cc", "#6600ff", "#6600cc", "#9900ff", "#9900cc", "#660066"]
var previousColor = 0;
function changeColor() {
var color = array[previousColor]
document.body.style.backgroundColor = color
previousColor += 1;
if(previousColor >= array.length) {
  previousColor = 0;}
};



// var previousColor = 0;

// function changeColor(array) {
//   if previousColor == 0 {

//   }
// }





