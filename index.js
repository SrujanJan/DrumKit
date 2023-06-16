// document.querySelector(".set").addEventListener("click",handclicked);
// function handclicked(){
//     alert("I got clicked");
// }

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // alert("I got clicked");

    // var audio=new Audio("sounds/tom-1.mp3");
    // audio.play();
    var druminnerHtml = this.innerHTML;
    makesounds(druminnerHtml);
    clickAnimation(druminnerHtml);
  });
}

document.addEventListener("keydown", function (event) {
//   alert("You preseed a key!");
// console.log(event);
makesounds(event.key);
clickAnimation(event.key);
});


function makesounds(keys) {
    switch (keys) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            
            break;
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
              case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
              case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
              case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
              case "k":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
              case "l":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
        default:
            break;
    }
}
function clickAnimation(n) {
    document.querySelector("."+n).classList.add("pressed");
    setTimeout(function(){document.querySelector("."+n).classList.remove("pressed");},100);
}