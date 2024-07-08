function letstart(){
    if(confirm("Are you sure you have complete knowledge? Else click on 'Learn More'.")){
        setTimeout(wind,120000);
       var w= window.open("game.html");
       function wind(){
        w.close();
       }
    }
    else{
        window.location.href="index.html";
    }
    
}



var count=0;
function qss1(){
    var optn1=document.getElementById("optn1");
    if(optn1.checked){
        
        count=count+1;
}
}
function qss2(){
    var optn2 = document.getElementById("optnn2");
    if(optn2.checked){
        
        count=count+1;
    }
}
function qss3(){
    var optn3 = document.getElementById("optnnn3");
    if(optn3.checked){
        
        count=count+1;
    }
}
function qss4(){
    var optn4 = document.getElementById("optn42");
    if(optn4.checked){
        
        count=count+1;
    }
}
function qss5(){
    var optn5 = document.getElementById("optn51");
    if(optn5.checked){
        
        count=count+1;
    }
}
function submitQuiz(){
    if(count<2){
      alert("Your Score is " + count +"/5");
    }
    if(count>=2 & count<=4){
        alert("That's Good! You scored "+ count+"/5.")
    }
    if(count==5){
        alert("Excellent!! You scored "+ count+"/5.")
    }
    window.close();
}