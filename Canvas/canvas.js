const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");
c.fillRect(100, 100, 100, 100);
c.fillRect(500, 400, 100, 100);
c.fillRect(200, 200, 100, 100);

// Line
c.beginPath();
c.strokeStyle = "green";
c.moveTo(40, 40);
c.lineTo(300, 40);
c.stroke();

// second patch

c.beginPath();
c.strokeStyle = "blue";
c.moveTo(40, 40);
c.lineTo(400, 180);
c.stroke();

for (let i = 0; i < 10; i++) {
  let x = Math.random() * innerWidth;
  let y = Math.random() * innerHeight;
  c.beginPath();
  c.arc(x, y, 40, 0, Math.PI * 2);
  c.stroke();
}
