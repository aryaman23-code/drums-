var ary=document.querySelectorAll(".drum").length;
//click press is handles here 
for(var i=0;i<ary;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);

}

function handleclick()
{   
    var buttonInnerHTML=this.innerHTML;
    makesound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}


//keyboard press 
document.addEventListener("keydown",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
    // console.log(event.key);
});

function buttonAnimation(currentkey)
{
    var activeButton=document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },100);

}
 





function makesound(key){

    switch (key)
    {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        
        case "s":
           var tom3=new Audio("sounds/tom-3.mp3");
           tom3.play();
            break;


         case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break; 
        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
            
        case "l":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(key);

    }

   

}