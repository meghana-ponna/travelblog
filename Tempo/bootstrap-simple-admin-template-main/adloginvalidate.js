
$(document).ready(function(){
    $("#submit").click(function(){
    const mailId=$("#typeEmailX").val()


const passwd=$("#typePasswordX").val()

if("admin@gmail.com"===mailId){
    if("admin"===passwd){
         window.open("index.html")
        
        }
           
        }
    })
        
});
 