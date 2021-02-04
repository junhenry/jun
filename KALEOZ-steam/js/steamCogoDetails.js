const article=document.querySelector('.article')
const detailsBtn=document.querySelector('.details-btn')
const detailsInfo=document.querySelector('.details-info')
const productsList=document.querySelector('.products-list')
const productsInfos=document.querySelectorAll('.products-info li')
const productFilterLis=document.querySelectorAll('.product-filter li')
// btn产品详情信息
detailsBtn.addEventListener('click',()=>{
    if(article.classList.contains('on')){
        article.classList.remove('on')
    }else{
        article.classList.add('on')
    }
})
// list产品详情
productsInfos.forEach(productsInfo=>{
    productsInfo.addEventListener('click',()=>{
        productsList.classList.add('on')
        productsInfos.forEach(val=>{
            val.classList=''
        })
        productsInfo.classList.add('selected')
    })
})
// New、Exterior、Price  tab切换
productFilterLis.forEach(productFilterLi=>{
    productFilterLi.addEventListener('click',()=>{
        productFilterLis.forEach(item=>{
            item.classList=''
        })
        productFilterLi.classList.add('selected')
    })
})