import { AppBar } from "./AppBar/AppBar";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/useAuth";
import { Route, Routes } from "react-router-dom";
import { Register } from "pages/Register/Register";
// import { Layout } from "pages/Layout";
import { Home } from "./Home/Home";
import { Login } from "pages/Login/Login";
import { useEffect } from "react";
import { fetchCurrentUser } from "redux/auth/operations";
import { Contacts } from "pages/Contacts/Contacts";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
};

// {name: 'hbh01', email: 'hbh@mail.com', password: 'hbh01123'}