
console.log("hi")
for(persons in localStorage)
{
    console.log(localStorage[persons])
    const obj=JSON.parse(localStorage[persons])
    if(obj.islogged===true)
    {
        console.log("hello")
        document.getElementById("greeting").innerHTML="Welcome"+" "+obj.name
        document.getElementById("options").style.display='none'
        document.getElementById("logout").style.display=''
        document.getElementById("profile").style.display=''
        const logout=document.getElementById("logout")
    logout.addEventListener("click",()=>{
            logout.style.display='none'
            obj.islogged=false;
            localStorage.setItem(obj.mail,JSON.stringify(obj))
            document.getElementById("profile").style.display='none'
            document.getElementById('options').style.display=''
            document.getElementById('greeting').innerHTML='Welcome to <strong>Travello</strong>'


       })

    }
    
}

