class cannonBall { 
    constructor (x,y ) {
        var opitions= {
        restitition :0.8 ,
        friction:1.0,
        isStatic:true
        };
        this.r=30;
        this.speed=0.05;
        this.body=Bodies.circle(x,y,this.r,opitions);
        this.image = loadImage("./assets/cannonball.png");
        this.animation = [this.image];
        this.tower = loadImage("/assets/tower.png");
        this.trajectory= [];
        this.isSink= false ;
        World.add(word,this.body)



    }
display(){

var pos = this.body.position;


push();
imageMode(CENTER);
image(this.image,pos.x,pos.y,this.r,this.r);
pop();

}

}




















