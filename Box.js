class Box{
  constructor(x, y, width, height, c){
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;
    this.c = c;
    this.visibility = 255;
    this.image = loadImage("wood1.png");
    World.add(world, this.body);
  }

  display(){
    push();
    if (this.body.velocity.x > 5){
      World.remove(world, this.body);
      this.visibility = this.visibility - 5;
      tint(255, this.visibility);
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
    }
    imageMode(CENTER);
    fill(this.c);
    image(this.image,this.body.position.x, this.body.position.y, this.width, this.height);
    pop();
  }

  score(){
    if (this.visibility<0 && this.visibility>-150){
      score++;
    }
  }

}
