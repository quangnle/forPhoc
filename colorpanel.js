var ColorPanel = function(x,y,boxSize){
	this.x = x, this.y = y, this.boxSize = boxSize;
	this.colors = [];
	this.selectedColor = "#fff";
	this.draw = function(){
		push();
		for (let i=0;i<this.colors.length; i++){
			this.colors[i].draw();
		}
		pop();
	}
	
	this.addColor = function(col){		
		let c = new ColorBox(0,this.colors.length * this.boxSize, this.boxSize, col);
		this.colors.push(c);
	}
	
	this.onTouched = function(x,y){
		if (this.colors.length > 0){
			let tx = x - this.x, ty = y - this.y;
			let h = this.colors.length * this.boxSize;
			let w = this.boxSize;
			if ((tx>=0 && tx<=w) && (ty>=0 && ty<=h)) {
				this.selectedColor = this.colors[Math.floor(ty/this.boxSize)].col;
			}
		}
	}
}