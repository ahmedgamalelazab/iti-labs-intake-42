//some colors 

var colors = ["red", "green", "black"," white", "purple" , "pink"];

var colorsIndex = colors.length;

//we need to rand 

var t;

function changeTheBody(){
    var randValue = Math.floor(Math.random()*colors.length);
    document.body.style.backgroundColor=  colors[randValue];
    console.log(randValue);
    if(randValue === 0){
        clearInterval(t);
        close();
    }
}

setInterval(changeTheBody,1000);

