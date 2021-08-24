const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

setInterval(() => {
    document.querySelector('h1').innerText = `hey sarah ${new Date()}`
}, 1000)
// c = context
const c = canvas.getContext('2d');
// // c.fillRect(x, y, width, height)
// c.fillStyle = "blue";
// c.fillRect(100, 100, 50, 50);
// c.fillStyle = "green";
// c.fillRect(400, 100, 100, 200);
// c.fillStyle = "pink";
// c.fillRect(400, 400, 100, 100);
// console.log(canvas);

// // Lines

// c.beginPath();
// // c.moveTo(x, y)
// c.moveTo(100, 20);
// c.lineTo(20, 100);
// c.lineTo(60, 20);
// c.strokeStyle = "red";
// c.stroke(); // stroke calls for line to be drawn

// // Arc/Circle

// for (let i = 0; i < 100; i++) {
//     const x = Math.random() * window.innerWidth;
//     const y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x, y, 50, 0, Math.PI * 2, false);
//     // arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void
//     c.strokeStyle = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")";
//     c.lineWidth = 2;
//     c.stroke();
// }

// ...
const mouse = {
    x: undefined,
    y: undefined
}

const maxRadius = 40;
const minRadius = 2;
const colorArray = [
    'blue',
    'green',
    'orange',
    'pink',
    'yellow',
];

window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
})

window.addEventListener('resize', function () {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();

})

function Circle(x, y, dx, dy, radius) { //OOP - function name has capital letter
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    //...method:
    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }
    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        //interactivity

        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (this.radius < maxRadius)
                this.radius += 1;
        } else if (this.radius > minRadius) {
            this.radius -= 1;
        }
        this.draw();
    }


}

let circleArray = [];

function init() {

    circleArray = [];

    for (let i = 0; i < 800; i++) {
        let radius = Math.random() * 3 + 1;
        let x = Math.random() * (innerWidth - radius * 2) + radius;
        let y = Math.random() * (innerHeight - radius * 2) + radius;
        let dx = (Math.random() - 0.5);
        let dy = (Math.random() - 0.5);
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    // x += dx;
    // y += dy; // x velocity - speed at which x is moving (1 pixel per frame refresh to right (positive direction))...
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

init();
console.log(circleArray);
animate();

// function Circle(x, y, dx, dy, radius) {
//     let x = Math.random() * innerWidth;
//     let y = Math.random() * innerHeight;
//     let dx = (Math.random() - 0.5) * 50;
//     let dy = (Math.random() - 0.5) * 50;
//     let radius = 30;
// }


// function animate() {
//     requestAnimationFrame(animate);
//     c.clearRect(0, 0, innerWidth, innerHeight);
//     c.beginPath();
//     c.arc(x, y, 50, 0, Math.PI * 2, false);
//     c.strokeStyle = "blue";
//     c.stroke();
//     if (x + radius > innerWidth || x - radius < 0) {
//         dx = -dx;
//     }
//     if (y + radius > innerHeight || y - radius < 0) {
//         dy = -dy;
//     }
// }
// x += dx;
// y += dy;

// animate();


// function Circle(x, y, dx, dy, radius) { //OOP - function name has capital letter
//     this.x = x;
//     this.y = y;
//     this.dx = dx;
//     this.dy = dy;
//     this.radius = radius;

//     //...method:
//     this.draw = function () {
//         c.beginPath();
//         c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//         c.strokeStyle = "blue";
//         c.stroke();
//     }


//     this.update = function () {
//         if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
//             this.dx = -this.dx;
//         }
//         if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
//             this.dy = -this.dy;
//         }

//         this.x += this.dx;
//         this.y += this.dy;

//         this.draw();
//     }
// }



//code for single moving circle

// let x = Math.random() * innerWidth;
// let y = Math.random() * innerHeight;
// let dx = (Math.random() - 0.5) * 10;
// let dy = (Math.random() - 0.5) * 10;
// let radius = 30;

// function animate() {
//     requestAnimationFrame(animate);
//     c.clearRect(0, 0, innerWidth, innerHeight);

//     c.beginPath();
//     c.arc(x, y, radius, 0, Math.PI * 2, false);
//     c.strokeStyle = 'blue';

//     c.stroke();

//     if (x + radius > innerWidth || x - radius < 0) {
//         dx = -dx;
//     }
//     if (y + radius > innerHeight || y - radius < 0) {
//         dy = -dy;
//     }

//     x += dx;
//     y += dy;
// }

// animate();

