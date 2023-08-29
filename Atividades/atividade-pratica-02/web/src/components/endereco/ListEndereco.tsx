import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import api from "../../services/api"
import { CidadeInterface } from "../cidades/ListCidades";

export interface EnderecoInterface { //typescript -> tipando os itens retornados da request na API
    id: number;
    nome: string;
    rua: string;
    numero: number;
    bairro: string;
    cidade_id: number;

    cidade: CidadeInterface;

}


const ListEndereco = () => {

    const handleDeleteUsuario = async (id: number) => {

        if (!window.confirm("Confirma a exclusão do Endereço?")) {
            return
        }

        const data = {
            id
        }

        try {
            await api.delete('/endereco',
                {
                    data: {
                        id
                    }
                });

            alert("Endereço excluído com sucesso!");

            setEndereco(endereco.filter(endereco =>
                endereco.id != id));

        } catch (error) {
            alert("Erro na exclusão do Endereço!");
            console.error(error);
        }
    }

    const [endereco, setEndereco] = useState<EnderecoInterface[]>([]);

    useEffect(() => {

        api.get('/endereco')
            .then(response => {
                console.log(response.data);
                setEndereco(response.data);
            })

    }, [])




    return (

        <div>
            <h2>Lista de Endereço: </h2>

            <table>
                <thead>
                    <tr>
                        <h4>Id</h4>
                        <h4>Nome</h4>
                        <h4>Rua</h4>
                        <h4>Número</h4>
                        <h4>Bairro</h4>
                        <h4>Cidade</h4>
                        <h4>Atualizar</h4>
                        <h4>Excluir</h4>
                    </tr>
                </thead>

                <tbody>
                    {endereco.map(endereco => (
                        <tr key={endereco.id}>
                            <h4>{endereco.nome}</h4>
                            <h4>{endereco.rua}</h4>
                            <h4>{endereco.numero}</h4>
                            <h4>{endereco.bairro}</h4>
                            <h4>{endereco.cidade.nome}</h4>
                            <h4>{endereco.id}</h4>

                            <h4><Link to={`/endereco/${endereco.id}`}>Atualizar</Link></h4>
                            <h4><button onClick={() => { handleDeleteUsuario(endereco.id) }}>Excluir</button></h4>
                        </tr>
                    ))
                    }
                </tbody>
            </table>

            <h4><Link to="/endereco/novo">Cadastrar Endereço</Link></h4>
            <h4><Link to="/">Voltar</Link></h4>


        </div>
    )

}

export default ListEndereco;