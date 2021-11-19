class PlayerArrow {
  constructor(x, y, width, height, archerAngle) {
    var options = {
      isStatic: true,
      density: 0.1
    };
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.image = loadImage("./assets/playerArcher.png");
    this.archerAngle = archerAngle;
    this.velocity = 0;
    World.add(world, this.body);
  }

  display() {

    var posX = this.image.x
    var posY = this.image.y
    var angle = this.image.angle

    push()
    translate(posX,posY)
    rotate(this.archerAngle)
    imageMode(CENTER)
    image(this.image,0,0,this.width,this.height)
    pop()  
   
  }
  
}
