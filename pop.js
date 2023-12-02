let inputValue=0;

function increaseQuantity(){
    inputValue++;
    document.getElementById('input').value=inputValue;
}

function decreaseQuantity(){
    inputValue--;
    document.getElementById('input').value=inputValue;
}    

function addToCartMsg(){
    alert('Item added to cart successfully');
    //Update the cart page
}