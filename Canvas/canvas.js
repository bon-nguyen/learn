const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(this);

const c = canvas.getContext("2d");
<<<<<<< HEAD
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
=======

const mouse = {
  x: null,
  y: null
}

const colorArray = [
  '#ffaa33',
  '#99ffaa',
  '#00ffaa',
  '#4411aa',
  '#ff1100',
]

window.addEventListener('mousemove', function (e) {
  mouse.x = e.x
  mouse.y = e.y
  console.log("mouse", mouse)
})

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
})

function Circle(x, y, dx, dy, radius, color) {
  this.x = x
  this.y = y
  this.dx = dx
  this.dy = dy
  this.radius = radius
  this.color = color


  this.draw = function () {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
  }
  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) this.dx = -this.dx
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) this.dy = -this.dy
    this.x += this.dx
    this.y += this.dy
    this.draw()

    // interacting
    if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
      this.radius += 1
    } else if (this.radius > 20) {
      this.radius -= 1
    }
  }
}

let circleArr = []



function init() {
  for (let i = 0; i < 100; i++) {
    const x = Math.random() * innerWidth
    const y = Math.random() * innerHeight
    const dx = (Math.random() - 0.5) * 2
    const dy = (Math.random() - 0.5) * 2
    const radius = Math.random() * 3 + 1;
    const color = colorArray[Math.floor(Math.random() * colorArray.length)]
    circleArr.push(new Circle(x, y, dx, dy, radius, color))
  }
}
init()

function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, innerWidth, innerHeight)
  for (let i = 0; i < circleArr.length; i++) {
    circleArr[i].update()
  }
}

animate()
>>>>>>> 8bc09baf331435cc3520b35be339317a7a879694
