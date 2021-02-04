
const navMenus=document.querySelectorAll('.nav-menu')
const menuIten=document.querySelectorAll('.menu-iten')
const search=document.querySelector('.search')
const searchInput=document.querySelector('.searchInput')
const filter=document.querySelector('.filter')
const filterBtn=document.querySelector('.filter-btn')
const productFilterLis=document.querySelectorAll('.product-filter li')
navMenus.forEach((navMenu,index) => {
    const lis=navMenu.querySelectorAll('li') 
    const spanValue=navMenu.querySelector('span')
    // 判断是否有下拉  
    if(lis.length==0){
        navMenu.classList.add('hideDown')
    }
    // 设置下拉数据的个数和列数
    const CW=navMenu.offsetWidth
    const NUM=Math.ceil(lis.length/10)
    menuIten[index].style.setProperty('--width',CW)
    menuIten[index].style.setProperty('--num',NUM)
    
    navMenu.addEventListener('click',()=>{
        if(navMenu.classList.contains('on')){
            navMenu.classList.remove('on')
        }else{
            navMenus.forEach(item=>{
                item.classList.remove('on')
            })
            navMenu.classList.add('on')
            const lisItem=[...lis]
            lisItem.forEach(li=>{
                li.addEventListener('click',(e)=>{
                    spanValue.innerHTML=li.innerHTML
                    lisItem.forEach(item=>{
                        item.classList.remove('selected')
                    })
                    li.classList.add('selected')
                    this.classList.remove('on')
                })
            })
        }
    })
});

// 搜索获取焦点
searchInput.addEventListener('focus',e=>{
    e.preventDefault()
    search.classList.add('on')
})
// 搜索失去焦点
searchInput.addEventListener('blur',e=>{
    e.preventDefault()
    if(searchInput.value.trim()==''){
        search.classList.remove('on')
    }
})

filterBtn.addEventListener('click',()=>{
    if(filter.classList.contains('on')){
        filter.classList.remove('on')
    }else{
        filter.classList.add('on')
    }
})

// Hot、New、Price  tab切换
productFilterLis.forEach(productFilterLi=>{
    productFilterLi.addEventListener('click',()=>{
        productFilterLis.forEach(item=>{
            item.classList=''
        })
        productFilterLi.classList.add('selected')
    })
})
