import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import api from "../../services/api"

export interface UsuarioInterface { //typescript -> tipando os itens retornados da request na API
    id: number;
    nome: string;
    rua: string;
    numero: number;
    bairro: string;
    documento: string;
    cidade_id: number;
    // tipo_id: number;
    created_at: string;
    updated_at: string;
}


const ListUsuarios = () => {

    const handleDeleteUsuario = async (id: number) => {

        if(!window.confirm("Confirma a exclusão do Usuario?")){
            return
        }
    
        const data = {
            id
        }
    
        try {
            await api.delete('/usuarios', 
            {
                data: {
                    id
                }
            });

            alert("Usuario excluído com sucesso!");
    
            //Atualizar?
            setUsuarios(usuarios.filter(estado => 
                estado.id != id) );
            
        } catch (error) {
            alert("Erro na exclusão do usuario!");
            console.error(error);
        }
    }

    const [usuarios, setUsuarios] = useState<UsuarioInterface[]>([]);

    useEffect(() => {

        api.get('/usuarios')
        .then(response => {
            console.log(response.data);
            setUsuarios(response.data);
        })

    }, [])

    return (

        <div>
            <h2>Lista de Usuarios</h2>

            <table>
                <thead>
                    <tr>
                        <h4>Id</h4>
                        <h4>Nome</h4>
                        <h4>Rua</h4>
                        <h4>Número</h4>
                        <h4>Bairro</h4>
                        <h4>Documento</h4>
                        <h4>Criado</h4>
                        <h4>Alterado</h4>

                        <h4>Atualizar</h4>
                        <h4>Excluir</h4>
                    </tr>
                </thead>

                <tbody>
                    {usuarios.map(usuario => (
                        <tr key={usuario.id}>
                            <h4>{usuario.id}</h4>
                            <h4>{usuario.nome}</h4>
                            <h4>{usuario.rua}</h4>
                            <h4>{usuario.numero}</h4>
                            <h4>{usuario.bairro}</h4>
                            <h4>{usuario.documento}</h4>
                            <h4>{usuario.created_at}</h4>
                            <h4>{usuario.updated_at}</h4>

                            <h4><Link to={`/usuarios/${usuario.id}`}>Atualizar</Link></h4>
                            <h4><button onClick={() => {handleDeleteUsuario(usuario.id)}}>Excluir</button></h4>
                        </tr>
                    ))
                    }
                </tbody>
            </table>

            <h4><Link to="/usuarios/novo">Cadastrar Usuario</Link></h4>
            <h4><Link to="/">Voltar</Link></h4>
            
        </div>
    )


}

export default ListUsuarios;