const adImgs=document.querySelectorAll('.ad-img li')
const prev=document.querySelector('.prev')
const next=document.querySelector('.next')
let adIndex=0  //轮播图下标
let times;
// 下一步
prev.addEventListener('click',()=>{
     adIndex--
     if(adIndex<0){
         adIndex=adImgs.length-1
     }
     adImgs.forEach(adImg=>{
        adImg.classList.remove('show')
    })
    adImgs[adIndex].classList.add('show')
})
// 上一步
next.addEventListener('click',()=>{
    adIndex++
    if(adIndex>adImgs.length-1){
        adIndex=0
    }
    adImgs.forEach(adImg=>{
        adImg.classList.remove('show')
    })
    adImgs[adIndex].classList.add('show')
})
next.addEventListener('mouseover',function(){
    clearInterval(times);
})
function info(){
    times=setInterval(() => {
            adIndex++
            if(adIndex>adImgs.length-1){
                adIndex=0
            }
            adImgs.forEach(adImg=>{
                adImg.classList.remove('show')
            })
            adImgs[adIndex].classList.add('show')
        
    }, 3000);
}
info()
