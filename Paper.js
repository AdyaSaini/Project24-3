class Paper{
    constructor(x, y) {
        var options= {
            'isStatic' : false,
            //I changed the isStatic to false so the ball can fall 
            //down but when it does the dustbin falls with it.
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, 10, options); 
        World.add(world, this.body);
    }
    display(){
        push();
        var pos =this.body.position;
        translate(pos.x, pos.y);
        fill('#ff66b8');
        ellipse(0,0,20,20);
        pop();
    }
}