var is_playing=false;
var score;
var lives_left;
var step;
var action;
var fruits=['apple','banana','cherries','grapes','mango','orange','peach','pear','watermelon'];
$(function(){
    
   $("#startreset").click(function(){
       
       if(is_playing==true)
           {
               location.reload();
           }
       else{
           is_playing=true;
          $("#lives").show();
           $("#gameover").hide();
           $("#startreset").html("Reset Game");
           score=0;
           $("#svalue").html(score);
           lives_left=3;
           addHearts();             //add lives
           startAction();           //start sending fruits
       }
       
       }) ;
    
$("#fruit1").mouseover(function(){
    
    score++;
    $("#svalue").html(score);
  document.getElementById("sound").play();
    //stopAction();
    clearInterval(action);
    $("#fruit1").hide("explode",500);
   setTimeout(startAction,500);
    
});
function addHearts()
{   $("#lives").empty();
    for(i=0;i<lives_left;i++)
        {
            $("#lives").append('<img src="images/heart_logo.png" class="life">');
        }
}
function startAction()
{
    $("#fruit1").show();
    chooseFruit();          //function to generate random fruit every time
    $("#fruit1").css({'left':Math.round(550*Math.random()),'top':-50});
    step=1+(Math.round(5*Math.random()));               //value of step by whuch fruit comes down
    console.log(step);
    action=setInterval(function(){
        
        $("#fruit1").css('top',$("#fruit1").position().top + step);
        
        if($("#fruit1").position().top > $("#ques").height())
            {
                if(lives_left>1)
                {
                      $("#fruit1").show();
                        chooseFruit();          //function to generate random fruit every time
                    $("#fruit1").css({'left':Math.round(550*Math.random()),'top':-50});
                    step=1+(Math.round(5*Math.random())); 
                    lives_left--;
                    addHearts();
                  }
                else{
                    $("#gameover").show();
                    $("#gameover").html("<p>Game over!</p><p>Your score is " +  score + "</p>");
                    $("#lives").hide();
                      $("#startreset").html("Start Game");
                    is_playing=false;
                    stopAction();
                }
                
            }
    
        
    },10)
}
function chooseFruit()
{
    $("#fruit1").attr('src','images/'+ fruits[Math.round(8*Math.random())]+'.png');
}
function stopAction()
{
    clearInterval(action);
    $("#fruit1").hide();
}
    });