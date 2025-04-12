import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./components/auth/Register";
import Chat from "./components/Chat/Chat";
import { Layout } from "./components/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
