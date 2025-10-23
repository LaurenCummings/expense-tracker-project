import { Route, Routes } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import LoginPage from "../src/pages/LoginPage";
import SignUpPage from "../src/pages/SignUpPage";
import TransactionPage from "../src/pages/TransactionPage";
import NotFoundPage from "../src/pages/NotFoundPage";
import Header from "./components/ui/Header";

function App() {
  const authUser = true;
  return (
    <>
      { authUser && <Header /> }
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/transaction/:id" element={<TransactionPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App;
