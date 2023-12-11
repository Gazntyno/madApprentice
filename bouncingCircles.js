const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let circleCount = 1;
const circles = [];

function Circle(x, y, r, dx, dy) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.dx = dx;
  this.dy = dy;

  this.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = '#00ff00';
    ctx.fill();
    ctx.closePath();
  };

  this.update = function() {
    if (this.x + this.r > canvas.width || this.x - this.r < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.r > canvas.height || this.y - this.r < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    for (let i = 0; i < circles.length; i++) {
      if (circles[i] !== this && this.collidesWith(circles[i])) {
        this.mergeWith(circles[i]);
        circles.splice(i, 1);
        break;
      }
    }
  };

  this.collidesWith = function(other) {
    const dx = other.x - this.x;
    const dy = other.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const minDistance = other.r + this.r;
    return distance < minDistance;
  };

  this.mergeWith = function(other) {
    const dx = other.x - this.x;
    const dy = other.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx);
    const newR = Math.max(this.r, other.r);
    const newX = this.x + newR * Math.cos(angle);
    const newY = this.y + newR * Math.sin(angle);
    this.x = newX;
    this.y = newY;
    this.r = newR;
    this.dx = other.dx;
    this.dy = other.dy;
  };
}

function init() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const circle1 = new Circle(100, 100, 50, 1, 1);
  circles.push(circle1);
  circleCount++;

  document.addEventListener('click', (e) => {
    const circle = new Circle(e.clientX, e.clientY, 20, Math.random() * 2 - 1, Math.random() * 2 - 1);
    circles.push(circle);
    circleCount++;
  });

  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 32) {
      for (let i = 0; i < circleCount; i++) {
        const circle = new Circle(Math.random() * canvas.width, Math.random() * canvas.height, 20, Math.random() * 2 - 1, Math.random() * 2 - 1);
        circles.push(circle);
        circleCount++;
      }
    }
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < circles.length; i++) {
    circles[i].draw();
    circles[i].update();
  }

  requestAnimationFrame(animate);
}

init();
animate();