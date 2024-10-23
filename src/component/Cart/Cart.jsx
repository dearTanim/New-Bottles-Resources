
const Cart = ({cart, removeFromCart}) => {
    return (
        <div>
            <h2>Cart : {cart.length}</h2>
            <div className="cart-box">
                {
                    cart.map(bottle => <div key={bottle.id}>
                        <img src={bottle.img}></img><br></br>
                        <button onClick={()=>removeFromCart(bottle.id)}>Remove</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Cart;