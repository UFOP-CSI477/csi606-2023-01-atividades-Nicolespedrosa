import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link, redirect, useNavigate, useParams } from "react-router-dom";

const UpdateProduto = () => {


    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');


    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        api.get(`/produtos/${id}`).then(response => {
            setDescricao(response.data.descricao);
            setValor(response.data.valor);
        })
    }, [id]);


    const handleUpdateProduto = async (evenet: React.FormEvent<HTMLFormElement>) => {

        evenet.preventDefault();

        const data = {
            id: parseInt(String(id)),
            descricao,
            valor
        }

        try {

            if (data.descricao === "" || data.valor === "") {
                alert("Dados incompletos. Favor inserir os dados corretamente.");
            }

            await api.put('/produtos', data);
            alert('Produto atualizado com sucesso');
            navigate('/produtos');

        } catch (error) {
            alert('Erro ao atualizar o produto');
            console.error(error);

        }

    }


    return (

        <div>
            <h3>Cadastro do produto: </h3>

            <form onSubmit={handleUpdateProduto}>

                <div>
                    <label htmlFor="descricao">descricao</label>
                    <input type="text"
                        name="descricao"
                        id="descricao"
                        maxLength={2}
                        value={descricao}
                        placeholder="produto"
                        onChange={e => setDescricao(e.target.value)} // pega o valor do produto
                    />
                </div>

                <div>
                    <label htmlFor="valor">valor</label>
                    <input type="text"
                        name="valor"
                        id="valor"
                        value={valor}
                        placeholder="valor"
                        onChange={e => setValor(e.target.value)}
                    />
                </div>

                <button type="submit">Atualizar</button>
                <Link to="/estados">Cancelar</Link>
                <h4> <Link to="/">Voltar</Link> </h4>

            </form>
        </div>
    );
}

export default UpdateProduto;