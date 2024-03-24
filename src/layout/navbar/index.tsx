import Image from "../../components/image";
import Link from "../../components/link";
import { ITotal } from "../../model/total";

const Navbar = ({value}:ITotal) => (
    <nav id="nav">
        <ul>
            <li>
                <Link href="/">
                    <Image src="/images/store.svg" alt="Store - Loja Virtual" />
                </Link>                
            </li>
            <li>
                <span>{value}</span> Produtos
                <Image src="/images/cart.svg" alt="Carrinho" />
            </li>
            <li>                
                <Link href="https://www.linkedin.com/in/katarine-albuquerque/">
                    <Image src="/images/linkedin.svg" alt="Linkedin" title="Linkedin"/>
                </Link>
                <Link href="https://github.com/katarine-bez-albuquerque?tab=repositories">
                    <Image src="/images/github.svg" alt="Github" title="Github"/>
                </Link>
            </li>
        </ul>
    </nav>
);

export default Navbar;