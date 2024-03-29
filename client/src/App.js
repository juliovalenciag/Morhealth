import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Route, Outlet, Form } from 'react-router-dom';

import PrivateRoute from "./PrivateRoute";

import './App.css';
import Home from './home/Home';


import { GlobalStyle } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";


import Blog from "./Blog/Blog"

import Write from "./Blog/Write";
import Nutricion from "./pages/Nutricion";
import Searched from "./nutricion/Searched";
import Recipe from "./nutricion/Recipe";
import FitnessHome from "./pages/FitnessHome";
import NutricionHome from "./pages/NutricionHome";
import Layout from "./components/Layout/Layout";

import BlogHome from "./pages/BlogHome";

import Fitness from './fitness/Fitness'
import PruebitaEjercicios from "./fitness/PruebitaEjercicios";
import PruebitaRutinas from "./fitness/PruebitaRutinas";


import ExerciseList from './fitness/exercises/ExercisesList'
import ExerciseDetails from './fitness/exercises/ExerciseDetails'
import WorkotsDetail from './fitness/workouts/WorkoutDetails'
import WorkoutsList from './fitness/workouts/WorkoutsList'
import CreateWorkout from './fitness/workouts/CreateWorkout'
import CreateNutritionPlan from './fitness/nutrition/CreateNutritionPlan'
import NutritionPlanDetails from './fitness/nutrition/NutritionPlanDetails'
import NutritionPlansList from './fitness/nutrition/NutritionPlansList'
import Recetas from "./nutricion/Recetas";
import RecipeDetails from "./nutricion/nutricionComponents/RecipeDetails";
import DetailsPages from "./Blog/details/DetailsPages";
import EjerciciosHome from "./pages/EjerciciosHome";
import Pie from "./home/common/Pie";
import Ejercicios from "./fitness/Ejercicios";
import MhHome from "./pages/MhHome";
import Profesionales from "./pages/Profesionales";
import ExerciseDetail from "./fitness/ExerciseDetail";
import RecipeDetail from "./nutricion/RecipeDetail";


import Dashboard from "./views/user/default";
import Marketplace from "./views/user/marketplace";
import Tables from "./views/user/tables";
import Profile from "./views/user/profile";
import HomeNutricion from "./nutricion/HomeNutricion";
import ScrollToTop from "./home/common/ScrollToTop";
import Navbar from "./home/common/Navbar";
import Contacto from "./home/contacto/Contacto";
import Pricing from "./home/planes/Pricing";
import Acerca from "./home/acerca/Acerca";
import SesionProfesional from "./pages/Sesion/SesionProfesional";
import SesionUser from "./pages/Sesion/SesionUser";






export const ThemeContext = React.createContext(null);

const LayoutInicio = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Pie />
    </>
  )
}

const LayoutPrincipal = () => {
  return (
    <>
      <Layout>
        <Outlet/>
      </Layout>
    </>
  )
}



const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutInicio />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/contacto',
        element: <Contacto />
      },
      {
        path: '/acerca',
        element: <Acerca />
      },
      {
        path: '/planes',
        element: <Pricing />
      },



    ]
  },

  {
    path: '/morhealth',
    element: <LayoutPrincipal />,
    children: [

      {
        path: '/morhealth/',
        element: <Dashboard />
      },

      {
        path: '/morhealth/blog',
        element: <BlogHome />
      },
      {
        path: '/morhealth/blog/post/:id',
        element: <DetailsPages />
      },
      {
        path: '/morhealth/blog/write',
        element: <Write />
      },
      {
        path: '/morhealth/blog/salud',
        element: <Blog />
      },
      {
        path: '/morhealth/blog/nutricion',
        element: <Blog />
      },
      {
        path: '/morhealth/blog/ejercicios',
        element: <Blog />
      },



      {
        path: '/morhealth/fitness/exercise',
        element: <ExerciseList />
      },
      {
        path: '/morhealth/fitness/exercise/:id',
        element: <ExerciseDetail />
      },
      {
        path: '/morhealth/fitness/workouts',
        element: <WorkoutsList />
      },
      {
        path: '/morhealth/fitness/workouts/:id',
        element: <WorkotsDetail />
      },
      {
        path: '/morhealth/fitness/workouts/create',
        element: <CreateWorkout />
      },
      {
        path: '/morhealth/fitness/nutrition',
        element: <NutritionPlansList />
      },
      {
        path: '/morhealth/fitness/nutrition/:id',
        element: <NutritionPlanDetails />
      },
      {
        path: '/morhealth/fitness/nutrition/create',
        element: <CreateNutritionPlan />
      },




      {
        path: '/morhealth/ejercicios',
        element: <EjerciciosHome />
      },
      {
        path: '/morhealth/ejercicios/:id',
        element: <ExerciseDetail />
      },
      {
        path: '/morhealth/ejercicios/ejercicio',
        element: <Ejercicios />
      },
      {
        path: '/morhealth/ejercicios/ejercicio/:id',
        element: <ExerciseDetail />
      },
      {
        path: '/morhealth/ejercicios/ejercicio/rutinas',
        element: <PruebitaRutinas />
      },
      {
        path: '/morhealth/ejercicios/ejercicio/lista-ejercicios',
        element: <PruebitaEjercicios />
      },
      {
        path: '/morhealth/ejercicios/rutinas',
        element: <PruebitaRutinas />
      },
      {
        path: '/morhealth/ejercicios/:bodyPart',
        element: <PruebitaRutinas />
      },
      {
        path: '/morhealth/ejercicios/:bodyPartId',
        element: <PruebitaRutinas />
      },
      {
        path: '/morhealth/ejercicios/:id',
        element: <PruebitaRutinas />
      },



      {
        path: '/morhealth/nutricion',
        element: <HomeNutricion />
      },
      {
        path: '/morhealth/nutricion/cuisine/:type',
        element: <Nutricion />
      },
      {
        path: '/morhealth/nutricion/recetas',
        element: <Recetas />
      },
      {
        path: '/morhealth/nutricion/searched/:search',
        element: <Searched />
      },
      {
        path: '/morhealth/nutricion/recipe/:name',
        element: <Recipe />
      },
      {
        path: '/morhealth/nutricion/recipe/:name',
        element: <Recipe />
      },

      {
        path: '/morhealth/nutricion/recetas/receta/:id',
        element: <RecipeDetail />
      },


      {
        path: '/morhealth/nutricion/recetilla',
        element: <Recetas />
      },
      {
        path: '/morhealth/nutricion/recetilla/:id',
        element: <RecipeDetails />
      },


      {
        path: '/morhealth/profesionales',
        element: <Profesionales />,
      },

      {
        path: '/morhealth/perfil',
        element: <Profile />
      },


    ]
  },
  {
    path: '/ingresar',
    element: <SesionUser />
  },
  {
    path: '/ingresar/profesional',
    element: <SesionProfesional />
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
          <div className="contenedorGeneral">
            <RouterProvider router={router} />
          </div>
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>

  );
}

export default App;
