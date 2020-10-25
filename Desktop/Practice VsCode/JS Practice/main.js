const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onsubmit);

function onsubmit(e){
  e.preventDefault();
  // console.log(nameInput.value);
  if (nameInput.value === '' || emailInput.value === ''){
    msg.classList.add('error')
    msg.innerHTML = ('Please fill all fields');
    setTimeout(() =>  msg.remove(), 3000 )
  
    }  else(console.log('success'));

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`) )
    userList.appendChild(li);

    // Clear console
    nameInput.value = ''
    emailInput.value = ''
    
}


