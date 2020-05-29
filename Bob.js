class Bob{
    constructor(x, y,radius) {
        var options = {
            'restitution':1,
            'friction':0.4,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill(21,174,171);
        ellipseMode(CENTER);
        ellipse( 0, 0,this.radius);
        pop();
      }
}