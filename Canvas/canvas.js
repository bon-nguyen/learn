const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(this);

const c = canvas.getContext("2d");
console.log("a", innerWidth);
console.log("b", innerHeight);
// c.fillRect(100, 100, 100, 100);
// c.fillRect(500, 400, 100, 100);
// c.fillRect(200, 200, 100, 100);

// Line
// c.beginPath();
// c.strokeStyle = "green";
// c.moveTo(40, 40);
// c.lineTo(300, 40);
// c.stroke();

// second patch

// c.beginPath();
// c.strokeStyle = "blue";
// c.moveTo(40, 40);
// c.lineTo(400, 180);
// c.stroke();
let x = Math.random() * innerWidth;
let y = Math.random() * innerHeight;
let dx = 4;
let dy = 4;
let radius = 30;
// for (let i = 0; i < 10; i++) {
// let x = Math.random() * innerWidth;
// let y = Math.random() * innerHeight;

// }

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.stroke();
  };
  this.updateDraw = function () {
    if (this.x > innerWidth - this.radius || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y > innerHeight - this.radius || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  };
}

const circle = new Circle(x, y, dx, dy, radius);

const animation = () => {
  requestAnimationFrame(animation);
  c.clearRect(0, 0, innerWidth, innerHeight);
  circle.updateDraw();
};
animation();
