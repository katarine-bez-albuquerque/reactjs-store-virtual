import { ITotal } from "../../model/total";

const Header = ({value}:ITotal) => (
    <header id="header">
        <section id="header-title">
            <p>Exemplo de Loja Virtual.</p>
            <br />
            <h1>Produtos Exemplares</h1>
        </section>        
        <section id="header-section">
            <h1>Total</h1>
            <h3>R$ {value}</h3>
        </section>
    </header>
);

export default Header;