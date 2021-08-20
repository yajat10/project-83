canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 2;
var width_P=screen.width
new_width= width_P-70;
new_height=screen.height-300;

var mouse_event="";
canvas.addEventListener("mousedown",my_Mousedown)
function my_Mousedown(e) {
    mouse_event="1"
}
canvas.addEventListener("mouseup",my_Mouseup)
function my_Mouseup(e) {
    mouse_event="2"
}
canvas.addEventListener("mouseleave",my_Mouseleave)
function my_Mouseleave(e) {
    mouse_event="3"
}
canvas.addEventListener("mousemove",my_Mousemove)
function my_Mousemove(e) {
    current_P_of_touch_X=e.clientX - canvas.offsetLeft
    current_P_of_touch_Y=e.clientY - canvas.offsetTop
if (mouse_event=="1") {
    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=width_P;
    console.log("last_position of X and Y");
    console.log("X="+last_P_of_x+"Y="+last_P_of_y);
    ctx.moveTo(last_P_of_x,last_P_of_y)
    console.log("current_position of X and Y");
    console.log("X="+current_P_of_touch_X+"Y="+current_P_of_touch_Y);
      ctx.lineTo(current_P_of_touch_X,current_P_of_touch_Y)
      ctx.stroke()
}
last_P_of_y=current_P_of_touch_Y;
last_P_of_x=current_P_of_touch_X;
}

var last_P_of_x, last_P_of_y;


if (width<992) {
 document.getElementById("myCanvas").width_P=new_width;
 document.getElementById("myCanvas").width_P=new_height;
 document.body.style.overflow="hidden"
}

canvas.addEventListener("touchstart", My_touchstart);

function My_touchstart(e)
{
    //Addictonal Activity start
    console.log("Touchstart has started");
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
last_P_of_x=e.touches[0].clientX-canvas.offsetLeft;
last_P_of_y=e.touches[0].clientY-canvas.offsetTop;

}

canvas.addEventListener("touchmove", My_touchmove);
function My_touchmove(e)
{

     current_P_of_touch_X = e.touches[0].clientX - canvas.offsetLeft;
     current_P_of_touch_Y = e.touches[0].clientY - canvas.offsetTop;


    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_P_of_x + "y = " + last_P_of_y);
    ctx.moveTo(last_P_of_x, last_P_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_P_of_touch_X + "y = " + current_P_of_touch_Y);
    ctx.lineTo(current_P_of_touch_X, current_P_of_touch_Y);
    ctx.stroke();
    

    last_P_of_x = current_P_of_touch_X; 
    last_P_of_y = current_P_of_touch_Y;
}

