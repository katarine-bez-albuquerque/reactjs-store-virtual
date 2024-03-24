import { ReactNode } from "react";

export interface IItemCart {
    src?: string;
    alt?: string;
    title?: string;
    value?: string;
    subtotal?: string;
    quantity?: number;
    children?: ReactNode;
}