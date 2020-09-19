var bullet, wall;
var bulletImage, wallImage;


var speed, weight, thickness;


function setup() {
	createCanvas(1600, 400);

	speed = random(223, 321)
	weight = random(30, 52)
	thickness = random(22,83);


	bullet = createSprite(50, 200, 100, 20);
	bullet.velocityX = speed;
	bullet.shapeColor = "white";



	wall = createSprite(1200, 200, thickness, height / 2)
	wall.shapeColor = (80,80,80);
	
	console.log(wall.x - bullet.x );
	console.log(bullet.width);
	console.log(wall.width);
}


function draw() {
	background("black");

	if (wall.x - bullet.x < (bullet.width + wall.width) / 2) {
		bullet.velocityX = 0;
		var damage = 0.5 * weight * speed * speed / (thickness*thickness*thickness);
		if (damage > 10) {
			wall.shapeColor = "red"
			fill(255, 0, 0);
			text("Speed: "+round(speed),1300,100);
			text("Damage: "+"BAD",1300,130);
		}

		if (damage < 10) {
			wall.shapeColor = "green"
			fill(0, 255, 0);
			text("Speed: "+round(speed),1300,130);
			text("Damage: "+"GOOD",1300,150);
		}
	}

	drawSprites();

}