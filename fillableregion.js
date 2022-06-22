var FillableRegion = function(){
	this.vertices = [];
	this.filledColor ="#fff";
	this.fillColorUpdated = null;
	
	this.draw = function(){
		fill(this.filledColor);
		beginShape();
		for	(let i=0; i<this.vertices.length; i++){
			vertex(this.vertices[i].x, this.vertices[i].y);
		}
		endShape(CLOSE);
	}
	
	this.onTouched = function(tx,ty,col){
		let n = this.vertices.length;
		let	inside = false;
		for(let i=0; i < n; i++){
			let x1=this.vertices[i].x, y1=this.vertices[i].y, x2=this.vertices[(i+1)%n].x, y2=this.vertices[(i+1)%n].y;
			if((ty<y1 != ty<y2) && tx<((x2-x1)*(ty-y1)/(y2-y1)+x1))	inside = !inside;
		}
		if (inside && this.fillColorUpdated!=null) {
			this.fillColorUpdated(this, col);
		}
	}
}