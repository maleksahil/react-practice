import { BrowserRouter,Routes,Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login"
import Reg from "./pages/Register"
import Home from "./pages/Home"
import Addpost from "./pages/Addpost";
import Viewpost from "./pages/Viewpost";
import Editpost from "./pages/Editpost";
function App() {
  return (
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Reg/>}/>
          <Route path="/addpost" element={<Addpost/>}/>
          <Route path="/viewpost" element={<Viewpost/>}/>
          <Route path="/editpost" element={<Editpost/>}/>
      </Routes>
     </BrowserRouter>
  )
}

export default App
