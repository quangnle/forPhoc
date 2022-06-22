var cp = new ColorPanel(10,10,50);
var fr1 = new FillableRegion();
var fr2 = new FillableRegion();
var shape1 = new FillableShape(150, 0);
var shape2 = new FillableShape(500, 0);


function setup() {
	createCanvas(800, 500);
	cp.addColor("#fff");
	cp.addColor("#f00");
	cp.addColor("#0f0");
	cp.addColor("#00f");
	cp.addColor("#ff0");
	cp.addColor("#0ff");
	cp.addColor("#f0f");
	
	fr1.vertices.push({x:0, y: 100});
	fr1.vertices.push({x:100, y: 100});
	fr1.vertices.push({x:100, y: 200});
	fr1.vertices.push({x:200, y: 200});
	fr1.vertices.push({x:200, y: 300});
	fr1.vertices.push({x:0, y: 300});
	fr1.vertices.push({x:0, y: 200});
	fr2.vertices.push({x:100, y: 100});
	fr2.vertices.push({x:200, y: 100});
	fr2.vertices.push({x:200, y: 200});
	fr2.vertices.push({x:100, y: 200});
	
	shape1.addRegion(fr1);	
	shape1.addRegion(fr2);
	shape2.addRegion(fr1);
	shape2.addRegion(fr2);
}

function draw() {
	background(250);
	cp.draw();
	shape1.draw();
	shape2.draw();
}

function touchStarted() {
  cp.onTouched(mouseX, mouseY);
  shape1.onTouched(mouseX, mouseY, cp.selectedColor);
  shape2.onTouched(mouseX, mouseY, cp.selectedColor);
}

