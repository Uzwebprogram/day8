var fizzbuzz = Number(prompt ("FizzBuzz uchun son kiriting"))
var eltitle = document.querySelector('#title')

function FizzBuzz(shart){
    let respomnse = ""
    if (shart % 3 == 0 && shart % 5 == 0){
        respomnse = `FizzBuzz`
    }
    else if (shart % 3 == 0){
        respomnse = `Fizz`
    }
    else if ( shart % 5 == 0){
       respomnse = `Buzz`
       
    }
    else {
        respomnse = shart
    }
    eltitle.textContent = respomnse
    return respomnse
}

console.log(FizzBuzz(fizzbuzz))


// var elForm = document.querySelector('#form')
// var elinput = document.querySelector('#input')
// var elbtn = document.querySelector('#btn')

// elForm.addEventListener('submit', function(e){
//     e.preventDefault()
//     let inputvalue = elinput.value;

//     if(inputvalue % 3 == 0 && inputvalue % 5 == 0){
//         eltitle.textContent = 'FizzBuzz'
//     }
//     else if(inputvalue % 3 == 0){
//         eltitle.textContent = 'Fizz'
//     }
//     else if (inputvalue % 5 == 0 ){
//         eltitle.textContent = 'Buzz'
//     }
//     else {
//         eltitle.textContent = inputvalue
//     }

// })






