import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import api from "../../services/api"

export interface EstadoInterface { //typescript -> tipando os itens retornados da request na API
    id: number;
    nome: string;
    sigla: string;
    created_at: string;
    updated_at: string;
}



//componente
const ListEstados = () => {

    const handleSDeleteEstado = async (id: number) => {

        //window.alert(id); //mostra o id na tela para testes
        if(!window.confirm("Confirma a exclusão do Estado?")){
            return
        }
    
        const data = {
            id
        }
    
        try {
            await api.delete('/estados', 
            {
                data: {
                    id
                }
            });

            alert("Estado excluído com sucesso!");
    
            //Atualizar?
            setEstados(estados.filter(estado => 
                estado.id != id) );
            
        } catch (error) {
            alert("Erro na exclusão do Estado!");
            console.error(error);
        }
    }

    const [estados, setEstados] = useState<EstadoInterface[]>([]);

    useEffect(() => {

        api.get('/estados')
        .then(response => {
            console.log(response.data);
            setEstados(response.data);
        })

    }, [])




    return (

        <div>
            <h2>Lista de Estados</h2>

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
                    {estados.map(estado => (
                        <tr key={estado.id}>
                            <h4>{estado.id}</h4>
                            <h4>{estado.nome}</h4>
                            <h4>{estado.sigla}</h4>
                            <h4>{estado.created_at}</h4>
                            <h4>{estado.updated_at}</h4>

                            <h4><Link to={`/estados/${estado.id}`}>Atualizar</Link></h4>
                            <h4><button onClick={() => {handleSDeleteEstado(estado.id)}}>Excluir</button></h4>
                        </tr>
                    ))
                    }
                </tbody>
            </table>

            <h4><Link to="/estados/novo">Cadastrar Estado</Link></h4>
            <h4><Link to="/">Voltar</Link></h4>
            

        </div>
    )


}

export default ListEstados;