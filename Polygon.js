class Polygon{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.5
          }
          this.radius=20;
          this.body=Bodies.circle(x,y,this.radius,options);          
          this.image=loadImage("polygon.png")
          World.add(world,this.body);
          
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y) 
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
} 