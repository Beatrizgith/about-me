import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./componentes/Menu";
import NaoEncontrada from "paginas/NaoEncontrada";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/SobreMim";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";

function AppRoutes() {
  return (
    <BrowserRouter>
    <Menu />
    

      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
        <Route path="/" element={<Inicio/>}/>
        <Route path="sobremim" element={<SobreMim/>}/>
        <Route path="posts/:id" element={<Post />}/>
        </Route>

        {/* Na rota "/", a estrutura a ser renderizada é:
        <PaginaPadrao>
        <Inicio/>
        </PaginaPadrao>
        */}

        
        {/* Na rota "/", a estrutura a ser renderizada é:
        <PaginaPadrao>
        <SobreMim />
        </PaginaPadrao>
        */}
        
        
        <Route path="*" element={<NaoEncontrada/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
