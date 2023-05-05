//search
let filterarray = [];

let galleryarray = [
{
  id: 1,
  name: "Piiza",
  src: "../asset/img/bg-pizza.png",
  desc : "₱ 800",
  btn : "ORDER"
},
{
  id: 2,
  name: "Drinks ",
  src: "../asset/img/bg-pizza.png",
  desc : "₱ 800",
  btn : "ORDER"
},
{
  id: 3,
  name: "Pizza B",
  src: "../asset/img/bg-pizza.png",
  desc : "₱ 800",
  btn : "ORDER"
},
{
  id: 4,
  name: " 21321",
  src: "../asset/img/bg-pizza.png",
  desc : "₱ 800",
  btn : "ORDER"
},
{
  id: 5,
  name: " Pizza 23 ",
  src: "../asset/img/bg-pizza.png",
  desc : "₱ 800",
  btn : "ORDER"
},
{
  id:6,
  name: "32a Barbeque Flavor Spicy6 ",
  src: "../asset/img/bg-pizza.png",
  desc : "₱ 800",
  btn : "ORDER"
},
{
  id:7,
  name: "234 Flavor Spicy",
  src: "../asset/img/bg-pizza.png",
  desc : "₱ 800",
  btn : "ORDER"
},
{
  id: 8,
  name: " asd2y8 ",
  src: "../asset/img/bg-pizza.png",
  desc : "₱ 800",
  btn : "ORDER"
},
{
  id:9,
  name: "sscy9 ",
  src: "../asset/img/bg-pizza.png",
  desc : "₱ 800",
  btn : "ORDER"

},
]



showgallery(galleryarray);

function showgallery(currarray){
  document.getElementById("card").innerText = "";

  for(var i=0; i <currarray.length; i++){
    document.getElementById("card").innerHTML +=`
      <div class="col-md-4 mt-3">
      <div class="card p-3 ps-5 pe-5">     
      <img src="${currarray[i].src}" width="100%" height="320px"/>
      <h4 class="text-capitalize text-center">${currarray[i].name}</h4>
      <span class="price"><span style="font-size: 23px;">${currarray[i].desc}</span>
      <button class="btn btn-danger px-5 p-2 m-5">${currarray[i].btn}</button>
      </div>
    
    `
    
  }
}



document.getElementById("myinput").addEventListener("keyup",function(){
  let text = document.getElementById("myinput").value;

  filterarray = galleryarray.filter(function(a){
    if(a.name.includes(text)){
      return a.name;
    }
  });
  if(this.value ==""){
    showgallery(galleryarray);
  }
  else{
    if(filterarray == ""){
      document.getElementById("para").style.display = 'block';
      document.getElementById("card").innerHTML = "";
    }
    else{
      showgallery(filterarray);
      document.getElementById("para").style.display = 'none';
    }
  }
})