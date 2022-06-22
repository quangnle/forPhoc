var ColorBox = function(x,y,size,col){
	this.x = x, this.y = y, this.size = size, this.col = col;
	this.draw = function() {
		push();
		translate(this.x, this.y);
		fill(this.col);
		rect(0,0,this.size,this.size);
		pop();
	}
}