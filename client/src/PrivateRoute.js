import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./context/authContext";
import Layout from "./components/Layout/Layout";

const PrivateRoute = () => {
  const { currentUser } = useContext(AuthContext);

  return currentUser ?<Layout> <Outlet /> </Layout> : <Navigate to="/ingresar" />;
};

export default PrivateRoute;