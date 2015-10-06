function move(event) {
    var k = event.keyCode,
        chrId = document.getElementById('plane'),
        chr = {
            updown: function () {
                var y = parseInt(getComputedStyle(chrId).top);
                if (k == 38 && y >= 0) {
                    y-=10;
                } else if (k == 40 && y < 750) {
                    y+=10;
                }
                
                return y;
            },

            leftright: function () {
                var x = parseInt(getComputedStyle(chrId).left);
                if (k == 37 && x >= 0) {
                    x-=10;
                } else if (k == 39 && x < 1650) {
                    x+=10;
                }
                
                return x;
            }
        };

    chrId.style.top = (chr.updown()) + "px";
    chrId.style.left = (chr.leftright()) + "px";
}

document.addEventListener('keydown', move);

/***********************ENEMY MOVEMENT**************************/
var imgObj = null;
var animate ;
            
function init(){
    imgObj1 = document.getElementById('enemy1');
    imgObj1.style.position= 'absolute'; 
    imgObj1.style.top = Math.floor((Math.random() * 750) + 1) + 'px';
    imgObj1.style.left = '1800px';

    imgObj2 = document.getElementById('enemy2');
    imgObj2.style.position= 'absolute'; 
    imgObj2.style.top = Math.floor((Math.random() * 750) + 1) + 'px';
    imgObj2.style.left = '1800px';

    imgObj3 = document.getElementById('enemy3');
    imgObj3.style.position= 'absolute'; 
    imgObj3.style.top = Math.floor((Math.random() * 750) + 1) + 'px';
    imgObj3.style.left = '1800px'; 
    
    moveRight();
}
            
function moveRight(){

    if(parseInt(imgObj1.style.left >= 0) || parseInt(imgObj2.style.left >= 0) || parseInt(imgObj3.style.left >= 0));
    {
        imgObj1.style.left = parseInt(imgObj1.style.left) - Math.floor((Math.random() * 10) + 1) + 'px';
        imgObj2.style.left = parseInt(imgObj2.style.left) - Math.floor((Math.random() * 10) + 1) + 'px';
        imgObj3.style.left = parseInt(imgObj3.style.left) - Math.floor((Math.random() * 10) + 1) + 'px';
        animate = setTimeout(moveRight,20); // call moveRight in 20msec
    }


}

                        
window.onload =init;