// step-1: click even handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: get the email address inside the email input
    // always remember to use .value to get text from an input
    const emailFiled = document.getElementById('user-email');
    const email =emailFiled.value;
  // step-3: get the password
//   step-3.a : set id on the html
//   step-3.b : get the element
//   step-3.c : get the value from the element 

const passwordFiled = document.getElementById('user-password')
const password = passwordFiled.value;

// if (email === 'murikha13@gmail.com') {
//     console.log('valid email')
     
// }
// else{
//     console.log('invalid input');
// }
// if (password === 'foysal') {
//     console.log('valid password')
// }
// else{
//     console.log('invalid password');
// }
// if (email !== 'murikha13@gmail.com' && password !== 'foysal'){
//     console.log('invalid email and password')
// }

if (email === 'murikha13@gmail.com' && password ==='foysal') {
    window.location.href='bank.html'
} else {
  alert('incorrect password')


}
})