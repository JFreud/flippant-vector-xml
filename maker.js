var cb = document.getElementById("clear");
var svg = document.getElementById("svgfield");

var c1, l1, old_x, old_y;
var first = 1;


var makeDots = function() {
  console.log("making dot");
  c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  c1.setAttribute("cx", event.offsetX);
	c1.setAttribute("cy", event.offsetY);
  console.log(event.offsetX);
  console.log(event.offsetY);
  c1.setAttribute("r", 30);
  c1.setAttribute("fill", "green")
  svg.appendChild(c1);
  if (!first) {
    l1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    l1.setAttribute("x1", old_x);
    l1.setAttribute("y1", old_y);
    l1.setAttribute("x2", event.clientX);
    l1.setAttribute("y2", event.clientY);
    l1.setAttribute("stroke", "#000000");
    svg.appendChild(l1);
  }
  first = 0;
  old_x = event.clientX
  old_y = event.clientY
}

var clear = function() {
  while (svg.lastChild) {
    svg.removeChild(svg.lastChild);
  }
  first = 1;
}

svg.addEventListener('click', makeDots);
cb.addEventListener('click', clear);
