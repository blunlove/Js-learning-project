function Snake(parent,color,bodycolor,w,h,mX,mY){
    this.element = $("<div>");
    this.element.css({'position': 'absolute','background-color':color,'width':w,'height':h});
    $(parent).append(this.element);
    this.rest=function(){
        this.length=0;
        this.x=parseInt((Math.random()*mX));
        this.y=parseInt((Math.random()*mY));
        this.speedY=0;
        this.speedX=0;
        this.isAlive=true;
        this.lastX=new Array();
        this.lastY=new Array();
        this.bodyElement=new Array();
        this.element.css({"left":this.x*w,"top":this.y*h});
    }
    this.turnLeft=function(){
        if(this.speedX==1){return;}
        this.speedX=-1;
        this.speedY=0;
    }
    this.turnRight=function(){
        if(this.speedX==-1){return;}
        this.speedX=1;
        this.speedY=0;
    }
    this.turnUp=function(){
        if(this.speedY==1){return;}
        this.speedX=0;
        this.speedY=-1;
    }
    this.turnDown=function(){
        if(this.speedY==-1){return;}
        this.speedX=0;
        this.speedY=1;
    }
    this.update=function(){
        if(this.length>0) {
            for (var i = 0; i < this.length; i++) {
                this.lastX[this.length-i]=this.lastX[this.length-i-1];
                this.lastY[this.length-i]=this.lastY[this.length-i-1];
            }
        }
        this.lastX[0]=this.x;
        this.lastY[0]=this.y;
        this.x=this.x+this.speedX;
        this.y=this.y+this.speedY;
        this.bumpBody();
        this.element.css({"left":this.x*w,"top":this.y*h});
        for (var i = 0; i < this.length; i++) {
            this.bodyElement[i].css({'left':this.lastX[i]*w,'top':this.lastY[i]*h});
        }
    }
    this.eat=function(x,y){
        if(this.x==x && this.y==y){
            this.length++;
            this.Grow();
            return true;
        }
        else return false;
    }
    this.Grow=function() {
        this.bodyElement[this.length-1] = $("<div>");
        this.bodyElement[this.length-1].css({'position': 'absolute','background-color':bodycolor,'width':h,'height':h});
        this.bodyElement[this.length-1].css({'left':this.lastX[this,length]*w,'top':this.lastY[this,length]*h});
        $(parent).append(this.bodyElement[this.length-1]);
    }
    this.removeBody=function(){
        for (var i = 0; i <this.length; i++) {
            this.bodyElement[i].remove();
        }
    }
    this.bumpBody=function(){
        if(this.x<0||this.x>mX||this.y<0||this.y>mY){
            this.isAlive=false;
            return;
        }
        for (var i = 3; i < this.length; i++) {
            if(this.x==this.lastX[i] && this.y==this.lastY[i]){
                this.isAlive=false;
                return;
            }
        }
    }
    this.updateSize=function(_w,_h){
        w=_w;
        h=_h;
        this.element.css({'width':w,'height':h,"left":this.x*w,"top":this.y*h});
        for (var i = 0; i <this.length; i++) {
            this.bodyElement[i].css({'width':w,'height':h,'left':this.lastX[i]*w,'top':this.lastY[i]*h});
        }
    }
}
