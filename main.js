
function init(){
    chrId = document.getElementById('plane');
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


function move(event) {
    var k = event.keyCode,

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


/***********************Colission*******************************/
/*setInterval(function(){
    
    //Get the height and position of the player
    var planeTop    = parseInt(getComputedStyle(chrId).top);
        planeHeight = parseInt(getComputedStyle(chrId).left);
    
    //and the top of the ground
    var image1Top = parseInt(imgObj1.style.top);
    var image1Left = parseInt(imgObj1.style.left);
    var image2Top = parseInt(imgObj2.style.top);
    var image2Left = parseInt(imgObj2.style.left);
    var image3Top = parseInt(imgObj3.style.top);
    var image3Left = parseInt(imgObj3.style.left);

    //linear gravity? Why now?
    //charTop += 5;
    
    //If the character's bottom is hitting the ground,
    //Stop moving
    if(planeTop + planeHeight == (image1Top) {
        charTop = groundTop - charHeight;    
    }
    
    //Set the character's final position    
    character.style.top = charTop + "px";
},33);



/***********************ENEMY MOVEMENT**************************/
function moveRight(){

    if( ((parseInt(getComputedStyle(imgObj1).left) == parseInt(getComputedStyle(chrId).left) + chrId.offsetWidth) || 
        (parseInt(getComputedStyle(imgObj2).left) == parseInt(getComputedStyle(chrId).left) +  chrId.offsetWidth) || 
        (parseInt(getComputedStyle(imgObj3).left) == parseInt(getComputedStyle(chrId).left) +  chrId.offsetWidth) 
        &&
        ((parseInt(getComputedStyle(imgObj1).top) + imgObj1.offsetHeight == parseInt(getComputedStyle(chrId).top) + imgObj1.offsetHeight ) || 
        (parseInt(getComputedStyle(imgObj2).top) + imgObj2.offsetHeight== parseInt(getComputedStyle(chrId).top) + imgObj2.offsetHeight) || 
        (parseInt(getComputedStyle(imgObj3).top) + imgObj3.offsetHeight == parseInt(getComputedStyle(chrId).top) + imgObj3.offsetHeight)))){
        alert("Colission");
        init();
    }
    else{
        if( parseInt(getComputedStyle(imgObj1).left) <= -20 &&
            parseInt(getComputedStyle(imgObj2).left) <= -20 &&
            parseInt(getComputedStyle(imgObj3).left) <= -20)
        {
            init();
        }
        imgObj1.style.left = parseInt(getComputedStyle(imgObj1).left) - Math.floor((Math.random() * 10) + 1) + 'px';
        imgObj2.style.left = parseInt(getComputedStyle(imgObj2).left) - Math.floor((Math.random() * 10) + 1) + 'px';
        imgObj3.style.left = parseInt(getComputedStyle(imgObj3).left) - Math.floor((Math.random() * 10) + 1) + 'px';
        setTimeout(moveRight,20); // call moveRight in 20msec
    }

}

                        
window.onload =init;