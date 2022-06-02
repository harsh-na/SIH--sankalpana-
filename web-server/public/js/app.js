console.log('I will cover this course')

// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data) =>{
//         console.log(data)
//     })
// })


const weatherForm=document.querySelector('form')
const search=document.querySelector('input')
const messageOne=document.querySelector('#message-1')
const messagetwo=document.querySelector('#message-2')


// messageOne.textContent ='harshit'
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=search.value
    
    messageOne.textContent='Loading...'
    messagetwo.textContent=''

    fetch('http://localhost:3000/weather?address='+location).then((response) =>{
        response.json().then((data)=>{
            if(data.error){
                messageOne.textContent=data.error
            }else{
                messageOne.textContent=data.location
                messagetwo.textContent=data.forecast
               
            }
        })
    })
    


})