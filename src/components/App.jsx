import { AppBar } from "./AppBar/AppBar";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/useAuth";
import { Route, Routes } from "react-router-dom";
import { Register } from "pages/Register";
// import { Layout } from "pages/Layout";
import { Home } from "./Home/Home";
import { Login } from "pages/Login";
import { useEffect } from "react";
import { fetchCurrentUser } from "redux/auth/operations";

export const App = () => {

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

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
      </Routes>
    </>
  );
};

// {name: 'hbh01', email: 'hbh@mail.com', password: 'hbh01123'}