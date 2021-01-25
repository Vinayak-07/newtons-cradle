class Bob{
	constructor(x,y,r)
	{
		var options={
			//isStatic:true,
			restitution:1,
			friction:0.5,
			density:0.8
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y,25, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;
			//push()
			//translate(pos.x, pos.y);
			ellipseMode(RADIUS)
			fill(255,0,255)
			ellipse(pos.x,pos.y,this.r, this.r);
			//pop()
			
	}

}