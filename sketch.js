var storyMode
var FreePlay
var count=0



var storymodeyes,storymodeno


function preload (){
    storymodeyes= loadAnimation("images/story mode animation 1.png","images/story mode animation 2.png","images/story mode animation 3.png")

storymodeno= loadAnimation("images/selected story mode animation 1.png","images/selected story mode animation 2.png","images/selected story mode animation 3.png")

}
function setup(){
createCanvas(1280,650)
storyMode=createSprite(640,210,20,20)
FreePlay=createSprite(640,400,20,20)
storyMode.addAnimation("animate",storymodeno)

}



function draw(){
drawSprites();


}

function keyPressed(){
if(keyCode===38 && count===0){
    storyMode.shapeColor="black"
    FreePlay.shapeColor="grey"
    count+=1
    
}

else if(keyCode===38 && count===1){
    
    storyMode.shapeColor="grey"
    FreePlay.shapeColor="black"
    count=count-1
    storyMode.addAnimation("animate",storymodeyes)

}



if(keyCode==40 && count===1){
    storyMode.shapeColor="grey"
    FreePlay.shapeColor="black"
    count+=1
}

else if(keyCode===40 && count===2){
    storyMode.shapeColor="black"
    FreePlay.shapeColor="grey"
    count=count-1
    
}

}

