import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import api from "../../services/api"
import { EnderecoInterface } from "../endereco/ListEndereco";
import { UsuarioInterface } from "../usuarios/ListUsuario";

export interface compraInterface { 
    id: number;
    Usuario_id: number;
    Endereco_id: number;
    data: string;

    Usuario: UsuarioInterface;
    enderecos: EnderecoInterface;

}


const ListCompras = () => {

    const handleDeleteCompra = async (id: number) => {

        if (!window.confirm("Confirma a exclusão da compra?")) {
            return
        }

        const data = {
            id
        }

        try {
            await api.delete('/compras',
                {
                    data: {
                        id
                    }
                });

            alert("compra excluída com sucesso!");

            setcompras(compra.filter(compra =>
                compra.id != id));

        } catch (error) {
            alert("Erro na exclusão da compra!");
            console.error(error);
        }
    }

    const [compra, setcompras] = useState<compraInterface[]>([]);

    useEffect(() => {

        api.get('/compras')
            .then(response => {
                console.log(response.data);
                setcompras(response.data);
            })

    }, [])




    return (

        <div>
            <h2>Lista de compras: </h2>

            <table>
                <thead>
                    <tr>
                        <h4>Id</h4>
                        <h4>ID Usuario</h4>
                        <h4>ID Endereco</h4>
                        <h4>Data</h4>

                        <h4>Atualizar</h4>
                        <h4>Excluir</h4>
                    </tr>
                </thead>

                <tbody>
                    {compra.map(compra => (
                        <tr key={compra.id}>
                            <h4>{compra.id}</h4>
                            <h4>{compra.Usuario.nome}</h4>
                            <h4>{compra.enderecos.nome}</h4>
                            <h4>{compra.data}</h4>

                            <h4><Link to={`/compras/${compra.id}`}>Atualizar</Link></h4>
                            <h4><button onClick={() => { handleDeleteCompra(compra.id) }}>Excluir</button></h4>
                        </tr>
                    ))
                    }
                </tbody>
            </table>

            <h4><Link to="/compras/novo">Cadastrar compra</Link></h4>
            <h4><Link to="/">Voltar</Link></h4>


        </div>
    )


}

export default ListCompras;