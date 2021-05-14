var canvas,bg;


//create variables


function preload() {
   //load images
    
    
    

}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(870, 600);
   //add animation
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    //add animation
    jerry.scale = 0.15;

}

function draw() {

    background();

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        
//set toms velocity to 0  
//change tom and jerrys  animation


    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        
//change animations and set frame delay 



    }
}
