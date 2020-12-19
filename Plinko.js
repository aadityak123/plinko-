class Plinko{
    constructor(x,y){
        var options={
            isStatic:true
          }

          this.r = 20;
          this.body = Bodies.circle(x ,y ,this.r/2 ,options)
          
          World.add(world, this.body)
 }

 display(){

    push();
    translate(this.body.position.x, this.body.position.y);
    
    ellipse(0, 0, this.r, this.r);
    pop();
 }
}