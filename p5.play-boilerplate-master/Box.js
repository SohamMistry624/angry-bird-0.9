class Box{
    constructor(x, y, width, height){
        var option = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, option);
        this.width = width;
        this.height = height;
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position;
        push ();
        translate(pos.x, pos.y);
        rotate(this.body.angle);

        rect(0, 0, this.width, this.height);
        pop();
    }
}