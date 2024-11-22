var acc = document.getElementsByClassName("th_box_top");
var i;

for(i = 0; i < acc.length; i++){
    acc[i].addEventListener("click",function(){
         var button = this.document.getElementsByClassName("fa-plus");
         console.log(button);
         var panel = this.nextElementSibling;
         if(panel.style.display === "block"){
            panel.style.display = "none";
         }
         else{
            panel.style.display = "block";
         }
    })
}