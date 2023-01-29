/* <tr>
<td></td>
<td>philip.chaney@gmail.com</td>
<td>Manager</td>
<td>Admin</td>
<td class="text-end">
    <a href="" class="btn btn-outline-info btn-rounded"><i class="fas fa-pen"></i></a>
    <a href="" class="btn btn-outline-danger btn-rounded"><i class="fas fa-trash"></i></a>
</td>
</tr> */

$.get("http://127.0.0.1:3000/users",function(data,textStatus,jqXHR){
      data1=JSON.parse(data)
      for(user of data1)
      {
        $("#tbody").append("<tr> <td>"+user.name+"</td><td>"+user.mail+"</td><td>"+user.username+"</td><td>"+user.address+"</td></tr>")
      }

});
