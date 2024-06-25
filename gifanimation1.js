var r = 310;
var s = 145;
var radius = 10;
var bigsmallflag = 1;
var img1;

function setup(){
  createCanvas(1280,700);
  background('#7A1C1C');
  position=createVector(width,height);
  frameRate(30);
  frameRate(30);
}


function preload(){
	img1 =loadImage('crescendo_logo.png');
}

function draw(){
  noStroke();
 background('#7A1C1C');
let x = 200 + 70 * sin(frameCount * 0.04);
fill('#E23535'); // red box
rect(x,318,160,86,5,5,25,25); // Moving red box 110

fill(240,177,147); // skin color
rect(170,285, 100,35,0,0,30,240); //right arm
fill(255,255,255); // box lid
rect(x,285,160,38,25,25,0,0); // Moving white box lid
// // noLoop();

fill('#7A1C1C');
rect(385,200,60,150,0); //box blocker

// fill(255,255,255);
// ellipse(310,145,120);
//   ellipse(r,s,radius,radius);// White circle (halo)
//   if (radius <= 10) {
//     radius++;
//   } else if (radius >= 140) {
//     radius--;
//   }

  // if (radius <= 0 || radius >= 140) {
  //   radius = 140;
  // }

// loop();
// background('#7A1C1C');
// fill('#FFD700');
// let y = 540 + 140 * sin(frameCount * 0.03);
// ellipse(393,y,270,270);//sun


fill(255,255,255);
if(radius >= 200){
  bigsmallflag = 0;
}else if(radius<=10){
  bigsmallflag = 1;
}

if(bigsmallflag == 0){
  radius --;
}else if(bigsmallflag == 1){
  radius ++;
}

ellipse(308, 155, radius); // head

fill(0,128,128);
rect(270, 200, 80, 190); // body

fill('white');
rect(235, 200, 35,85,20,0,0,0); // right sleeve
fill(240,177,147);
fill('#FFD700');
rect(350, 200, 35,120,0,20,5,5); // left sleeve

fill(240,177,147);
rect(350, 200, 35,123,0,20,5,5); // left shoulder
rect(235, 200, 35,85,20,0,0,0); // right shoulder
rect(269, 316,116,30,190,0,0,5); //left arm


fill('#7A1C1C');
fill(255,68,0);
rect(270,110,80,160,50,50,20,20); // hair

fill(240,177,143);
ellipse(308, 155, 60, 60); // head



fill(255,255,255);
rect(190,345,260,56,65); //table

fill(235,205,240);
rect(100,400,500,400); //undertable

// // Capture frames and add to GIF
// const totalFrames = 20;
// for (let i = 0; i < totalFrames; i++) {
//   drawFrame(i * 5);
//   gif.addFrame(ctx, {copy: true, delay: 10});
// }

// // Render and download GIF
// gif.on('finished', function(blob) {
//   window.open(URL.createObjectURL(blob));
// });

// gif.render();
image(img1,1,1,200,300);
}