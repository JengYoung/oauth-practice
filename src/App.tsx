import { BrowserRouter, Routes, Route} from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import NaverLoginPage from "./pages/NaverLoginPage";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< IndexPage />}></Route>
          <Route path="/naver-login" element={< NaverLoginPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
