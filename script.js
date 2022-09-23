 let deadline = new Date("oct 21,  2022 20:59:59").getTime()
 let btnFile = document.querySelector('.btn-file')
 let butSubmit = document.querySelector('.btn-submit')
 let btnSelectFile = document.querySelector('.btn-select-file')
 let cardInscription = document.querySelector('.card-inscription')
 let cardSelection = document.querySelector('.card-selection')
 let cardPublication = document.querySelector('.card-publication')
 let cardImagesInscription = document.querySelector('.card-images-inscription') 
 let cardImagesSelection = document.querySelector('.card-images-selection') 
 let cardImagesPublication = document.querySelector('.card-images-publication') 
 
 let x = setInterval(function(){
     let now = new Date().getTime()
     let difference = deadline - now
     let days = Math.floor(difference / (1000 * 60 * 60 * 24))
     let hours = Math.floor((difference %(1000 * 60 *60 * 24)) / (1000 * 60 *60))
     let minutes = Math.floor((difference % (1000 * 60 * 60))/(1000 *60))
     let seconds = Math.floor((difference % (1000 * 60)) / 1000)
     document.querySelector('#day').innerHTML = days + ' :'
     document.querySelector('#hour').innerHTML = hours + ' :'
     document.querySelector('#minutes').innerHTML = minutes + ' :'
     document.querySelector('#second').innerHTML = seconds
    
     if (difference < 0){
        clearInterval(x)
        
     }
 },1000)

 btnSelectFile.addEventListener('click', e =>{
    e.preventDefault()
    btnFile.click()
 })

 cardInscription.addEventListener('mouseover', e =>{
   
   cardImagesInscription.innerHTML = 'maman'
 })

