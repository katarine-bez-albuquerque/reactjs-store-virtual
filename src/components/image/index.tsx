import { IImage } from "../../model/image";

const Image  = ({src,alt,title}:IImage) => (
    <img src={src} alt={alt} title={title} />
);

export default Image;