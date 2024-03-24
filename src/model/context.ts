import { IProduct } from "./product";
import { NavigateFunction } from "react-router-dom";

export interface IContext {
    data: IProduct[];
    cart: IProduct[],
    getProductCart: (id: string,  product: IProduct, navigate: NavigateFunction) => void;    
    getTotalCart: () => void;
    getTotalQuantity: (product: IProduct) => void;
    getQuantityProducts: () => void;
    removeProductCart: (product: IProduct, navigate: NavigateFunction) => void;
}