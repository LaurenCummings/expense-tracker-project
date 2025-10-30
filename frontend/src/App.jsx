import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import LoginPage from "../src/pages/LoginPage";
import SignUpPage from "../src/pages/SignUpPage";
import TransactionPage from "../src/pages/TransactionPage";
import NotFoundPage from "../src/pages/NotFoundPage";
import Header from "./components/ui/Header";
import { useQuery } from "@apollo/client/react";
import { GET_AUTHENTICATED_USER } from "./graphql/queries/user.query";
import { Toaster } from "react-hot-toast";

function App() {
  const { loading, data, error } = useQuery(GET_AUTHENTICATED_USER);

  console.log("Loading:", loading);
  console.log("Authenticated user:", data);
  console.log("Error:", error);
  return (
    <>
      { data?.authUser && <Header /> }
      <Routes>
        <Route path="/" element={data.authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/login" element={!data.authUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/signup" element={!data.authUser ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path="/transaction/:id" element={<TransactionPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App;
