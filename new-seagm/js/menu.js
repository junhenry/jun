const header=document.querySelector('#header')
const menu=document.querySelector('.menu')
menu.addEventListener('click',()=>{
    if(header.className===''){
        header.classList.add('on')
    }else{
        header.classList.remove('on')
    }
})