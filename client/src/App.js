import React, { useState } from "react";
import { createBrowserRouter, RouterProvider, Route, Outlet, Form } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

import Principal from "./pages/Principal";
import Layout from './components/Layout/Layout'

import { GlobalStyle } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Blog from "./Blog/Blog"
import Single from "./Blog/Single";
import Write from "./Blog/Write";
import Nutricion from "./pages/Nutricion";
import Searched from "./nutricion/Searched";
import Recipe from "./nutricion/Recipe";
import Ejercicios from "./pages/Ejercicios";
import ExerciseDetail from "./fitness/ExerciseDetail";

export const ThemeContext = React.createContext(null);

const LayoutInicio = () => {
  return (
    <>
    
      <Outlet />
     
    </>
  )
}

const LayoutPrincipal = () => {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutInicio/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      
    ]
  },
  {
    path: '/registro',
    element: <Register/>
  },
  {
    path: '/morshealth',
    element: <LayoutPrincipal/>,
    children: [
      {
        path: '/morshealth',
        element: <Principal/>
      },
      {
        path: '/morshealth/blog',
        element: <Blog/>
      },
      {
        path: '/morshealth/blog/publicar',
        element: <Write/>
      },
      {
        path: '/morshealth/blog/post/:id',
        element: <Single/>
      },
      {
        path: '/morshealth/blog/salud',
        element: <Blog/>
      },
      {
        path: '/morshealth/blog/nutricion',
        element: <Blog/>
      },
      {
        path: '/morshealth/blog/ejercicios',
        element: <Blog/>
      },

      {
        path: '/morshealth/ejercicios',
        element: <Ejercicios/>
      },
      {
        path: '/morshealth/ejercicios/:id',
        element: <ExerciseDetail/>
      },
      {
        path: '/morshealth/nutricion/cuisine/:type',
        element: <Nutricion/>
      },
      {
        path: '/morshealth/nutricion/searched/:search',
        element: <Searched/>
      },
      {
        path: '/morshealth/nutricion',
        element: <Nutricion/>
      },
      {
        path: '/morshealth/nutricion/recipe/:name',
        element: <Recipe/>
      },
    ]
  },
  {
    path: '/login',
    element: <Login/>
  },
])



function App() {

  const [theme, setTheme] = useState("light");
    const themeStyle = theme === "light" ? lightTheme : darkTheme;

  return (

    <ThemeContext.Provider value={{ setTheme, theme }}>
            <ThemeProvider theme={themeStyle}>
                <GlobalStyle />
    <div className='App'>
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
    </ThemeProvider>
    </ThemeContext.Provider>

  );
}

export default App;
