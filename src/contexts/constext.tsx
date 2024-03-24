import { createContext, useState } from "react";
import { Layoyt } from "../model/layout";
import { IContext } from "../model/context";
import { IProduct } from "../model/product";
import ProductJson from '../data/produtos.json';
import { NavigateFunction } from "react-router-dom";
// Valor Inicial
const initialValue = {
    data: [],
    cart: [],
    getProductCart: () => {},
    getTotalCart: () => {},
    getTotalQuantity: () => {},
    getQuantityProducts: () => {},
    removeProductCart: () => {},
}
// Context Iniciado
export const Context = createContext<IContext>(initialValue);
// Context Provider 
export const HomeProviderContext = ({ children }: Layoyt) => {
    // Arquivo JSON
    const product = ProductJson.data.sort((a,b) => a.name < b.name ? 1 : -1);
    // Lista de Produtos
    const [data, setData] = useState<IProduct[]>(product);
    // Lista do Carrinho de Produtos 
    const [cart, setCart] = useState<IProduct[]>(initialValue.cart);
    // Obter carrinho de produtos
    const getProductCart = (id: string, product: IProduct, navigate: NavigateFunction): void => {
        navigate(`/${String(id)}`);
        data.filter(item => {
            Number(id) === item.id && setCart([...cart, item]);
        });
        setData(data.filter(item => item !== product));        
    }
    // Remove Produto do Carrinho
    const removeProductCart = (product: IProduct, navigate: NavigateFunction): void => {
        setCart(cart.filter(item =>item !== product));
        setData([...data, product]);
        navigate('/');
    }
    // Obter a quantidade total
    const getTotalQuantity = (product: IProduct): string => {
        let calc = 0;
        calc = product.value * product.quantity;
        return calc.toFixed(2);
    }
    // Obter o total do compras do carrinho
    const getTotalCart = (): string => {
        let soma = 0;
        let total = 0;
        for (let product of cart) {
            soma += product.value * product.quantity;
        }
        total += soma;
        return total.toFixed(2);
    }
    // Obter a quantidade total de produtos selecionados
    const getQuantityProducts = (): number => {
        let soma = 0;
        for (let product of cart) {
            soma += product.quantity;
        }
        return soma;
    }
    // Retorna o context com as variáveis e funções 
    return (
        <Context.Provider value={{ data, cart, getProductCart, getTotalCart, getTotalQuantity, getQuantityProducts, removeProductCart }}>
            {children}
        </Context.Provider>
    )
}