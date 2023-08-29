import { useState } from "react";
import api from "../../services/api";
import { Link, useNavigate } from "react-router-dom";

const CreateUsuario = () => {


    const [nome, setNome] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [documento, setDocumento] = useState('');
    const [cidade_id, setCidade_id] = useState('');
    // const [tipo_id, setTipo_id] = useState('');



    const navigate = useNavigate();


    const handleNewState = async (evenet: React.FormEvent<HTMLFormElement>) => {

        evenet.preventDefault();

        const data = {
            nome,
            rua,
            numero,
            bairro,
            documento,
            cidade_id: parseInt(cidade_id),
            // tipo_id: parseInt(tipo_id)

        }

        try {
            if(data.nome === "" || data.rua === "" || data.documento === "" || data.numero.toString() === "")
            {
                alert('Dados incompletos. Favor inserir os campos corretamente');
                
                return
            }

            await api.post('/usuarios', data);
            alert('Usuario cadastrada com sucesso');
            navigate('/usuarios');

        } catch (error) {
            alert('Erro ao cadastrar uma novo usuario');
            window.location.reload();
            console.error(error);

        }

    }


    return (

        <div>
            <h3>Cadastro de Usuario: </h3>

            <form onSubmit={handleNewState}>

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
                    <label htmlFor="bairro">Bairro</label>
                    <input type="text"
                        name="bairro"
                        id="bairro"
                        value={bairro}
                        placeholder="bairro"
                        onChange={e => setBairro(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="documento">Documento</label>
                    <input type="text"
                        name="documento"
                        id="documento"
                        value={documento}
                        placeholder="Documento"
                        onChange={e => setDocumento(e.target.value)}
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

                {/* <div>
                    <label htmlFor="tipo_id">ID do Tipo</label>
                    <input type="number"
                        name="tipo_id"
                        id="tipo_id"
                        value={tipo_id}
                        placeholder="ID do Tipo"
                        onChange={e => setTipo_id(e.target.value)}
                    />
                </div> */}

                <button type="submit">Cadastrar</button>
                <button type="submit">Limpar</button>
                <h4><Link to="/usuarios">Voltar</Link></h4>

            </form>
        </div>
    );
}

export default CreateUsuario;