Snake=new Object();
//Snake.Speed=500;
Snake.size=20;
Snake.maxX=worldSizeX/Snake.size;
Snake.maxY=worldSizeY/Snake.size;
Snake.direction;
Snake.beginPositionX=parseInt((Math.random()*Snake.maxX-1));
Snake.beginPositionY=parseInt((Math.random()*Snake.maxY-1));
Snake.lastPositionX=Snake.beginPositionX;
Snake.lastPositionY=Snake.beginPositionY;
$("#Snake").css({'left':Snake.beginPositionX*Snake.size,'top':Snake.beginPositionY*Snake.size})
$(document).keydown(function(event){
    if (event.keyCode==37) {
        Snake.direction = 1;//left
    }
    if (event.keyCode==38) {
        Snake.direction = 2;//top
    }
    if (event.keyCode==39) {
        Snake.direction = 3;//right
    }
    if (event.keyCode==40) {
        Snake.direction = 4;//down
    }
});
        /*function Running(x,y){
            if(direction == 37 && x>=0){
                newX=x-1;
                newY=y;
                lastPositionX=x;
                //$(".Snake").delay(Speed).animate({'left': (newX*20)},0,function(){
                //    Running(newX,newY);
                //});
            }
            else if(direction == 38 && y>=0){
                newX=x;
                newY=y-1;
                lastPositionY=y;
                //$(".Snake").delay(Speed).animate({'top': (newY*20)},0,function(){
                //    Running(newX,newY);
                //});
            }
            else if(direction == 39 && x<=39){
                newX=x+1;
                newY=y;
                lastPositionX=x;
                //$(".Snake").delay(Speed).animate({'left': (newX*20)},0,function(){
                //    Running(newX,newY);
                //});
            }
            else if(direction == 40 && y<=29){
                newX=x;
                newY=y+1;
                lastPositionY=y;
                //$(".Snake").delay(Speed).animate({'top': (newY*20)},0,function(){
                //    Running(newX,newY);
                //});
            }
                $(".Snake").delay(Speed).animate({'left':(newX*20),'top': (newY*20)},0,function(){
                    if (newX==-1||newX==40||newY==-1||newY==30) 
                    {
                        $(".Snake").css({"left":lastPositionX*20,"top":lastPositionY*20});
                        alert("Game Over...");
                        return;
                    }
                    Running(newX,newY);
                });
        }*/
        //$(document).keydown(function(event){
            //isRunning=false;
            //direction=event.keyCode;
            //if(!isRunning){
              //  isRunning=true;
                //Running(beginPositionX,beginPositionY);
            //}
            //left
            //if(event.keyCode == 38 && beginPositionY>0){
               // beginPositionY=beginPositionY;
                //$(".Snake").css({'top':(beginPositionY)});
            //}//up
            //if(event.keyCode == 39 && beginPositionX<780){
                //beginPositionX=beginPositionX;
                //$(".Snake").css({'left':(beginPositionX)});
            //}//right
            //if(event.keyCode == 40 && beginPositionY<580){
                //beginPositionY=beginPositionY;
                //$(".Snake").css({'top':(beginPositionY)});
            //}//down
       // });