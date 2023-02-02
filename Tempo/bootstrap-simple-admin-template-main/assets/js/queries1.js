const itemsPerPg = 5;
  let curPg = 1;
  let endPg = 0;

function pages(data,pgNum){
  
  $("#tbody").html("")
  $("#number").html(pgNum)
  curPg = pgNum;
   let startIdx = (pgNum - 1) * itemsPerPg;
    let endIdx = startIdx + itemsPerPg;
    for (let i = startIdx; i < endIdx; i++) {
      $("#tbody").append("<tr> <td>"+data[i].name+"</td><td>"+data[i].email+"</td><td>"+data[i].subject+"</td><td>"+data[i].message+"</td></tr>")
    }
  }
     $.get("http://127.0.0.1:3000/contact",function(data,textStatus,jqXHR){
      data1=JSON.parse(data)

      console.log(data1)
      let pdData = pages(data1, curPg);
      $("#increase").click(function () {
         curPg += 1;
          let endPg = Math.ceil(data1.length / itemsPerPg);
           if (endPg < curPg) {
              curPg -= 1;
             }
              console.log(endPg - data1.length / itemsPerPg);
              if (endPg - data1.length / itemsPerPg > 0) {
               curPg = endPg;
              }
               pdData = pages(data1, curPg);
             })
              $("#decrease").click(function() {
                 curPg -= 1;
                 if (curPg < 1) {
                   curPg = 1;
                 }
                  pdData = pages(data1, curPg);
                  })
      

})
