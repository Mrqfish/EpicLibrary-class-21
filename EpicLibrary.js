//bounceeee
function bounceOff(p1,p2){

    if(p1.x-p2.x < p1.width/2 + p2.width/2  &&
      p2.x-p1.x < p2.width/2 + p1.width/2 ){
      p1.velocityX = p1.velocityX*(-1);
      p2.velocityX = p2.velocityX*(-1);
      }
      
  
    if(p1.y-p2.y < p2.height/2 + p1.height/2 &&
  
      p2.y-p1.y < p1.height/2 + p2.height/2 )
      {
        p1.velocityY = p1.velocityY*(-1);
        p2.velocityY = p2.velocityY*(-1);
    }
  
  
  }

 //touching thing
  function isTouching(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object2.y < object2.height/2 + object1.height/2) {
      
      return true;
    }
    else {
      return false;
    } 
  } 