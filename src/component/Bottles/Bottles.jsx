import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart, removeFromLS} from "../../utilities/localstorage";
import Cart from "../Cart/Cart";
const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] =useState([])

    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    }, [])    

    const addToCart = bottle =>{
        const newCart = [...cart, bottle]
        setCart(newCart);
        addToLS(bottle.id);
    }

    const removeFromCart = id=>{
        const remainingcart = cart.filter(bottle => bottle.id !== id)
        setCart(remainingcart);
        removeFromLS(id);
    }

    // Load cart data form LS
    useEffect(()=>{
        if(bottles.length > 0){
            const storeCart = getStoredCart();
            const saveCart = [];
            for( const id of storeCart){
                const bottle = bottles.find(bottle =>bottle.id === id);
                if(bottle){
                    saveCart.push(bottle)
                }
            }
            console.log(saveCart);
            setCart(saveCart);
        }
    }, [bottles])

    return (
        <div>
            <h2>All Bottles Load Here : {bottles.length}</h2>
            <div>
                <Cart removeFromCart={removeFromCart} cart={cart}></Cart>
            </div>
           
           <div className="bottles">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} addToCart={addToCart}></Bottle>)
                }
           </div>
        </div>
    );
};

export default Bottles;