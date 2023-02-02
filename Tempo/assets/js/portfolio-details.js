const name=window.location.hash.slice(1)

$(document).ready(function(){
  $.get("http://127.0.0.1:3000/places/"+name,function(data,textStatus,jqXHR){
    const data1=JSON.parse(data)
    console.log(data1)
    $("#photo").attr("src",data1.src);
            $("#title").text(data1.name)
            $("#description").text(data1.description)
        
    
   
  })
})



//$("#logout").css('display','');