import { IItem } from "../../model/item";

const Item = ({src,alt,type,title,value,children}:IItem) => (
    <>
        <img src={src} alt={alt}/>
        <h6>{type}</h6>
        <h5>{title}</h5>
        <h6>R$ {value}</h6>
        {children}
    </>
)

export default Item;