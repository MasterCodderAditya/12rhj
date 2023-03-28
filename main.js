function preload() 
{

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw()
{
    image(video, 0, 0, 640, 480);
    tint(tint_color);

    fill("red");
    stroke("blue");
    circle(10, 10, 30);
    rect(0, 0, 700, 20);
    rect(0, 0, 20, 700);
    rect(0, 460, 700, 20);
    rect(620, 0, 20, 700);
}

function take_snapshot()
{
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}