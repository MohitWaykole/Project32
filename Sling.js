class Chain{
    constructor(bodyA, pointB){
        var option = {
            bodyA : bodyA,
            pointB : pointB,
            length : 10,
            stiffness : 0.6
        }
        this.pointB = pointB;
        this.body = Matter.Constraint.create(option);
        World.add(world, this.body);
    }

    display(){
        if (this.body.bodyA){
        push();
        var b = this.body.bodyA.position;
        var b2 = this.pointB;
        stroke(42, 22, 8);
        strokeWeight(5);
        line(b.x, b.y, b2.x, b2.y);
        pop();
        }
    }

    fly(){
        this.body.bodyA = null;
    }

    attach(body){
        this.body.bodyA = body;
    }
}