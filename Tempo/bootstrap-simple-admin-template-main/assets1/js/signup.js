console.log("hi")

var exists=(email)=>{
    console.log(email)
        if(localStorage.getItem(email))
        return true;
        return false;
       }
    
    const signup=document.getElementById("signup")
    // signup.addEventListener("click", ()=>{
    //     document.getElementsByClassName('signupFrm')[0].style.display=''
       // const signup=document.getElementById('signup')
       console.log(signup)
        signup.addEventListener("click",()=>{
            console.log("buttonclicked")
            const name=document.getElementById("firstname").value
        console.log(name)
        const email=document.getElementById("email").value
        console.log(email)
        const username=document.getElementById("username").value
        console.log(username)
        const password=document.getElementById("password").value
        console.log(password)
        const cnfpassword=document.getElementById("cnfpassword").value
        console.log(cnfpassword)
        const address=document.getElementById("address").value
        console.log(address)
        if(email===null||name==null||username==null||password==null||cnfpassword==null||address==null){
            if(email.size()==0){
                document.getElementById("email").value="mandetory"
    
            }
            if(name==null){
                document.getElementById("firstname").value="mandetory"
    
            }
            if(username==null){
                document.getElementById("username").value="mandetory"
    
            }
            if(password==null){
                document.getElementById("password").value="mandetory"
    
            }
            if(cnfpassword==null){
                document.getElementById("cnfpassword").value="mandetory"
    
            }
            if(address==null){
                document.getElementById("address").value="mandetory"
    
            }
    
    
        }
       else if(password!==cnfpassword){
        document.getElementById("password").value="";
        document.getElementById("cnfpassword").value=""
    
        document.getElementById("password").placeholder="passwords not matched"
        document.getElementById("cnfpassword").placeholder="passwords not matched"
       }
   else if(exists(email)){
        document.getElementById("email").value="already exist"
      }
    
       else{
         console.log("enter into else loop")
         const new_data={name:name,password:password,mail:email,username:username,address:address,islogged:false}
          localStorage.setItem(email,JSON.stringify(new_data))
          console.log(new_data)
          //console.log(persons)
    
    
          ///document.getElementsByClassName('signupFrm')[0].style.display='none'
    
        
    
       }
    
        })
    
        
    
    
  
    
    