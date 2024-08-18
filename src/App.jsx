import { BrowserRouter, Route, Routes } from "react-router-dom";

import { SignIn } from "./pages/SignIn";
import { Toaster } from "react-hot-toast";
import { ChatPage } from "./pages/Chat";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
