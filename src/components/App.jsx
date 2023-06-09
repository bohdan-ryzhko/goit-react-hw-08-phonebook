import { AppBar } from "./AppBar/AppBar";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Register } from "pages/Register/Register";
import { Home } from "./Home/Home";
import { Login } from "pages/Login/Login";
import { useEffect } from "react";
import { fetchCurrentUser } from "redux/auth/operations";
import { Contacts } from "pages/Contacts/Contacts";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { useAuth } from "hooks/useAuth";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    isRefreshing ? (
      <p>Refreshing page...</p>
    ) : (
      <>
         <AppBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<Register />} />
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
          <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            pauseOnHover
            theme="colored"
            transition={Slide}
          />
        </>
    )
  );
};

// {name: 'hbh01', email: 'hbh@mail.com', password: 'hbh01123'}