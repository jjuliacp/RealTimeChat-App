import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./components/auth/Register";
import Chat from "./components/Chat/Chat";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
