import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import NaverLoginPage from "./pages/NaverLoginPage";
import KakaoLoginPage from "./pages/KakaoLoginPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/naver-login" element={<NaverLoginPage />}></Route>
          <Route path="/kakao-login" element={<KakaoLoginPage />}></Route>
          <Route path="/" element={<IndexPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
