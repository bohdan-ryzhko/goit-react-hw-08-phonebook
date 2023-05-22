import { AppBar } from "./AppBar/AppBar";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Register } from "pages/Register/Register";
// import { Layout } from "pages/Layout";
import { Home } from "./Home/Home";
import { Login } from "pages/Login/Login";
import { useEffect } from "react";
import { fetchCurrentUser } from "redux/auth/operations";
import { Contacts } from "pages/Contacts/Contacts";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";

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
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Routes>
    </>
  );
};

// {name: 'hbh01', email: 'hbh@mail.com', password: 'hbh01123'}