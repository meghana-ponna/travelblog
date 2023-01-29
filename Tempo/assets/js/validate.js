
$(document).ready(function(){
    $("#submit").click(function(){
        console.log("hello")
      const mailId=$("#typeEmailX").val()
      const passwd=$("#typePasswordX").val()
       console.log("button clicked")
    // let obj=JSON.parse(localStorage.getItem("users"))
    $.get("http://127.0.0.1:3000/users",function(data,textStatus,jqXHR){
      const data1=JSON.parse(data)
    for(var i=0;i<data1.length;i++){
     if(data1[i].mail===mailId){
        console.log("hi")
        if(data1[i].password===passwd){
            const new_data={name:data1[i].name,password:data1[i].password,mail:data1[i].mail,username:data1[i].username,address:data1[i].address,islogged:true}
            const obj2=[]
            for(person of data1)
            {
             if(new_data.mail==person.mail){
                    continue
            }
            else{
              obj2.push(person)
       }
        }
            obj2.push(new_data)
            $.ajaxSetup({
                headers: {
                'Content-Type': 'application/json',
             'Accept': 'application/json'
                    }
                });
              body=JSON.stringify(obj2)
            $.post("http://localhost:3000/users1",body,function(xhr,status,responseText){
                console.log(resposeText)
        
            })
            // localStorage.setItem("users",JSON.stringify(obj2))
            console.log("hi")
            window.open("index.html")
    }
else{
    $("#typeEmailX").val("")
    $("#typePasswordX").val("")
    alert("invalid credentials")

}
    }
}

});
});
});