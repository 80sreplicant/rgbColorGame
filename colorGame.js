const color = [
  'rgb(255, 0, 0)',
  'rgb(255, 255, 0)',
  'rgb(0, 255, 0)',
  'rgb(0, 255, 255)',
  'rgb(0, 0, 255)',
  'rgb(255, 0, 255)',
];

const squares = document.querySelectorAll('.square');
let pickedColor = color[3];

for (let i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = color[i];
}
