//convenção do React é criar todos os componentes iniciando com letra Maiúscula

import './menu.css'

import { Link } from 'react-router-dom';

const Menu = () => { //sintaxe de arrow function



    return ( //encapsular múltiplas tags em uma única div ou em uma tag vazia (<>)
        <>
            <h2>Menu</h2>
            <ul>
                {/* <li><Link to="/">Home</Link></li> */}
                <h4><Link to="/estados">Estados</Link></h4>
                <h4><Link to="/cidades">Cidades</Link></h4>
                {/* <li><Link to="/pessoas">Pessoas</Link></li> */}
                <h4><Link to="/produtos">Produtos</Link></h4>
                <h4><Link to="/endereco">Endereço</Link></h4>
                <h4><Link to="/compras">Compras</Link></h4>

                {/* <li><Link to="/unidades">Unidades</Link></li> */}
            </ul>
        </>

    );

}

export default Menu;