
// const httpRequest=new XMLHttpRequest()
// httpRequest.open('GET','http://127.0.0.1:3000/contact')
// httpRequest.send()
// httpRequest.onload=function()

// {
//     data=JSON.parse(this.responseText)

//     for(user of data)
//     {
//   document.getElementById("tbody").innerHTML+="<tr> <td>"+user.name+"</td><td>"+user.email+"</td><td>"+user.subject+"</td><td>"+user.message+"</td></tr>"
//  }
// }

$.get("http://127.0.0.1:3000/contact",function(data,textStatus,jqXHR){
      data1=JSON.parse(data)
      for(user of data1)
      {
        $("#tbody").append("<tr> <td>"+user.name+"</td><td>"+user.email+"</td><td>"+user.subject+"</td><td>"+user.message+"</td></tr>")
      }

});