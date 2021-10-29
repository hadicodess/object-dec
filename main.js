 img = "" 
 status = "" 
 object = []
 function setup(){
     canvas = createCanvas(640, 420); 
     canvas.center() 
     objectdetector = ml5.objectDetector('cocossd' ,modelLoaded); 
     document.getElementById("status").innerHTML = "status : Detecting object"; 
 } 
function modelLoaded() 
{
console.log("Model is Loaded!") 
status = true;  
objectdetector.detect(img, gotResult); 
} 

 function preload(){
img = loadImage('NEW YORK.jpeg'); 
 } 
function draw()
{
image(img, 0, 0, 640, 420); 

if (status != "") 
{
    for(i = 0; i< object,length; i++) 
    {
        document.getElementById("status").innerHTML = "status : object detected" 

        fill("white") 
        percent = floor(object[i].confidence * 100); 
        text(object[i].label + "" +  percent + "%", object[i].x,object[i].y); 
        noFill(); 
        stroke("white"); 
        rect(object[i].x, object[i].y, object[i].width, object[i].height); 
    }
}
fill("white");  
text("Wendy", 240, 280 ); 
noFill();
stroke("white"); 
rect(240, 280, 100, 80);  

fill("white"); 
text("money EX", 185, 280) 
noFill();
stroke("white"); 
rect(185, 280, 80, 60);  
}   

function gotResult(error, results) 
{
    if(error) 
    {
        console.log(error); 
    }  
    console.log(results); 
    object = results; 

}
