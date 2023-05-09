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
import LoginPage from "./pages/Sesion/LoginPage";
import DetailsPages from "./Blog/details/DetailsPages";
import EjerciciosHome from "./pages/EjerciciosHome";
import Header from "./home/common/header/Header";
import Pie from "./home/common/Pie";
import Ejercicios from "./fitness/Ejercicios";
import MhHome from "./pages/MhHome";
import Profesionales from "./pages/Profesionales";
import ExerciseDetail from "./fitness/ExerciseDetail";
import RecipeDetail from "./nutricion/RecipeDetail";


import UserLayout from './layouts/user'

export const ThemeContext = React.createContext(null);

const LayoutInicio = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Pie />
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

    ]
  },

  {
    path: '/morhealth',
    element: <UserLayout />,
    children: [
      {
        path: '/morhealth',
        element: <UserLayout />
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
        element: <ExerciseDetails />
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
        path: '/morhealth/nutricion',
        element: <NutricionHome />
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
      }

      
    ]
  },
  {
    path: '/ingresar',
    element: <LoginPage />
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
