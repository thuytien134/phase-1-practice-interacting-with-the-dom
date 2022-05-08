const time = document.getElementById('counter')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const heart = document.getElementById("heart")
const btn = document.getElementById('pause')
const submit = document.getElementsByTagName('form')
const like = document.querySelector('.likes')
let count = 0
 intervalId = setInterval(()=>{
    count += 1;
    time.innerHTML = count
    }, 1000);



const restart = document.createElement('button')
restart.id = 'restart'
restart.innerHTML = 'restart'
document.body.insertBefore(restart,like)
const form =document.querySelector('form')



plus.addEventListener('click', () => {
    count++
    time.innerHTML = count
})
minus.addEventListener('click', () => {
    count--
    time.innerHTML = count
})
heart.addEventListener('click', () => {
    const p = document.createElement('p')
    p.innerHTML = `i like at number ${time.innerText}`
    document.querySelector('.likes').appendChild(p)
})
function pause(){
    clearInterval(intervalId)
    btn.innerText = 'resume'
    document.querySelector('#submit').disabled = true
    minus.disabled = true
    plus.disabled = true
    heart.disabled = true
}
btn.addEventListener('click',(e)=> {
    pause()})

restart.addEventListener('click',()=>{
    minus.disabled = false
    plus.disabled = false
    heart.disabled = false
    count = 0

})
form.addEventListener('submit',(e)=>{
e.preventDefault()
const p = document.createElement('p')
console.log(e)
p.innerHTML = `${e.target.querySelector('#comment-input').value}`
document.querySelector('h3').appendChild(p)
form.reset()
})





