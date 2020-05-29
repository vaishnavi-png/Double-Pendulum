class Rope{
    constructor(pointA,bodyB){
        var options = {
            pointA : pointA,
            bodyB : bodyB,
            stiffness: 0.004,
            length : 100
          }
          this.pointA=pointA;
          this.sling = Constraint.create(options);
          World.add(world,this.sling);
    }
    display(){
        var pointA = this.pointA;
        var pointB = this.sling.bodyB.position;
        push();
        fill(154,215,220);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
}