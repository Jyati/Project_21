var bullet, wall;
var bulletImage, wallImage;


var speed, weight, thickness;


function setup() {
	createCanvas(1600, 400);

	speed = random(223, 321)
	weight = random(30, 52)
	thickness = random(22, 83);

	bullet = createSprite(50, 200, 100, 20);
	bullet.velocityX = speed;
	bullet.shapeColor = "grey";

	wall = createSprite(1200, 200, thickness, height / 2)
	wall.shapeColor = (80, 80, 80);

}


function draw() {
	background(220);

	if (hasCollided(bullet, wall)) {
		bullet.velocityX = 0;
		var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
		if (damage > 10) {
			wall.shapeColor = "red"
			fill(255, 0, 0);
			text("Speed: " + round(speed), 1000, 100);
			text("Quality: " + "BAD", 1000, 130);
		}

		if (damage < 10) {
			wall.shapeColor = "green"
			fill(0, 255, 0);
			text("Speed: " + round(speed), 1000, 130);
			text("Quality: " + "GOOD", 1000, 150);
		}
	}

	drawSprites();

}

function hasCollided(lbullet, lwall) {
	bulletRightEdge = lbullet.x + lbullet.width;
	wallLeftEdge = lwall.x;
	if (bulletRightEdge >= wallLeftEdge) {
		return true;
	}
	return false;
}