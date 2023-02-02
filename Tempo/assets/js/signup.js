
// if (users === null) {
//   users = [
//     {
//       name:"admin",
//       mail: "admin@gmail.com",
//       password: "admin",
//       username:"admin",
//       address:"lbnagar",
//       islogged:false,
//     },
//   ];
//   localStorage.setItem("users", JSON.stringify(users));
// }
// else
// {
//   users=JSON.parse(users);
// }
console.log("hi")

$(document).ready(function(){
    function exists(email){
        console.log("happy")
        $.get("http://127.0.0.1:3000/users/"+email,function(data,textStatus,jqXHR){
            console.log(data)
            if(data=="found")
            {
                return true;
            }
            return false;  
    })}
    $("#signup").click(function(){
            console.log("buttonclicked")
            const name=$("#firstname").val()
        console.log(name)
        const email=$("#email").val()
        console.log(email)
        const username=$("#username").val()
        console.log(username)
        const password=$("#password").val()
        console.log(password)
        const cnfpassword=$("#cnfpassword").val()
        console.log(cnfpassword)
        const address=$("#address").val()
        console.log(address)
        if(email.length==0||name==null||username.length==0||password.length==0||cnfpassword.length==0||address.length==0){
            if(email.size()==0){
                $("#email").val("mandetory)")
    
            }
            if(name==null){
                $("#firstname").val("mandetory")
    
            }
            if(username==null){
               $("#username").val("mandetory")
    
            }
            if(password==null){
                $("#password").val("mandetory")
    
            }
            if(cnfpassword==null){
                $("#cnfpassword").val("mandetory")
    
            }
            if(address==null){
                $("#address").val("mandetory")
    
            }
    
    
        }
       else if(password!==cnfpassword){
        $("#password").val("");
        $("#cnfpassword").val("")
        alert("password does not match")
        // document.getElementById("#password").placeholder="passwords not matched"
        // document.getElementById("#cnfpassword").placeholder="passwords not matched"
       }
    
    
       else{
        // users=JSON.parse(localStorage.getItem('users', JSON.stringify(users)));
        //  console.log("enter into else loop")
        $.get("http://127.0.0.1:3000/users/"+email,function(data,textStatus,jqXHR){
            console.log(data)
            if(data=="found")
            {
                setTimeout(3000,()=>{

                })
                alert("email already exist")
            }
            else{

          
        const data={name:name,password:password,mail:email,username:username,address:address,islogged:false}
        //  users.push(new_data)
        //   localStorage.setItem("users",JSON.stringify(users))
        //   window.open("login.html")
        //   console.log(new_data)
          //console.log(persons)
          $.ajaxSetup({
            headers: {
            'Content-Type': 'application/json',
         'Accept': 'application/json'
                }
            });
          body=JSON.stringify(data)
        $.post("http://localhost:3000/users",body,function(xhr,status,responseText){
            console.log(resposeText)
    
        })
        window.open('login.html',"_self")
    
          ///document.getElementsByClassName('signupFrm')[0].style.display='none'
    
        }

    })

    
        }
    })
})
    
    
  
    
    