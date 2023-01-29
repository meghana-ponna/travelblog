console.log("hi")
const queries=[]
    const signup=document.getElementById("submit")
    // signup.addEventListener("click", ()=>{
    //     document.getElementsByClassName('signupFrm')[0].style.display=''
       // const signup=document.getElementById('signup')
       console.log(signup)
        signup.addEventListener("click",()=>{
            console.log("buttonclicked")
            const name=document.getElementById("name").value
        console.log(name)
        const email=document.getElementById("email").value
        console.log(email)
        const subject=document.getElementById("subject").value
        console.log(subject)
        const message=document.getElementById("message").value
        console.log(message)
    
         console.log("enter into else loop")
         const new_data={name:name,email:email,subject:subject,message:message}
         queries.push(new_data)
          localStorage.setItem("queries",JSON.stringify(queries))
          console.log(queries)
          //console.log(persons)
        })
    
          ///document.getElementsByClassName('signupFrm')[0].style.display='none'
    
        
    
    
  
    
    