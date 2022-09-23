 let deadline = new Date("oct 21,  2022 20:59:59").getTime()
 let btnFile = document.getElementsByClassName('btn-file')
 let butSubmit = document.getElementsByClassName('btn-submit')
 let btnSelectFile = document.getElementsByClassName('btn-selecr-file')

 
 
 let x = setInterval(function(){

     let now = new Date().getTime()
     let t = deadline - now
     let days = Math.floor(t / (1000 * 60 * 60 * 24))
     let hours = Math.floor((t %(1000 * 60 *60 * 24)) / (1000 * 60 *60))
     let minutes = Math.floor((t % (1000 * 60 * 60))/(1000 *60))
     let seconds = Math.floor((t % (1000 * 60)) / 1000)
     document.getElementById('day').innerHTML = days + ' :'
     document.getElementById('hour').innerHTML = hours + ' :'
     document.getElementById('minutes').innerHTML = minutes + ' :'
     document.getElementById('second').innerHTML = seconds
    
     if (t < 0){
        clearInterval(x)
        
     }
 },1000)

 bt

