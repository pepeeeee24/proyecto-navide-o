let img; 




function setup(){
    img = loadImage('https://i.ibb.co/RgxM60m/papaNoel.png');
    createCanvas(1250,700);
    background(255,0 , 0);
}
function draw(){
    clear();
    image(img, mouseX, mouseY);
    createCanvas(1250,700);
    background(255,0 , 0);
    console.log(frameCount);
    var y = frameCount%700;
    for(var i=0; i <= 10; i++){
        ellipse(170*i + 20, y, 25,25);

    }
}
