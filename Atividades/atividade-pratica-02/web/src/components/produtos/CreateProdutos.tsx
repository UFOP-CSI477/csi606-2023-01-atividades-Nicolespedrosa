import { useState } from "react";
import api from "../../services/api";
import { Link, useNavigate } from "react-router-dom";

const CreateProdutos = () => {


    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');

    const navigate = useNavigate();


    const handleNewState = async (evenet: React.FormEvent<HTMLFormElement>) => {

        evenet.preventDefault();

        const data = {
            descricao,
            valor
        }

        try {

            if(data.descricao === "" || data.valor === "" )
            {
                alert("Dados incompletos. Favor inserir os dados corretamente.");
            }

            await api.post('/produtos', data);
            alert('Produto inserido com sucesso');
            navigate('/produtos');

        } catch (error) {
            alert('Erro ao cadastrar o produto');
            console.error(error);

        }
    }

    return (

        <div>
            <h3>Cadastro do Produto: {descricao} - {valor}</h3>

            <form onSubmit={handleNewState}>

                <div>
                    <label htmlFor="descricao">Descrição</label>
                    <input type="text"
                        name="descricao"
                        id="descricao"
                        value={descricao}
                        placeholder="Produto"
                        onChange={e => setDescricao(e.target.value)} // pega o valor do produto
                    />
                </div>

                <div>
                    <label htmlFor="valor">Valor</label>
                    <input type="text"
                        name="valor"
                        id="valor"
                        value={valor}
                        placeholder="Valor"
                        onChange={e => setValor(e.target.value)}
                    />
                </div>
                
                <button type="submit">Cadastrar</button>
                <button type="submit">Limpar</button>
                <h4><Link to="/produtos">Voltar</Link></h4>

            </form>
        </div>
    );
}

export default CreateProdutos;