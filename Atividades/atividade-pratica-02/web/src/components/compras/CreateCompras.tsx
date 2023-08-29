import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import { UsuarioInterface } from "../usuarios/ListUsuario";
import { EnderecoInterface } from "../endereco/ListEndereco";

const CreateCompras = () => {

    const [usuario_id, setUsuario_id] = useState(0);
    const [endereco_id, setEndereco_id] = useState(0);
    const [dataCompras, setData] = useState('');

    const [usuarios, setUsuario] = useState<UsuarioInterface[]>([]);

    useEffect(() => {

        api.get('/usuarios')
            .then(response => {
                console.log(response.data);
                setUsuario(response.data);
            })

    }, [])

    const [endereco, setEndereco] = useState<EnderecoInterface[]>([]);

    useEffect(() => {

        api.get('/endereco')
            .then(response => {
                console.log(response.data);
                setEndereco(response.data);
            })

    }, [])


    const navigate = useNavigate();


    const handleCompras = async (evenet: React.FormEvent<HTMLFormElement>) => {

        evenet.preventDefault();

        const data = {
            usuario_id: parseInt(usuario_id.toString()),
            endereco_id: parseInt(endereco_id.toString()),
            data: new Date(new Date(dataCompras.toString()).toISOString()) //TODO - Verificar como trabalhar com data no padrão: 2023-03-19T05:55:51.141Z
        }


        try {
            if (data.usuario_id.toString() === "" || data.endereco_id.toString() === "" || data.data.toString() === "") {
                alert('Dados incompletos. Favor inserir os campos corretamente');

                return
            }

            await api.post('/compras', data);
            alert('Compra cadastrada com sucesso');
            navigate('/compras');

        } catch (error) {
            alert('Erro ao cadastrar uma nova Compra');
            window.location.reload();
            console.error(error);

        }

    }

    return (

        <div>
            <h3>Cadastro de Compra: </h3>

            <form onSubmit={handleCompras}>

                <div>
                    <label htmlFor="usuario_id">Usuario: </label>
                    <select
                        name="usuario_id"
                        id="usuario_id"
                        value={usuario_id}
                        onChange={e =>
                            setUsuario_id(parseInt(e.target.value))}>
                        <option
                            value="0"
                            selected>Selecione</option>
                        {
                            usuarios.map(usuarios => (
                                <option
                                    value={usuarios.id}>
                                    {usuarios.nome}
                                </option>
                            ))
                        }
                    </select>
                </div>


                <div>
                    <label htmlFor="endereco_id">Endereço: </label>
                    <select
                        name="endereco_id"
                        id="endereco_id"
                        value={endereco_id}
                        onChange={e =>
                            setEndereco_id(parseInt(e.target.value))}>
                        <option
                            value="0"
                            selected>Selecione</option>
                        {
                            endereco.map(endereco => (
                                <option
                                    value={endereco.id}>
                                    {endereco.nome}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <div>
                    <label htmlFor="dataCompras">Data da Compra</label>
                    <input type="date"
                        name="dataCompras"
                        id="data"
                        value={dataCompras}
                        placeholder="Data da Compra"
                        onChange={e => setData(e.target.value)}
                    />
                </div>


                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>
                <li><Link to="/compras">Voltar</Link></li>

            </form>
        </div>
    );
}

// function formatarData(e: { target: { value: string; }; }){

//     var v=e.target.value.replace(/\D/g,"");

//     v=v.replace(/(\d{2})(\d)/,"$1/$2") 

//     v=v.replace(/(\d{2})(\d)/,"$1/$2") 

//     e.target.value = v;

//     }

export default CreateCompras;