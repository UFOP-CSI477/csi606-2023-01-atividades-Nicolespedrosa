import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import { CidadeInterface } from "../cidades/ListCidades";


const CreateEndereco = () => {


    const [nome, setNome] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setbairro] = useState('');
    const [cidade_id, setCidade_id] = useState(0);



    const navigate = useNavigate();

    const [cidades, setCidades] = useState<CidadeInterface[]>([]);

    useEffect(() => {

        api.get('/cidades')
        .then(response => {
            console.log(response.data);
            setCidades(response.data);
        })

    })


    const handleEndereco = async (evenet: React.FormEvent<HTMLFormElement>) => {

        evenet.preventDefault();

        const data = {
            nome,
            rua,
            numero,
            bairro,
            cidade_id

        }

        try {
            if(data.nome === "" || data.rua === "" || data.numero.toString() === "" || data.cidade_id.toString() === "")
            {
                alert('Dados incompletos. Favor inserir os campos corretamente');
                
                return
            }

            await api.post('/endereco', data);
            alert('Endereço cadastrado com sucesso');
            navigate('/endereco');

        } catch (error) {
            alert('Erro ao cadastrar um novo Endereço');
            window.location.reload();
            console.error(error);

        }
    }

    return (

        <div>
            <h3>Cadastro do endereço: </h3>

            <form onSubmit={handleEndereco}>

                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text"
                        name="nome"
                        id="nome"
                        value={nome}
                        placeholder="Nome do endereço"
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
                        onChange={e => setbairro(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="cidade_id">Cidade: </label>
                    <select
                        name="cidade_id"
                        id="cidade_id"
                        value={cidade_id}
                        onChange={e =>
                            setCidade_id(parseInt(e.target.value))}>
                        <option
                            value="0"
                            selected>Selecione</option>
                        {
                            cidades.map(cidades => (
                                <option
                                    value={cidades.id}>
                                    {cidades.nome}
                                </option>
                            ))
                        }
                    </select>
                </div>


                <button type="submit">Cadastrar</button>
                <button type="submit">Limpar</button>
                <h4><Link to="/endereco">Voltar</Link></h4>

            </form>
        </div>
    );
}

export default CreateEndereco;