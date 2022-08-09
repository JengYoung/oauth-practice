import { BrowserRouter, Routes, Route} from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import NaverLoginPage from "./pages/NaverLoginPage";

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/naver-login" element={< NaverLoginPage />}></Route>
            <Route path="/" element={< IndexPage />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
