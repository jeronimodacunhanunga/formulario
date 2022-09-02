 const nome = document.querySelector('#name')
 const email = document.querySelector('#email')
 const botao = document.querySelector('#submit-button')
 const error = document.querySelector('.msg')
 const items = document.querySelector(".items")

botao.addEventListener('click', function(event) {
event.preventDefault()
const inputnome = nome.value
const inputemail = email.value

if( inputnome === '' || inputemail === '') {
 error.innerHTML = "Porfavor insira os seus dados"
 error.classList = 'error' 

 setTimeout(() => {
    error.innerHTML = "";
    error.classList = "";
     }, 3000);
    return;

    }

    else if (inputnome === 'geronimo' && inputemail === 'jeronimodacunha@63gmail.com') {
location.href = "lgin.html"
    }

    else {
        error.innerHTML += "Algo Esta errado.tente Novamente"
        error.classList = 'error' 
       
        setTimeout(() => {
           error.innerHTML = "";
           error.classList = "";
            }, 3000);
           return;
       
    }

/*const li = document.createElement('li')
li.classList = ('item')
li.innerHTML = (`Seu nome <strong>${inputnome}</strong> <br/>  Seu <strong>${inputemail}</strong>`)
items.appendChild(li)

setTimeout(() => {
    li.innerHTML = "";
    li.classList = "";
   
     }, 3000); */
    

nome.value = "";
email.value = "";
})