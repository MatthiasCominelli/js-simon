// 1. Un alert() espone 5 numeri generati casualmente.
// 2. Da li parte un timer di 30 secondi.
// 3. Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// 4. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// 1.
let NumeroUtente1 = document.getElementById('NumeriUtente1');
const buttonVerifica = document.getElementById('bottone');
let randomNum = [];
let userNum = [];
let numeriCorretti = []


for (let i = 0 ; i < 5; i++) 
{
    let randomGen = parseInt(Math.floor(Math.random() * 100));
    console.log(randomGen);
    randomNum.push(randomGen);
}
alert(randomNum);

// 2.

setTimeout(wait, 3000);
    function wait () 
{   document.getElementById("NumeriUtente1").style.display = 'inline'
    document.getElementById("bottone").style.display = 'inline'
}

function check()
{    
    let userNumber = parseInt(NumeroUtente1.value);
    userNum.push(userNumber);
    NumeroUtente1.value = ''
    if(randomNum.includes(userNumber) && !numeriCorretti.includes(userNumber))
    {
        numeriCorretti.push(userNumber);   
    }
    console.log(numeriCorretti);
    if(userNum.length == randomNum.length)
    {
    alert("Hai indovinato " + numeriCorretti.length + " numero/i : " + numeriCorretti);
    }
}
     

buttonVerifica.addEventListener('click', check);