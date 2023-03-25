import React, { useState } from "react";
import { createBrowserRouter, RouterProvider, Route, Outlet, Form } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

import Principal from "./pages/Principal";
import Layout from './components/Layout/Layout'
import Sidebar from "./components/Sidebar/Sidebar";

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
import MorshealthHome from "./pages/MorshealthHome";
import RecipeSearch from "./nutricion/nutricionComponents/RecipeSearch";
import RecipeDetails from "./nutricion/nutricionComponents/RecipeDetails";

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
        element: <MorshealthHome/>
      },


      {
        path: '/morshealth/blog',
        element: <BlogHome/>
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
        path: '/morshealth/fitness/exercise',
        element: <ExerciseList/>
      },
      {
        path: '/morshealth/fitness/exercise/:id',
        element: <ExerciseDetails/>
      },
      {
        path: '/morshealth/fitness/workouts',
        element: <WorkoutsList/>
      },
      {
        path: '/morshealth/fitness/workouts/:id',
        element: <WorkotsDetail/>
      },
      {
        path: '/morshealth/fitness/workouts/create',
        element: <CreateWorkout/>
      },
      {
        path: '/morshealth/fitness/nutrition',
        element: <NutritionPlansList/>
      },
      {
        path: '/morshealth/fitness/nutrition/:id',
        element: <NutritionPlanDetails/>
      },
      {
        path: '/morshealth/fitness/nutrition/create',
        element: <CreateNutritionPlan/>
      },




      {
        path: '/morshealth/ejercicios',
        element: <FitnessHome/>
      },
      {
        path: '/morshealth/ejercicios/ejercicio',
        element: <Fitness/>
      },
      {
        path: '/morshealth/ejercicios/ejercicio/rutinas',
        element: <PruebitaRutinas/>
      },
      {
        path: '/morshealth/ejercicios/ejercicio/lista-ejercicios',
        element: <PruebitaEjercicios/>
      },
      {
        path: '/morshealth/ejercicios/rutinas',
        element: <PruebitaRutinas/>
      },
      {
        path: '/morshealth/ejercicios/:bodyPart',
        element: <PruebitaRutinas/>
      },
      {
        path: '/morshealth/ejercicios/:bodyPartId',
        element: <PruebitaRutinas/>
      },
      {
        path: '/morshealth/ejercicios/:id',
        element: <PruebitaRutinas/>
      },



      {
        path: '/morshealth/nutricion/cuisine/:type',
        element: <Nutricion/>
      },
      {
        path: '/morshealth/nutricion/recetas',
        element: <Recetas/>
      },
      {
        path: '/morshealth/nutricion/searched/:search',
        element: <Searched/>
      },
      {
        path: '/morshealth/nutricion',
        element: <NutricionHome/>
      },
      {
        path: '/morshealth/nutricion/recipe/:name',
        element: <Recipe/>
      },
      {
        path: '/morshealth/nutricion/recipe/:name',
        element: <Recipe/>
      },


      {
        path: '/morshealth/nutricion/recetilla',
        element: <RecipeSearch/>
      },
      {
        path: '/morshealth/nutricion/recetilla/:id',
        element: <RecipeDetails/>
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
