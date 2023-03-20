let video;
let poseNet;
let pose;

function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video);
    poseNet.on('pose', posesActive);
}

function posesActive(poses) {
    if (poses.length > 0) {
        pose = poses[0].pose;
    }
}

function draw() {
    image(video, 0, 0);

    if (pose) {
        fill(255);
        ellipse(pose.nose.x, pose.nose.y, 32);
    }
}