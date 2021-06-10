class paper
{
    constructor(x,y,r){

        var options={
            isStatic=false,
            restitution:0.3,
            friction:0,
            density:1.2
        }

        this.x=x
        this.y=y
        this.r=r
        this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
        this.image=loadImage("sprites/paper.png")

    }

    display(){

        var paperpos=this.body.position

        push()
        translate(paperpos.x,paperpos.y)
        ellipse(0,0,this.r,this.r)
        pop()
    }

}

