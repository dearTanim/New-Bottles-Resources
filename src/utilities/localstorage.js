
const getStoredCart = () =>{
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    return [];
}

const savedCartToLS = cart =>{
    const cartString = JSON.stringify(cart);
    localStorage.setItem('cart', cartString);
}

const addToLS = id =>{
    const cart = getStoredCart();
    cart.push(id);
    savedCartToLS(cart);
};

const removeFromLS = id =>{
    const cart = getStoredCart();
    const remaining = cart.filter(idx => idx !== id);
    savedCartToLS(remaining);
}

export {addToLS, getStoredCart, removeFromLS};