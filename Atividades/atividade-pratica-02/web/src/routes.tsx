import App from "./App"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ListEstados from "./components/estados/ListEstados"
import CreateEstado from "./components/estados/CreateEstado"
import UpdateEstado from "./components/estados/UpdateEstado"
import ListProdutos from "./components/produtos/ListProdutos"
import CreateProdutos from "./components/produtos/CreateProdutos"
import ListCidades from "./components/cidades/ListCidades"
import CreateCidade from "./components/cidades/CreateCidade"
import ListUsuario from "./components/usuarios/ListUsuario"
import CreateUsuario from "./components/usuarios/CreateUsuario"
import UpdateUsuario from "./components/usuarios/UpdateUsuario"
import UpdateProdutos from "./components/produtos/UpdateProdutos"
import ListEndereco from "./components/endereco/ListEndereco"
import CreateEndereco from "./components/endereco/CreateEndereco"
import UpdateEndereco from "./components/endereco/UpdateEndereco"
import ListCompras from "./components/compras/ListCompras"
import CreateCompras from "./components/compras/CreateCompras"
import UpdateCompras from "./components/compras/UpdateCompras"
import UpdateCidades from "./components/cidades/UpdateCidades"


const AppRoutes = () => {

return (

            <BrowserRouter>
                <Routes>
                    <Route path="/" element= { <App /> } />

                    <Route path="/estados" element= {<ListEstados/>} />
                    <Route path="/estados/novo" element= {<CreateEstado/>} />
                    <Route path="/estados/:id" element= {<UpdateEstado/>} />


                    <Route path="/produtos" element= {<ListProdutos/>} />
                    <Route path="/produtos/novo" element= {<CreateProdutos/>} />
                    <Route path="/produtos/:id" element= {<UpdateProdutos/>} />


                    <Route path="/cidades" element= {<ListCidades/>} />
                    <Route path="/cidades/novo" element= {<CreateCidade/>} />
                    <Route path="/cidades/:id" element= {<UpdateCidades/>} />

                    <Route path="/usuarios" element={<ListUsuario/>}></Route>
                    <Route path="/usuarios/novo" element= {<CreateUsuario/>} />
                    <Route path="/usuarios/:id" element= {<UpdateUsuario/>} />

                    <Route path="/endereco" element={<ListEndereco/>}></Route>
                    <Route path="/endereco/novo" element={<CreateEndereco/>}></Route>
                    <Route path="/endereco/:id" element={<UpdateEndereco/>}></Route>


                    <Route path="/compras" element={<ListCompras/>}></Route>
                    <Route path="/compras/novo" element={<CreateCompras/>}></Route>
                    <Route path="/compras/:id" element={<UpdateCompras/>}></Route>               

                </Routes>
            </BrowserRouter>
        )
}

export default AppRoutes;