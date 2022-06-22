var FillableShape = function(x,y){
	this.x=x, this.y=y;
	this.regions = [];
	
	this.addRegion = function(r){
		r.fillColorUpdated = this.updateFillColor;
		this.regions.push({...r});
	}
	
	this.draw = function(){
		push();
		translate(this.x, this.y);
		for (let i=0;i<this.regions.length; i++){
			this.regions[i].draw();
		}
		pop();
	}
	
	this.onTouched = function(x,y,col){
		for (let i=0;i<this.regions.length; i++){
			this.regions[i].onTouched(x-this.x,y-this.y,col);
		}
	}
	
	this.updateFillColor = function(src, val){
		src.filledColor = val;
	}
}