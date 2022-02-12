const amtBtns = document.querySelectorAll(".product__checkout button"),
        cartQty = document.querySelector('.qty');

console.log(amtBtns);

let amount = 0;

function handleCartAmt(e) {

    console.log(e.currentTarget.id);

    // determine increase or decrease
    if(e.currentTarget.id === 'decrease-qty'){

        amount === 0 ? "" : amount--;
        
        
        
    } else {

        amount++;
        
    }

    cartQty.textContent = amount;

}

amtBtns.forEach(button => button.addEventListener('click', handleCartAmt));