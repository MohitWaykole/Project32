class Polygon{
    constructor(x, y, radius){
        var options = {
            isStatic : false,
            restitution : 1.0,
            density : 1.0
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
    }

    display(){
        var p = this.body.position;
        push();
        ellipseMode(CENTER);
        fill("yellow");
        ellipse(p.x, p.y, this.radius*2, this.radius*2);
        imageMode(CENTER);
        image(this.image, p.x, p.y, 70, 70);
        pop();
    }
}