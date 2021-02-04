const topLanguage=document.querySelector('.top-language')
const language=document.querySelector('.language')
const form=document.querySelector('.form')
console.log(form,33)
const languageClose=document.querySelector('.language-close')
const userMenu=document.querySelector('.user-menu')
const user=document.querySelector('.user')
const mainNavGame=document.querySelector('.main-nav-game')
const gameListCtrl=document.querySelector('.game-list-ctrl')
// 语言切换
language.addEventListener('click',()=>{
    if(topLanguage.classList.contains('on')){
        topLanguage.classList.remove('on') 
    }else{
        topLanguage.classList.add('on')
    }
})
// 语言切换关闭
languageClose.addEventListener('click',()=>{
    topLanguage.classList.remove('on')
})

// 用户菜单切换
user.addEventListener('click',()=>{
    if(userMenu.classList.contains('on')){
        userMenu.classList.remove('on')
    }else{
        userMenu.classList.add('on')
    }
})
// 游戏筛选
gameListCtrl.addEventListener('click',()=>{
    if(mainNavGame.classList.contains('on')){
        mainNavGame.classList.remove('on')
    }else{
        mainNavGame.classList.add('on')
    }
})