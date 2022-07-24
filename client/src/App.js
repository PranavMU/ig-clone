
import './App.css';
import Land from "./component/landingpage";
import Postview from "./component/postview";
import Form from "./component/form";
import {Route,Routes,BrowserRouter} from "react-router-dom"
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Land/>}></Route>
      <Route path="/postview" element={<Postview/>}></Route>
      <Route path="/form" element={<Form/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;