import './Bottle.css'
const Bottle = ({bottle, addToCart}) => {
    const{ name, price, img, stock} = bottle;
    return (
        <div>
            <div className="bottle">
                <h3>{name}</h3>
                <img src={img} alt="" />
                <h5>Price $ {price}</h5>
                <p>Stock : {stock}</p>
                <button onClick={()=>addToCart(bottle)}>Buy Now</button>
            </div>
        </div>
    );
};

export default Bottle;