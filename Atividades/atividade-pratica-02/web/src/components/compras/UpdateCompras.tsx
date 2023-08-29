import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link, redirect, useNavigate, useParams } from "react-router-dom";

const UpdateCompra = () => {


    const [usuario_id, setUsuario_id] = useState('');
    const [endereco_id, setEndereco_id] = useState('');
    const [dataCompra, setData] = useState('');


    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        api.get(`/compras/${id}`).then(response => {
            setUsuario_id(response.data.usuario_id);
            setEndereco_id(response.data.endereco_id);
            setData(response.data.dataCompra);
        })
    }, [id]);


    const handleUpdateCompra = async (evenet: React.FormEvent<HTMLFormElement>) => {

        evenet.preventDefault();

        const data = {
            id: parseInt(String(id)),
            usuario_id: parseInt(usuario_id),
            endereco_id: parseInt(endereco_id),
            data: new Date(new Date(dataCompra.toString()).toISOString()) 
        }

        try {

            if (data.usuario_id.toString() === "" || data.endereco_id.toString() === "" || data.data.toString() === "") {
                alert('Dados incompletos. Favor inserir os campos corretamente');

                return
            }

            await api.put('/compras', data);
            alert('Compra atualizada com sucesso');
            navigate('/compras');

        } catch (error) {
            alert('Erro ao atualizar a Compra');
            console.error(error);

        }
    }

    return (

        <div>
            <h3>Cadastro de Compra: </h3>

            <form onSubmit={handleUpdateCompra}>

                <div>
                    <label htmlFor="usuario_id">ID usuario</label>
                    <input type="number"
                        name="usuario_id"
                        id="usuario_id"
                        value={usuario_id}
                        placeholder="ID da usuario"
                        onChange={e => setUsuario_id(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="endereco_id">ID endereco</label>
                    <input type="number"
                        name="endereco_id"
                        id="endereco_id"
                        value={endereco_id}
                        placeholder="ID do endereco"
                        onChange={e => setEndereco_id(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="dataCompra">Data da Compra</label>
                    <input type="date"
                        name="dataCompra"
                        id="dataCompra"
                        value={dataCompra }
                        placeholder="Data da Compra"
                        onChange={e => setData(e.target.value)}
                    />
                </div>




                <button type="submit">Atualizar</button>
                <Link to="/compras">Cancelar</Link>
                <h4> <Link to="/">Voltar</Link> </h4>

            </form>
        </div>
    );
}

export default UpdateCompra;