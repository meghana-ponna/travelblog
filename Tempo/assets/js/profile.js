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
          $("#mail").text(user.mail)
         $("#heading").html(user.name)
         $("#edit").click(function(){
            console.log("hi")
             user1={
                name:$("#name").val(),
                username:$("#username").val(),
                address:$("#address").val(),
                mail:$("#mail").text,
                islogged:true
            }
                // user.name=$("#name").val()
                // user.username=$("#username").val()
                // user.address=$("#address").val()
                // user.mail=$("#mail").val()
       // localStorage.setItem("users",JSON.stringify(user))
       $.ajaxSetup({
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    body=JSON.stringify(user1)
    $.post('http://127.0.0.1:3000/users2',body,function(xhr,status,responseText){
        user1=JSON.parse(responseText)
        $("#name").val(user1.name)
        $("#username").val(user1.username)
       $("address").val(user1.address)
        $("mail").text(user1.mail)
        $("heading").html(user1.name)

    })

                
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
