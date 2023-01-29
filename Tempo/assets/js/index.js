// console.log("hi")
// var places=localStorage.getItem('places');
// console.log("hi")
// if (places === null) {
//   places = [
//     {name:"Delhi",src:"assets/img/portfolio/portfolio-1.jpg",description:"An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife, the Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage.",isopen:false},
//   ];
//   console.log("hello")
//   localStorage.setItem("places", JSON.stringify(places));
// }
// else
// {
//   places=JSON.parse(places);
// }
//   arr=[]
// arr.push({name:"Delhi",src:"assets/img/portfolio/portfolio-1.jpg",description:"An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife, the Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage.",isopen:false})
// arr.push({name:"Goa",src:"assets/img/portfolio/portfolio-2.jpg",description:"Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda.",isopen:false})

// arr.push({name:"Kerala",src:"assets/img/portfolio/portfolio-3.jpg",description:"Munnar is a town in the Western Ghats mountain range in India’s Kerala state. A hill station and former resort for the British Raj elite, it's surrounded by rolling hills dotted with tea plantations established in the late 19th century. Eravikulam National Park, a habitat for the endangered mountain goat Nilgiri tahr, is home to the Lakkam Waterfalls, hiking trails and 2,695m-tall Anamudi Peak.",isopen:false})
// arr.push({name:"Sikkim",src:"assets/img/portfolio/portfolio-4.jpg",description:"The Yumthang Valley or Sikkim Valley of Flowers sanctuary, is a nature sanctuary with river, hot springs, yaks and grazing pasture on rolling meadows surrounded by the Himalayan mountains in the North Sikkim district of Sikkim state in India.",isopen:false})
// arr.push({name:"Arunachal Pradesh",src:"assets/img/portfolio/portfolio-5.jpg",description:"Tawang is a town and administrative headquarter of Tawang district in the Indian state of Arunachal Pradesh. The town was once the capital of the Tawang Tract, which is now divided into the Tawang district and the West Kameng district. Tawang continues as the headquarters of the former.",isopen:false})
// arr.push({name:"Srinagar",src:"assets/img/portfolio/portfolio-6.jpg",description:" Dal is a lake in Srinagar, the summer capital of Jammu and Kashmir. It is an urban lake, the second largest lake in Jammu and Kashmir, and the most visited place in Srinagar by tourists and locals.",isopen:false})
// localStorage.setItem("places",JSON.stringify(arr))
// console.log("hi")
// $(document).ready(function(){
//         const places=JSON.parse(localStorage.getItem("places"))
// //console.log(places)
//         for(place of places){
//              $("#places").append("<div class='col-lg-4 col-md-6 portfolio-item filter-app'> <img src="+place.src+" class='img-fluid' alt=''><div class='portfolio-info'><h4>"+place.name+"</h4><a href="+place.src+" data-gallery='portfolioGallery' class='portfolio-lightbox preview-link' title='"+place.name+"'><i class='bx bx-plus'></i></a><button href='portfolio-details.html' class='btn btn-primary' title='More Details' id='"+place.name+"'>know more</i></button></div></div>")
//         }
// });

    // jQuery methods go here...
    $(document).ready(function(){

    const name=window.location.hash.slice(1)
    //httpRequest=new XMLHttpRequest();
    //httpRequest.open('GET','http://127.0.0.1:3000/places')
    $.get('http://127.0.0.1:3000/places',function(data, textStatus, jqXHR)
    {
        arr=JSON.parse(data)
        console.log(data)
        //container.innerHTML=""
        //$("#places").html("")
        for(place of arr){
            $("#places").append("<div class='col-lg-4 col-md-6 portfolio-item filter-app'> <img src="+place.src+" class='img-fluid' alt=''><div class='portfolio-info'><h4>"+place.name+"</h4><a href="+place.src+" data-gallery='portfolioGallery' class='portfolio-lightbox preview-link' title='"+place.name+"'><i class='bx bx-plus'></i></a><button href='portfolio-details.html' class='btn btn-primary' title='More Details' id='"+place.name+"'>know more</i></button></div></div>")
        }
        arr1=$("button")
         console.log(arr1)
         let n=arr1.length
         for(let i=1;i<n-1;i++){
             $(arr1[i]).click(function(){
                window.location="portfolio-details.html#"+arr[i-1].name})}})
//console.log(places)
// for(place of places){
//     container.innerHTML+="<div class='col-lg-4 col-md-6 portfolio-item filter-app'> <img src="+place.src+" class='img-fluid' alt=''><div class='portfolio-info'><h4>"+place.name+"</h4><a href="+place.src+" data-gallery='portfolioGallery' class='portfolio-lightbox preview-link' title='"+place.name+"'><i class='bx bx-plus'></i></a><button href='portfolio-details.html' class='btn btn-primary' title='More Details' id='"+place.name+"'>know more</i></button></div></div>"
    
// }
//  arr1=$("button")
//  console.log(arr1)
//  let n=arr1.length
//  for(let i=1;i<n-1;i++){
//     $(arr1[i]).click(function(){
//         window.location="portfolio-details.html#"+places[i-1].name
//     })
// }

//localStorage.setItem("queries",JSON.stringify([]))
$.get("http://127.0.0.1:3000/users",function(data,textStatus,jqXHR){
      const data1=JSON.parse(data)
for(persons of data1)
{  
    console.log("meghana")
    console.log(persons.islogged)
    if(persons.islogged)
    {
        console.log("hello")
        console.log(persons.name)
        $("#greeting").html("Welcome"+" "+persons.name)
        $("#options").css('display','none');
        $("#logout").css('display','');
        $("#profile").css('display','');
       $("#admin").css('display','none');
        $("#logout").click(function(){
            $("#logout").css('display','none');
            console.log("hi")
            const new_data={name:persons.name,password:persons.password,mail:persons.mail,username:persons.username,address:persons.address,islogged:false}
            
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
            $("#profile").css('display','none');
            $("#logout").css('display','none');
            $('#options').css('display','');
            $("#admin").css('display','');
            $('#greeting').html('Welcome to <strong>Travello</strong>')


       })

    }
    
}

})
    });
