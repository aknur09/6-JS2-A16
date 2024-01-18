const btns=document.querySelectorAll('button')

const olTag=document.querySelector('ol')
const spinner=document.querySelector('#spinner')



const clothes = [
    {
img : "https://ae04.alicdn.com/kf/Se782902370d1492e90c23eeea0e3b1b9y.jpg ",
cotegory : 'женские одежды',
title: "брюки ",
summa: " цена : 1 113",
    },
    
    {
       img : "https://ae04.alicdn.com/kf/S5adc2d7b4e6349c994ec6f471d44d0b5J.jpg ",
       cotegory : 'женские одежды',
       title: "зип худи человек-паук ",
       summa: " цена : 2 000",
           },
 
     {    
     img : 'https://ir.ozone.ru/s3/multimedia-c/wc1000/6414413040.jpg',
     cotegory : 'женские одежды',
     title: " жилет",
     summa: " цена : 2 000",
    
         },
   {      
       img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsd41HDOBhNtWjq8EZ6HQ2BhH3XTnya7i7IxsAwG_PqJdqgUpmxLgYQ1hXZ8pMwQ4IviI&usqp=CAU',
     cotegory : 'женские одежды',
    title: " куртка человек-паук ",
    summa: " цена : 4 325",
               },
   {
       img:"https://ae04.alicdn.com/kf/Sc0e399bb5f0a49959be53c4b63b4990aA.jpg_640x640.jpg" ,
       cotegory:'женские одежды',
       title: "джинсы",
       summa:" цена : 1 608",
   },                            
       
   {
       img: "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/g/07/03543fe1-cfec-42f3-9936-3c30b6a743c5.jpg",
       cotegory:"мужские одежды",
       title: " брюки",
       summa:" цена : 1 500 сом"
   },
   {
       img: "https://m.media-amazon.com/images/I/61Q4zro00sL._AC_SX425_.jpg",
       cotegory:"мужские одежды",
       title: "худи-свитер",
       summa:"цена : 1900 сом"
   },
   {
       img: "https://ir.ozone.ru/s3/multimedia-v/wc1000/6834423487.jpg",
       cotegory:"мужские одежды",
       title: "куртка",
       summa:"цена : 3500 сом"
   },
   {
       img: "https://ae04.alicdn.com/kf/S2d0510e709ff4509991e7181fde2f71aO.jpg",
       cotegory:"мужские одежды",
       title: "куртка бомбер",
       summa:"цена : 4200 сом"
   },
   {
       img: "https://ae04.alicdn.com/kf/S95d03ffe621d4b82a1cf1a272d717b0eP.jpg",
       cotegory:"мужские одежды",
       title: "жилет",
       summa:"цена : 1450 сом"
       
   },
{
img: "https://ae04.alicdn.com/kf/Hf75d942d8a30440c980e092f857c7531J.jpg",
cotegory:"детские одежды",
title:"блузка",
summa:"цена: 1250сом",

},
{
   img:"https://ae04.alicdn.com/kf/S2e2e84121380420b933904863a9339fcV.jpg",
   
   cotegory:"детские одежды",
   title:"пижама",
   summa:" цена : 850 сом",
   
   },

]


function getOdejda(data){
    return new Promise((resolve, reject)=>{
        if(data){
            setTimeout(()=>{
                resolve(clothes)
            }, 3000)
        } else {
            reject('Kata ketti')
        }



    })
}


function showClothes(massive){
    olTag.innerHTML=''
    for (const odejda  of massive) {
        console.log(odejda);
        olTag.innerHTML+=`
        <div class="card" style="width: 280px; padding: 15px; margin-top: 10px;">
        <img class="card-img-top" src="${odejda.img}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-text">${odejda.cotegory}</h5>
          <p class="card-text">${odejda.title}</p>
          <p class="card-text">${odejda.summa}</p>
        </div>
      </div>
        
        `
    }
}



btns[0].onclick=()=>{
    olTag.innerHTML=''
    spinner.style.display='block'
    console.log(
        getOdejda(true)
        .then((mass)=>{
            showClothes(mass)
        console.log(mass)
       })
       .catch((err)=>{
        console.error(err);
       })
       .finally(()=>{
        console.log('Buttu Promise');
        spinner.style.display='none'
       })
    );
}




btns[1].onclick=()=>{
    olTag.innerHTML=''
    spinner.style.display='block'
    console.log(
        getOdejda(true)
        .then((mass)=>{
            showClothes(mass)
        console.log(mass)
       })
       .catch((err)=>{
        console.error(err);
       })
       .finally(()=>{
        spinner.style.display='none'
        console.log('Buttu Promise');
        const jenskaya=clothes.filter(odejda=>odejda.cotegory=='женские одежды')
    showClothes(jenskaya)
       })
    );
}





btns[2].onclick=()=>{
    olTag.innerHTML=''
    spinner.style.display='block'
    console.log(
        getOdejda(true)
        .then((mass)=>{
            showClothes(mass)
        console.log(mass)
       })
       .catch((err)=>{
        console.error(err);
       })
       .finally(()=>{
        console.log('Buttu Promise');
        spinner.style.display='none'

        const mujskaya=clothes.filter(odejda=>odejda.cotegory==='мужские одежды')
    showClothes(mujskaya)
       })
    );
}



btns[3].onclick=()=>{
    olTag.innerHTML=''
    spinner.style.display='block'
    console.log(
        getOdejda(true)
        .then((mass)=>{
            showClothes(mass)
        console.log(mass)
       })
       .catch((err)=>{
        console.error(err);
       })
       .finally(()=>{
        spinner.style.display='none'
        console.log('Buttu Promise');
        const detskaya=clothes.filter(odejda=>odejda.cotegory=='детские одежды')
    showClothes(detskaya)
       })
    );
}