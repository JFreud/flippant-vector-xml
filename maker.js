
var c1, c2;
var first = 0;


var makeDot = function() {
    if (first) {
	c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c1.setAttribute("cx", event.clientX);
	c1.setAttribute("cy", event.clientY);
    }


}
