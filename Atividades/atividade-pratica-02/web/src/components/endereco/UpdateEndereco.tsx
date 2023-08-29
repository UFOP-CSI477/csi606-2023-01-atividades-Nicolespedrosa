import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link, redirect, useNavigate, useParams } from "react-router-dom";

const UpdateEndereco = () => {


    const [nome, setNome] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade_id, setCidade_id] = useState('');

    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        api.get(`/endereco/${id}`).then(response => {
            setNome(response.data.nome);
            setRua(response.data.rua);
            setNumero(response.data.numero);
            setBairro(response.data.bairro);
            setCidade_id(response.data.cidade_id);
        })
    }, [id]);


    const handleUpdateEndereco = async (evenet: React.FormEvent<HTMLFormElement>) => {

        evenet.preventDefault();

        const data = {
            id: parseInt(String(id)),
            nome,
            rua,
            numero,
            bairro,          
            cidade_id: parseInt(cidade_id)
        }

        try {

            if(data.nome === "" || data.rua === "" || data.numero.toString() === "" || data.cidade_id.toString() === "")
            {
                alert('Dados incompletos. Favor inserir os campos corretamente');
                return
            }

            

            await api.put('/endereco', data);
            alert('Endereço atualizado com sucesso');
            navigate('/endereco');

        } catch (error) {
            alert('Erro ao atualizar o Endereço');
            console.error(error);

        }

    }

    return (

        <div>
            <h3>Cadastro de Endereço: </h3>

            <form onSubmit={handleUpdateEndereco}>

                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text"
                        name="nome"
                        id="nome"
                        value={nome}
                        placeholder="Nome do Estado"
                        onChange={e => setNome(e.target.value)} 
                    />
                </div>

                <div>
                    <label htmlFor="rua">Rua</label>
                    <input type="text"
                        name="rua"
                        id="rua"
                        value={rua}
                        placeholder="Rua"
                        onChange={e => setRua(e.target.value)}
                    />
                </div>


                <div>
                    <label htmlFor="numero">Número</label>
                    <input type="number"
                        name="numero"
                        id="numero"
                        value={numero}
                        placeholder="Número"
                        onChange={e => setNumero(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="bairro">bairro</label>
                    <input type="text"
                        name="bairro"
                        id="bairro"
                        value={bairro}
                        placeholder="bairro"
                        onChange={e => setBairro(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="cidade_id">ID da Cidade</label>
                    <input type="number"
                        name="cidade_id"
                        id="cidade_id"
                        value={cidade_id}
                        placeholder="ID da cidade"
                        onChange={e => setCidade_id(e.target.value)}
                    />
                </div>


                <button type="submit">Atualizar</button>
                <Link to="/endereco">Cancelar</Link>
                <h4> <Link to="/">Voltar</Link> </h4>

            </form>
        </div>
    );
}

export default UpdateEndereco;