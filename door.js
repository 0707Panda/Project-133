Status="";
objects=[];

function preload()
{
}

function setup()
{
    canvas=createCanvas(600, 400);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Detecting Objects.";
}

function draw()
{
    image(img, 0, 0, 600, 400);

    if(Status != "")
    {
        for(i=0; i < objects.length; i++)
        {
            round = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + round + "%", objects[i].x, objects[i].y);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}



function modelLoaded()
{
    console.log("Model Loaded.");
    Status=true;
    objectDetector.detect(img, gotResults);
}

function gotResults(results, error)
{
    if(error)
    {
        console.log(error);
    }else
        console.log(results);

        objects=results;
}