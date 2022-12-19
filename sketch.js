
 function draw(){
    clear();
    console.log(frameCount);
    var x = 50;
    ellipse(30, frameCount%700, 25,25);
}
function setup(){
    createCanvas(1250,700);
    background(255,0 , 0);
}