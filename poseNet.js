let video;
let poseNet;
let pose;
let skeleton;
let canvas = document.getElementById('cam')

function setup() {
    // createCanvas(640, 480);
    canvas = createCanvas(640, 480, 'id= "dasa"');
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video);
    poseNet.on('pose', posesActive);
}

function posesActive(poses) {
    if (poses.length > 0) {
        pose = poses[0].pose;
        skeleton = poses[0].skeleton;
    }
}

function draw() {
    image(video, 0, 0);

    if (pose) {
        for (let i = 0; i < pose.keypoints.length; i++) {
            let x = pose.keypoints[i].position.x;
            let y = pose.keypoints[i].position.y;
            fill(0, 0, 255);
            ellipse(x,y,16,16)
        }

        for (let i = 0; i < skeleton.length; i++) {
            let a = skeleton[i][0];
            let b = skeleton[i][1];
            strokeWeight(2);
            stroke(255);
            line(a.position.x, a.position.y, b.position.x, b.position.y);
        }
    }
}


