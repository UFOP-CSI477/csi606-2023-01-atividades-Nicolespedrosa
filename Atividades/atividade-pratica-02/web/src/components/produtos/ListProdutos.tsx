import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import api from "../../services/api"

interface ProdutoInterface { 
    id: number;
    descricao: string;
    valor: string;
    created_at: string;
    updated_at: string;
}

    const ListProduto = () => {

        const handleProduto = async (id: number) => {
    
            if(!window.confirm("Confirma a exclusão do produto?")){
                return
            }
        
            const data = {
                id
            }
        
            try {
                await api.delete('/produtos', 
                {
                    data: {
                        id
                    }
                });
    
                alert("Produto excluído com sucesso!");
        
                //Atualizar?
                setProduto(produto.filter(produto => 
                    produto.id != id) );
                
            } catch (error) {
                alert("Erro na exclusão do produto!");
                console.error(error);
            }
        }
    
        const [produto, setProduto] = useState<ProdutoInterface[]>([]);

        useEffect(() => {
    
            api.get('/produtos')
            .then(response => {
                console.log(response.data);
                setProduto(response.data);
            })
    
        }, [])




    return (

        <div>
            <h2>Lista de produtos</h2>

            <table>
                <thead>
                    <tr>
                        <h4>Id</h4>
                        <h4>descricao</h4>
                        <h4>valor</h4>
                        <h4>Criado</h4>
                        <h4>Alterado</h4>
                    </tr>
                </thead>

                <tbody>
                    {produto.map(produto => (
                        <tr key={produto.id}>
                            <h4>{produto.id}</h4>
                            <h4>{produto.descricao}</h4>
                            <h4>{produto.valor}</h4>
                            <h4>{produto.created_at}</h4>
                            <h4>{produto.updated_at}</h4>

                            <h4><Link to={`/produtos/${produto.id}`}>Atualizar</Link></h4>
                            <h4><button onClick={() => {handleProduto(produto.id)}}>Excluir</button></h4>
                        </tr>
                    ))
                    }
                </tbody>
            </table>

            <h4><Link to="/produtos/novo">Cadastrar produto</Link></h4>
            <h4><Link to="/">Voltar</Link></h4>
        </div>
    )
}

export default ListProduto;