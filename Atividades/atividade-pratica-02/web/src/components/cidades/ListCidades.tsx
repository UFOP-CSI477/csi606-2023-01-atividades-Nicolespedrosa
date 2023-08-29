import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import api from "../../services/api"
import { EstadoInterface } from "../estados/ListEstados"

export interface CidadeInterface { //typescript -> tipando os itens retornados da request na API
    id: number;
    nome: string;
    estado_id: number;
    created_at: string;
    updated_at: string;
    estado: EstadoInterface;
}



//componente
const ListCidades = () => {

    const handleDeleteCidade = async (id: number) => {

        //window.alert(id); //mostra o id na tela para testes
        if(!window.confirm("Confirma a exclusão da Cidade?")){
            return
        }
    
        const data = {
            id
        }
    
        try {
            await api.delete('/cidades', 
            {
                data: {
                    id
                }
            });
    
            //Atualizar?
            setCidades(cidades.filter(cidades => 
                cidades.id != id) );
            
        } catch (error) {
            alert("Erro na exclusão da Cidade!");
            console.error(error);
        }
    }

    const [cidades, setCidades] = useState<CidadeInterface[]>([]);

    useEffect(() => {

        api.get('/cidades')
        .then(response => {
            console.log(response.data);
            setCidades(response.data);
        })

    })




    return (

        <div>
            <h2>Lista de Cidades</h2>

            <table>
                <thead>
                    <tr>
                        <h4>Id</h4>
                        <h4>Nome</h4>
                        <h4>Sigla</h4>
                        <h4>Criado</h4>
                        <h4>Alterado</h4>
                        <h4>Atualizar</h4>
                        <h4>Excluir</h4>
                    </tr>
                </thead>

                <tbody>
                    {cidades.map(cidade => (
                        <tr key={cidade.id}>
                            <h4>{cidade.id}</h4>
                            <h4>{cidade.nome}</h4>
                            <h4>{cidade.estado.sigla}</h4>
                            <h4>{cidade.created_at}</h4>
                            <h4>{cidade.updated_at}</h4>

                            <h4><Link to={`/cidades/${cidade.id}`}>Atualizar</Link></h4>
                            <h4><button onClick={() => {handleDeleteCidade(cidade.id)}}>Excluir</button></h4>
                        </tr>
                    ))
                    }
                </tbody>
            </table>

            <h4><Link to="/cidades/novo">Cadastrar Cidade</Link></h4>

            <h4><Link to="/">Voltar</Link></h4>
            

        </div>
    )


}

export default ListCidades;