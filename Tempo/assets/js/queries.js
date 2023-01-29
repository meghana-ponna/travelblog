

    // signup.addEventListener("click", ()=>{
    //     document.getElementsByClassName('signupFrm')[0].style.display=''
       // const signup=document.getElementById('signup')
       $(document).ready(function(){
        $("#submit").click(function(){

        console.log("buttonclicked")
            const name=$("#name").val()
        console.log(name)
        const email=$("#email").val()
        console.log(email)
        const subject=$("#subject").val()
        console.log(subject)
        const message=$("#message").val()
        console.log(message)

        data={
          name:name,
          email:email,
          subject:subject,
          message:message,
      
      }
    //   obj1=JSON.stringify(data)
    //   var xhttp=new XMLHttpRequest()
    //   xhttp.open("POST","http://localhost:3000/queries",true)
    //   xhttp.setRequestHeader("content-type","application/json")
    //   xhttp.onreadystatechange=function(){
  
    //       if(this.readyState==4)
    //       {
    //           var response=this.responseText
    //           console.log(response)
    //       }
    //   }
    //   xhttp.send(obj1)

    $.ajaxSetup({
        headers: {
        'Content-Type': 'application/json',
     'Accept': 'application/json'
            }
        });
      body=JSON.stringify(data)
    $.post("http://localhost:3000/queries",body,function(xhr,status,responseText){
        console.log(resposeText)

    })
    
        //  console.log("enter into else loop")
        //  const queries=JSON.parse(localStorage.getItem("queries"))
         
        //  const new_data={name:name,email:email,subject:subject,message:message}
        //  queries.push(new_data)
        //   localStorage.setItem("queries",JSON.stringify(queries))
        //   console.log(queries)
        //   //console.log(persons)
        })
    
          ///document.getElementsByClassName('signupFrm')[0].style.display='none'
    
        
    
    
          // const submit=document.getElementById("submit")
          // submit.addEventListener("click",()=>{
          
          //     const first_name=document.getElementById("firstname").value
          // console.log(first_name)
          // const last_name=document.getElementById("last_name").value
          // const email=document.getElementById("email").value
          //     data={
          //         first_name:first_name,
          //         last_name:last_name,
          //         email:email,
              
          //     }
          //     obj1=JSON.stringify(data)
          //     var xhttp=new XMLHttpRequest()
          //     xhttp.open("POST","https://reqres.in/api/users",true)
          //     xhttp.setRequestHeader("content-type","application/json")
          //     xhttp.onreadystatechange=function(){
          
          //         if(this.readyState==4)
          //         {
          //             var response=this.responseText
          //             console.log(response)
          //         }
          //     }
          //     xhttp.send(obj1)
              
          // })
    
        });
    
          