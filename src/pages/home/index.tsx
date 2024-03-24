import Main from "../../layout/main";
import Page from "../../layout/container";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import Navbar from "../../layout/navbar";
import Section from "../../layout/section";
import Item from "../../components/item";
import ItemCart from "../../components/item-cart";
import { useContext, useEffect } from "react";
import { Context } from "../../contexts/constext";
import { IContext } from "../../model/context";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const { data, cart, getProductCart, getTotalCart, getTotalQuantity, getQuantityProducts, removeProductCart } = useContext<IContext>(Context);

    let soma = 0;

    useEffect(() => {
        data.sort((a,b) => a.name < b.name ? 1 : -1);
    },[])

    return (
        <Page>
            <Navbar value={String(getQuantityProducts())} />
            <Header value={String(getTotalCart())} />
            <Main>
                <Section id="products">
                    {                        
                        data.map((item) => (
                                <article className="item" key={item.id}>
                                    <Item
                                        src={`/images/${item.image}`}
                                        alt={item.name}
                                        type={item.type}
                                        title={item.name}
                                        value={Number(item.value).toFixed(2)}
                                    >
                                        <button type="button" onClick={() => getProductCart(String(item.id), item, navigate)}>Comprar</button>
                                    </Item>
                                </article>
                            ))                       
                    }
                </Section>
                <Section id="cart">
                    <h3>Carrinho de Compras</h3>
                    <ul id="cart-list">
                        {cart.length > 0 ?
                            cart.map((item) =>
                            (
                                <li className="item" key={soma += item.id}>
                                    <ItemCart
                                        src={`/images/${item?.image}`}
                                        alt={item?.name}
                                        title={item?.name}
                                        value={`${Number(item?.value).toFixed(2)}`}
                                        quantity={item?.quantity}
                                        subtotal={`${Number(getTotalQuantity(item)).toFixed(2)}`}
                                    >                                        
                                        <button type="button" onClick={() => removeProductCart(item, navigate)}>x</button>
                                    </ItemCart>
                                </li>
                            ))
                            :
                            <li className="error">
                                <h4>Não há itens no carrinho!</h4>
                                <br />
                                <p>Compre um produto para adicionar ao carrinho.</p>
                            </li>
                        }
                    </ul>
                </Section>
            </Main>
            <Footer />
        </Page>
    )
}

export default Home;