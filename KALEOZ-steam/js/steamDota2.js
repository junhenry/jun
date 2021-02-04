const filterNavLis=document.querySelectorAll('.filter-nav li')
const filterTitle=document.querySelector('.filter-title h6')
const filterMenu=document.querySelector('.filter-menu')
const titleClose=document.querySelector('.filter-title i')
const title=document.querySelector('.filter-title .title')
const productFilterLis=document.querySelectorAll('.product-filter li')

const search=document.querySelector('.search')
const searchInput=document.querySelector('.searchInput')
const filter=document.querySelector('.filter')
const filterBtn=document.querySelector('.filter-btn')

const heroes=document.querySelector('.heroes')
const close=document.querySelector('.close')

filterNavLis.forEach(filterNavLi=>{
    filterNavLi.addEventListener('click',(e)=>{
        filterNavLis.forEach(item=>{
            item.classList.remove('selected')
        })
        filterNavLi.classList.add('selected')
        filterMenu.classList.add('on')
        const liValue=filterNavLi.querySelector('span')
        filterTitle.innerHTML=liValue.innerHTML
        const dataDotaNpc=e.target.getAttribute('data-dota-npc')
        title.setAttribute('data-dota-npc',dataDotaNpc)
    })
})
// 过滤名称关闭
titleClose.addEventListener('click',()=>{
    filterMenu.classList.remove('on')
    filterNavLis.forEach(item=>{
        item.classList.remove('selected')
    })
    filterTitle.innerHTML='Select Your Hero'
})

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

close.addEventListener('click',()=>{
    filterMenu.classList.add('show')
})
heroes.addEventListener('click',()=>{
    filterMenu.classList.remove('show')
})