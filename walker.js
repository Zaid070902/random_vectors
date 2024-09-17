let red, blue, green, rN, gN, bN, Sz, dirX, dirY, xn, yn;

function Walker(x, y) {
    dirX = 0.005;
    dirY = 0.005;

    // This is 
    this.pos = createVector(x, y);
    xn = noise(this.pos.x * dirX, this.pos.y * dirY) * 100;
    yn = noise(this.pos.x * dirX, this.pos.y * dirY) * 300;
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(1, -1));

    this.display = function () {
        red = 0.003;
        green = 0.002;
        blue = 0.004;
        let nsz = 0.03;

        rN = noise(this.pos.x * red, this.pos.y * red) * 250;
        gN = noise(this.pos.x * green, this.pos.y * green) * 50;
        bN = noise(this.pos.x * blue, this.pos.y * blue) * 255;
        Sz = noise(this.pos.x * nsz, this.pos.y * nsz) * 20;

        strokeWeight(Sz);
        stroke(rN, gN, bN, 50);
        // fill(rN, gN, bN);
        point(this.pos.x, this.pos.y);
    };

    this.move = function () {
        this.pos.add(this.vel);
    };
}
