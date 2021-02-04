// 获取节点
const message=document.querySelector('.message')
const prompt=document.querySelector('.prompt')
const firstName=document.querySelector('.firstName')
const lastName=document.querySelector('.lastName')
const email=document.querySelector('.email')
const companyName=document.querySelector('.companyName')
const helpText=document.querySelector('.helpText')
const form=document.querySelector('.form')
const successPopUps=document.querySelector('.success-pop-ups')
// 失败
function error(errorMessage){
     message.classList.add('error')
     prompt.innerText=errorMessage
}
// 成功
function success(){
    successPopUps.style.display='block'
}
// 提交表单
form.addEventListener('submit',e=>{
    e.preventDefault()
    if(firstName.value.trim()==''){
        error(`Please input ${firstName.placeholder}`);
    }else if(lastName.value.trim()==''){
        error(`Please input ${lastName.placeholder}`);
    }else if(email.value.trim()==''){
        error(`Please input ${email.placeholder}`);
    }else if(companyName.value.trim()==''){
        error(`Please input ${companyName.placeholder}`);
    }else if(helpText.value.trim()==''){
        error(`Please textarea ${helpText.placeholder}`);
    }else{
        success()
    }
})
