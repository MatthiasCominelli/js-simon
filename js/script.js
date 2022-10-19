// 1. Un alert() espone 5 numeri generati casualmente.
// 2. Da li parte un timer di 30 secondi.
// 3. Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// 4. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// 1.
let NumeroUtente1 = document.getElementById('NumeriUtente1');
const buttonVerifica = document.getElementById('bottone');
let randomNum = [];
let userNum = [];




for (let i = 0 ; i < 5; i++) 
{
    let randomGen = parseInt(Math.floor(Math.random() * 10));
    console.log(randomGen);
    randomNum.push(randomGen);
    // if (randomNum.includes(randomGen)) 
    // {
    //     i += -1;
    // } 
    // else 
    // {
        
    // }
}
alert(randomNum);

// 2.

setTimeout(wait, 3000);
    function wait () 
{   
        for( i = 0; i < 5; i++) 
        { 
            let userInput = parseInt(prompt("Inserisci un numero"));

            if (randomNum.includes(userInput) && !userNum.includes(userInput)) 
            {
                userNum.push(userInput);
            }
        }
        alert("Hai indovinato " + userNum.length + " numero/i : " + userNum);
           ;
        
}


// buttonVerifica.addEventListener('click', check);