const name=window.location.hash.slice(1)

httpRequest=new XMLHttpRequest();
httpRequest.open('GET','http://127.0.0.1:3000/places')
httpRequest.onreadystatechange=function(){

  if(this.status==200){
    const arr=JSON.parse(this.responseText)
   
    for(place of arr){
        
        console.log(name)
        if(name===place.name){
           
            document.getElementById("photo").src=place.src
            document.getElementById("title").innerText=place.name
            document.getElementById("description").innerText=place.description
        }
    }
   
  }
}
httpRequest.send()
