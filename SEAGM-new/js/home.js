const historyWrap=document.querySelector('.history-wrap')
const prev=document.querySelector('.prev')
const next=document.querySelector('.next')
// const prizes=document.querySelectorAll('.prize li img')
const historys=[
    {
        time:2007,
        content:'Founded as SEAGAMERMALL.COM'
    },
    {
        time:2008,
        content:'Website moved to SEAGM.COM'
    },
    {
        time:2010,
        content:'SEAGM.COM website V3 revamped. More than 4 million orders completed since inception.'
    },
    {
        time:2011,
        content:'Development office established in Chengdu, China.'
    },
    {
        time:2012,
        content:'SEA Gamer Mall Sdn Bhd established.'
    },
    {
        time:2013,
        content:'More than 1 million completed orders. Support office established in Thailand and Indonesia.'
    },
    {
        time:2014,
        content:'1.5 million unique visitors.'
    },
    {
        time:2015,
        content:'More than 3 million unique visitors & 35 million page views.'
    },
    {
        time:2016,
        content:'SEAGM.COM website V3 revamped. More than 4 million orders completed since inception.'
    },
    {
        time:2017,
        content:'1 million registered users.  10th Year Anyversary of SEAGM!  10 Years of Tremendous Growth.'
    },
]
let lIndex=historys.length
prev.addEventListener('click',()=>{
    lIndex--
    if(lIndex<3){
        lIndex=3
    }
    historyWrap.style.transform=`translateX(${4000-2800-lIndex*400}px)`
    changeStyle()
})
next.addEventListener('click',()=>{
    lIndex++
    if(lIndex>historys.length){
        lIndex=historys.length
    }
    historyWrap.style.transform=`translateX(${4000-2800-lIndex*400}px)`
    changeStyle()
})
function changeStyle (){
    let num = lIndex - 1
    let li = historyWrap.querySelectorAll('li')[num]
    historyWrap.querySelectorAll('li').forEach(item=>item.classList.remove('history-last'))
    li.classList.add('history-last')
}
// history初始列表数据
function historysList(){
    historys.forEach((item,index)=>{
        // console.log(lIndex,index+1)
        const li=document.createElement('li')
        if(lIndex=== index+1) {
            li.classList.add('history-last')
            li.innerHTML=`<h3>${item.time}<span>YEAR</span></h3>
            <p>${item.content}</p>`
            historyWrap.appendChild(li)
        }
        else{
            li.innerHTML=`<h3>${item.time}<span>YEAR</span></h3>
            <p>${item.content}</p>`
            historyWrap.appendChild(li)
        }
    })
}
historysList()

// prize鼠标移入移出
// prizes.forEach(prize=>{
//     const imgSrc=prize.src
//     const reg=imgSrc.replace(/[^0-9]/ig, "")
//     const num=reg.slice(-1)
//     prize.onmouseover=function(){
//         prize.src=`../image/home-block-7-prize${num}-${num}.png`
//     }
//     prize.onmouseout=function(){
//         prize.src=`../image/home-block-7-prize${num}.png`
//     }
// })
