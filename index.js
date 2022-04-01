const form = document.getElementById('form')
const input = document.getElementById('input')
const btn = document.getElementById('btn')
const errImg = document.getElementById('err-img')
const small = document.getElementById('small')

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    errImg.style.display = "none"
    small.style.display = 'none'
    if(!validateEmail(input.value)){
        errImg.style.display = "block"
        console.log('nope')
        input.style.border = "2px solid hsl(0, 67%, 58%)"
        small.style.display = 'block'
      }else{
        document.body.innerHTML = `<div style="display:flex; align-items: center; justify-content: center;"><h1>Thank you!</h1></div>`;
      }
      
})
