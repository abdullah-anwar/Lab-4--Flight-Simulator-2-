var character = document.getElementById("character");
var ground    = document.getElementById("ground");

//We could use getComputedStyle to get the style props,
//but I'm lazy
character.style.top = "250px";
character.style.height = "40px";
ground.style.top = "500px";

//For every 33ms (about 30fps)
setInterval(function(){
    
    //Get the height and position of the player
    var charTop    = parseInt(character.style.top),
        charHeight = parseInt(character.style.height);
    
    //and the top of the ground
    var groundTop = parseInt(ground.style.top);
    
    //linear gravity? Why now?
    charTop += 5;
    
    //If the character's bottom is hitting the ground,
    //Stop moving
    if(charTop + charHeight > groundTop) {
        charTop = groundTop - charHeight;    
    }
    
    //Set the character's final position    
    character.style.top = charTop + "px";
},33);