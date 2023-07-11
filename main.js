song1 = "";
song2 = "";


rightWristY = 0;
rightWristX = 0;

leftWristY = 0;
leftWristX = 0;

scoreLeftWrist = 0;

songPlaying = "";

function preLoad() {

song1 = loadSound('dragmedown.mp3');
song2 = loadSound('misty.mp3');

}

function setup() {

canvas = createCanvas(600, 550);
canvas.center();

video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded)
poseNet.on('pose', gotPoses)
}

function draw() {

image(video, 0, 0, 600, 550);

songPlaying = song1.isPlaying();




fill('#ff0000');
stroke('#ff0000');

if(scoreLeftWrist > 0.2) {

circle(leftWristX, leftWristY, 20);
song2.stop()
}

if(songPlaying = false)
song1.play();
document.getElementById("song").innerHTML = "drag me down!"
}

function play() {

song1.play();
song2.play();

 
}


function modelLoaded() {

    console.log("Model Loaded")
    
    }


    function gotPoses(results) {

        if(results.length > 0) {
        
        console.log(results);

        scoreLeftWrist = results[0].pose.keypoints[9].score;
        
        leftWristX = results[0].pose.leftwrist.x;
        rightWristX = results[0].pose.rightwrist.x;
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX)
        
        leftWristY = results[0].pose.leftwrist.y;
        rightWristY = results[0].pose.rightwrist.y;
        console.log("leftwristY = " + leftWristY + "rightwristY = " + rightWristY);
        
        }
        
        }

    