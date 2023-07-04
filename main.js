song1 = "";
song2 = "";

function preLoad() {

song1 = loadSound('dragmedown.mp3');
song2 = loadSound('misty.mp3');

}

function setup() {

canvas = createCanvas(600, 550);
canvas.center();

video = createCapture(VIDEO);
video.hide();
}

function draw() {

image(video, 0, 0, 600, 550);


}

function play() {

song1.play();
song2.play();

 
}