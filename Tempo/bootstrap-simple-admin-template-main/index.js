$.get("http://127.0.0.1:3000/users",function(data,textStatus,jqXHR){
      data1=JSON.parse(data)
        $("#u").append("<p class='detail-subtitle'>Registered Users</p><span class='number'>"+data1.length+"</span>")

});

// users=JSON.parse(localStorage.getItem("users"))
// document.getElementById("u").innerHTML+="<p class='detail-subtitle'>Registered Users</p><span class='number'>"+users.length+"</span>"





$.get("http://127.0.0.1:3000/contact",function(data,textStatus,jqXHR){
      data1=JSON.parse(data)
        $("#u1").append("<p class='detail-subtitle'>Contact Request</p><span class='number'>"+data1.length+"</span>")

});