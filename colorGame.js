let numSquares = 6;
let colors = [];
const squares = document.querySelectorAll('.square');
let pickedColor;
let colorDisplay = document.querySelector('#colorDisplay');
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector('h1');
const resetButton = document.querySelector('#reset');
const modeButtons = document.querySelectorAll('.mode');

init();

function init() {
  // mode buttons event listeners
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function () {
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selected');
      // ternary operator
      this.textContent === 'Easy' ? (numSquares = 3) : (numSquares = 6);
      // if(this.textContent === 'Easy') {
      //     numSquares = 3;
      // } else {
      //     numSquares = 6;
      // }
      // reset();
      // figure how many squares to show
      // pick new colors
      // pick a new pickedColor
      // update page to reflect color
    });
  }
}

function setupSquares() {
  for (let i = 0; i < squares.length; i++) {
    // add click listeners to squares
    squares[i].addEventListener('click', function () {
      // grab color of picked square
      let clickedColor = this.style.backgroundColor;
      // compare color to pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = 'Correct!!!';
        resetButton.textContent = 'Play Again?';
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = '#232323';
        messageDisplay.textContent = 'Try Again';
      }
    });
  }
}

function reset() {
  // generate all new colors
  colors = generateRandomColors(numSquares);
  // pick a random new color from array
  pickedColor = pickColor();
  //   change colorDisplay to make pickedColor
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = 'New Colors';
  messageDisplay.textContent = '';
  // change the colors of the squares
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
  h1.style.backgroundColor = 'steelblue';
}

// easyBtn.addEventListener('click', function () {
//   hardBtn.classList.remove('selected');
//   easyBtn.classList.add('selected');
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (let i = 0; i < squares.length; i++) {
//     if (colors[i]) {
//       squares[i].style.backgroundColor = colors[i];
//     } else {
//       squares[i].style.display = 'none';
//     }
//   }
// });

// hardBtn.addEventListener('click', function () {
//   hardBtn.classList.add('selected');
//   easyBtn.classList.remove('selected');
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (let i = 0; i < squares.length; i++) {
//     squares[i].style.backgroundColor = colors[i];
//     squares[i].style.display = 'block';
//   }
// });

resetButton.addEventListener('click', function () {
  reset();
  //   // generate all new colors
  //   colors = generateRandomColors(numSquares);
  //   // pick a random new color from array
  //   pickedColor = pickColor();
  //   //   change colorDisplay to make pickedColor
  //   colorDisplay.textContent = pickedColor;
  //   this.textContent = 'New Colors';
  //   messageDisplay.textContent = '';
  //   // change the colors of the squares
  //   for (let i = 0; i < squares.length; i++) {
  //     squares[i].style.backgroundColor = colors[i];
  //   }
  //   h1.style.backgroundColor = 'steelblue';
});

colorDisplay.textContent = pickedColor;

function changeColors(color) {
  // loop through all the squares
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
  // change each color to match given color
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // make an array
  const arr = [];
  // repeat num times
  for (let i = 0; i < num; i++) {
    // get random color and push into arr
    arr.push(randomColor());
  }
  // return that array
  return arr;
}

function randomColor() {
  // pick a red from 0 to 255
  let r = Math.floor(Math.random() * 256);
  // pick a green from 0 to 255
  let b = Math.floor(Math.random() * 256);
  // pick a blue from 0 to 255
  let g = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
