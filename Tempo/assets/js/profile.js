$(document).ready(function(){
    $.get("http://127.0.0.1:3000/users",function(data,textStatus,jqXHR){
      const data1=JSON.parse(data)
  for (user of data1)
  {
      console.log(user)
      if(user.islogged){
          $("#name").val(user.name)
          $("#username").val(user.username)
          $("#address").val(user.address)
          $("#mail").val(user.mail)
         $("#heading").html(user.name)
    $("#edit").click(function(){
            console.log("hi")
                user.name=$("#name").val()
                user.username=$("#username").val()
                user.address=$("#address").val()
                user.mail=$("#mail").val()
        localStorage.setItem("users",JSON.stringify(user))
                $("#name").val(user.name)
                $("#username").val(user.username)
               $("address").val(user.address)
                $("mail").val(user.mail)
                $("heading").html(user.name)
        })
            }
        }

    });
        
})


// for( persons in localStorage){
//     const obj=JSON.parse(localStorage[persons])
//     if(obj.islogged){
//         document.getElementById("name").value=obj.name
//         document.getElementById("username").value=obj.username
//         document.getElementById("address").value=obj.address
//         document.getElementById("mail").value=obj.mail
//         document.getElementById("heading").innerHTML=obj.name
//         const edit=document.getElementById("edit")
// edit.addEventListener("click",()=>{
//     console.log("hi")
//         const email1=obj.mail
//         obj.name=document.getElementById("name").value
//         obj.username=document.getElementById("username").value
//         obj.address=document.getElementById("address").value
//         //obj.email=document.getElementById("mail").value
//         localStorage.removeItem(email1)
// localStorage.setItem(obj.email,JSON.stringify(obj))
//         document.getElementById("name").value=obj.name
//         document.getElementById("username").value=obj.username
//         document.getElementById("address").value=obj.address
//         document.getElementById("mail").value=obj.mail
//         document.getElementById("heading").innerHTML=obj.name
// })
//     }
// }
