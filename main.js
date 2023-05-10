// Cambio de cantidad de articulos

let minusBtn = document.querySelector('.input__minus')
let plusBtn = document.querySelector('.input__plus')
let userInput = document.querySelector('.input__number')

let userInputNumber = 0

plusBtn.addEventListener('click', ()=> {
    userInputNumber++
    userInput.value = userInputNumber;
    console.log(userInputNumber)
});

minusBtn.addEventListener('click', ()=> {
    userInputNumber--
    if(userInputNumber <=0){
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
    console.log(userInputNumber)
});

// Agregar el total de los productos al carrito

const addToCartBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart--notification');


addToCartBtn.addEventListener('click', ()=> {
    
    let lastValue = parseInt (cartNotification.innertext);
    console.log(lastValue);

    cartNotification.innertext = userInputNumber;
    cartNotification.style.display = 'block';
});