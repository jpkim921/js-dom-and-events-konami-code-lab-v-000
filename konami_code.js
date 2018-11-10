const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


// You'll want to attach an event listener to `document.body` and check for
// `'keydown'` events. If the user enters this special code, pressing all ten of
// the keys in the correct order, `alert()` a congratulatory message. However, if
// they press a key out of sequence or a key that isn't part of the Konami code,
// don't `alert()` anything and simply keep listening for all ten `keydown`s in the
// correct order.

function init() {
  // Write your JavaScript code inside the init() function

  const body = document.getElementsByTagName('body')

  body.addEventListener('keydown', function (e) {
    
  })
}


init();


// const body = document.querySelector('body')
