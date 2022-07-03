
// get elements for changing the amount
const amtBtns = document.querySelectorAll(".product__checkout button"),
        cartQty = document.querySelector('.qty');

// get the elements for showing the shopping cart
const cartBtn = document.querySelector('#cartBtn'),
        showCart = document.querySelector('.cart-container');
    
function toggleShoppingCart(e) {

    showCart.classList.toggle('show-cart');
    

}

let amount = 0;

// handle the increase and decrease when buttons are clicked
function handleCartAmt(e) {

    // if the decrease button is clicked
    if(e.currentTarget.id === 'decrease-qty'){

        // check if the amount is 0 and if it is, do nothing. Or -1 from the amount.
        amount === 0 ? "" : amount--;
       
    } else {

        // other option, increase by + 1
        amount++;
        
    }

    cartQty.textContent = amount;

}

// add event listener for increase/decrease
amtBtns.forEach(button => button.addEventListener('click', handleCartAmt));


cartBtn.addEventListener('click', (e) => {

    e.currentTarget === e.target && toggleShoppingCart();

})