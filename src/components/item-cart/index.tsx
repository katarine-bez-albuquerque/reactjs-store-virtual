import { IItemCart } from "../../model/item-cart";

const ItemCart = ({src, alt, title, value, subtotal, quantity, children }: IItemCart) => {

    return (
        <>
            <img src={src} alt={alt} />
            <section className="item-select">
                <h5>{title}</h5>
                {
                    value && (
                        <section className="item-description">                            
                            <h6>R$ {value}</h6>
                            <h6>|</h6>
                            <h6>{quantity}</h6>
                            <h6>R$ {subtotal}</h6>
                            {children}
                        </section>
                    )
                }
            </section>
        </>
    )

}

export default ItemCart;