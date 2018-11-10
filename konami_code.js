const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
// code corresponds to the arrow buttons


// You'll want to attach an event listener to `document.body` and check for
// `'keydown'` events. If the user enters this special code, pressing all ten of
// the keys in the correct order, `alert()` a congratulatory message. However, if
// they press a key out of sequence or a key that isn't part of the Konami code,
// don't `alert()` anything and simply keep listening for all ten `keydown`s in the
// correct order.

let pageBody = document.querySelector('body');


// pageBody.addEventListener('click', function (e) {
//   alert('clicked');
// });
// pageBody.addEventListener('keydown', function (e) {
//   console.log(e.key);
//   console.log("which:", e.which);
//   // console.log("detail:", e.detail);
//
//   console.log(parseInt(e.which));
//   // console.log(parseInt(e.which));
//
//   cat = e.which
//   dog = parseInt(e.which)
//
//   console.log(cat === dog);
// });


function init() {
  let index = 0;  //counter to keep track to buttons pressed.

  // document.body.addEventListener('keydown', function(e) {
  pageBody.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail);

    if (code[index] === key) { //key of the key pressed is the same as the codeat that index
      index++;

      if (index === code.length) { //once the correct Number of keys (in this case 10) is pressed in the right order, hurry is alerted out.
        alert('Hurray!');

        index = 0;
      }
    } else { // if you mess up, you have to start over.
      index = 0;
    }
  });
}

init(); //have to initialized the function we wrote everything in.
