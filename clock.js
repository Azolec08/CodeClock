
let second = 0
let minute = 0
let hour = 0
let d = new Date()

setInterval(
    function(){
        d = new Date()
        second = d.getSeconds() *6
        minute = d.getMinutes()*6   
        hour = d.getHours() * 30 + Math.round(minute / 12)
        document.querySelector('#data-hour-hand').style.transform = "rotate("+ hour +"deg)"
        document.querySelector('#data-minute-hand').style.transform = "rotate("+minute+"deg)"
        document.querySelector('#data-second-hand').style.transform = "rotate("+second+"deg)"
    },1000
)