function sayAdamIsStupid() {

  var thatWasEasy = new Audio("adamisstupid2.mp3");
  thatWasEasy.play();
}



$("#button").on("click", sayAdamIsStupid);

// $(document).keypress(delegateKeypress);

// function delegateKeypress(event) {
//   if (event.charCode == 32) {
//     $("#button").trigger("click");
//   }
// }  