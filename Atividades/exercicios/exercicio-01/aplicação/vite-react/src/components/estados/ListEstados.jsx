import { useState, useEffect } from "react";
import api from "../../services/api.js";


export default function ListEstados () {


    // Armazenar a lista de estados (UF)
    const [ estados, setEstados ] = useState ([]);

    const getEstados = async () => {

        const response = await api.get('/estados');

        console.log(response);
        setEstados(response.data);

    }

    useEffect(() => {
        getEstados();
    },[]);

    return (
        <>
            <h2>Lista de estados</h2>


            { estados.length }
            <ul>
                {
                    estados.map(estado =>(
                        <li key = { estado.id}> { estado.nome }</li>
                        
                    ))
                }

            </ul>
        </>
    );
}

// export default List Estados;