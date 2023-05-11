// import { lazy } from "react";
import { AppBar } from "./AppBar/AppBar";
// import { useDispatch } from "react-redux";
// import { useAuth } from "hooks/useAuth";
import { Route, Routes } from "react-router-dom";
import { Register } from "pages/Register";
import { Layout } from "pages/Layout";
import { LoginForm } from "./LoginForm/LoginForm";

// const RegisterPage = lazy(() => import("../pages/Register"));

export const App = () => {

  // const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();

  return (
    <>
      <AppBar />
      <Routes>
        <Route to="/" element={<Layout />}>
          

        </Route>
      </Routes>
      {/* <RegisterPage /> */}
      {/* <Register /> */}
      <LoginForm/>
    </>
  );
};


// {name: 'hbh01', email: 'hbh@mail.com', password: 'hbh01123'}