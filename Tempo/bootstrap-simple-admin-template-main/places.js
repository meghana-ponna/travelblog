//  const arr=[]
// arr.push({name:"Delhi",src:"assets/img/portfolio/portfolio-1.jpg",description:"An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife, the Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage.",isopen:false})
// arr.push({name:"Goa",src:"assets/img/portfolio/portfolio-2.jpg",description:"Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda.",isopen:false})

// arr.push({name:"Kerala",src:"assets/img/portfolio/portfolio-3.jpg",decsription:"Munnar is a town in the Western Ghats mountain range in India’s Kerala state. A hill station and former resort for the British Raj elite, it's surrounded by rolling hills dotted with tea plantations established in the late 19th century. Eravikulam National Park, a habitat for the endangered mountain goat Nilgiri tahr, is home to the Lakkam Waterfalls, hiking trails and 2,695m-tall Anamudi Peak.",isopen:false})
// arr.push({name:"Sikkim",src:"assets/img/portfolio/portfolio-4.jpg",decsription:"The Yumthang Valley or Sikkim Valley of Flowers sanctuary, is a nature sanctuary with river, hot springs, yaks and grazing pasture on rolling meadows surrounded by the Himalayan mountains in the North Sikkim district of Sikkim state in India.",isopen:false})
// arr.push({name:"Arunachal Pradesh",src:"assets/img/portfolio/portfolio-5.jpg",decsription:"Tawang is a town and administrative headquarter of Tawang district in the Indian state of Arunachal Pradesh. The town was once the capital of the Tawang Tract, which is now divided into the Tawang district and the West Kameng district. Tawang continues as the headquarters of the former.",isopen:false})
// arr.push({name:"Srinagar",src:"assets/img/portfolio/portfolio-6.jpg",description:" Dal is a lake in Srinagar, the summer capital of Jammu and Kashmir. It is an urban lake, the second largest lake in Jammu and Kashmir, and the most visited place in Srinagar by tourists and locals.",isopen:false})
// localStorage.setItem("places",JSON.stringify(arr))

$(document).ready(function(){
  console.log("hello")
  $("#submit").click(function(){
        console.log("hi")
        
      console.log("clicked 2nd time")
      const name=$("#name").val()
      const link=$("#link").val()
      
      const description=$("#description").val()
       data={
        name:name,
        src:link,
        description:description,
        isopen:false
      }
      console.log(data)
      //const httpRequest=new XMLHttpRequest()
      $.ajaxSetup({
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    body=JSON.stringify(data)
    $.post('http://127.0.0.1:3000/places',body,function(xhr,status,responseText){
       alert(responseText)

    })
    })
  });


//const container=document.getElementById("places")
//container.innerHTML="";
//const places=JSON.parse(localStorage.getItem("places"))
//console.log(places)
// for(place of places){
//     container.innerHTML+="<div class='col-lg-4 col-md-6 portfolio-item filter-app'> <img src="+place.src+" class='img-fluid' alt=''><div class='portfolio-info'><h4>"+place.name+"</h4><a href="+place.src+" data-gallery='portfolioGallery' class='portfolio-lightbox preview-link' title='"+place.name+"'><i class='bx bx-plus'></i></a><a href='portfolio-details.html' class='details-link' title='More Details'><i class='bx bx-link'></i></a></div></div>"
// }
/* <div class="col-lg-4 col-md-6 portfolio-item filter-app">
<img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt="">
<div class="portfolio-info">
  <h4>Delhi</h4>
  <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Taj Mahal"><i class="bx bx-plus"></i></a>
  <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
</div>
</div> */

