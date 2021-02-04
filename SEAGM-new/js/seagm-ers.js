// 获取节点
const prev=document.querySelector('.prev')
const next=document.querySelector('.next')
const departmentLists=document.querySelectorAll('.departmentList li')
const nationalFlag=document.querySelector('.nationalFlag')
let departmentIndex=0
// 上一步
prev.addEventListener('click',()=>{
    departmentIndex--
    if(departmentIndex<0){
        departmentIndex=departmentLists.length-1
    }
    departmentLists.forEach(item=>{
        item.classList.remove('show')
    })
    nationalFlag.src=`../image/seagm-ers-block-1-department${departmentIndex+1}.png`
    departmentLists[departmentIndex].classList.add('show')
})
// 下一步
next.addEventListener('click',()=>{
    departmentIndex++
    if(departmentIndex>departmentLists.length-1){
        departmentIndex=0
    }
    departmentLists.forEach(item=>{
        item.classList.remove('show')
    })
    console.log(departmentIndex)
    nationalFlag.src=`../image/seagm-ers-block-1-department${departmentIndex+1}.png`
    departmentLists[departmentIndex].classList.add('show')
})