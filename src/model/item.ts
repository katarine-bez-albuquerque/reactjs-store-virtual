import { ReactNode } from "react";

export interface IItem {
    src?: string;
    alt?: string;
    type?: string;
    title?: string;
    value?: string;
    children?: ReactNode;
}