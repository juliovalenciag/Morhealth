import React, { useState, useEffect } from 'react';

import morse from './../'
import NFt2 from "./../assets/img/nfts/Nft2.png";
import NFt4 from "./../assets/img/nfts/Nft4.png";
import NFt3 from "./../assets/img/nfts/Nft3.png";
import NFt6 from "./../assets/img/nfts/Nft5.png";
import NFt5 from "./../assets/img/nfts/Nft6.png";
import avatar1 from "./../assets/img/avatars/avatar1.png";
import avatar2 from "./../assets/img/avatars/avatar2.png";
import avatar3 from "./../assets/img/avatars/avatar3.png";

import NftCard from '../components/card/NftCard';
import NutricionBanner from './nutricionComponents/NutricionBanner';
import TopCreatorTable from '../views/user/marketplace/components/TableTopCreators';
import DietasHome from './nutricionComponents/DietasHome';
import PlanHome from './nutricionComponents/PlanHome';
import PlatilloCard from './nutricionComponents/nutritionCard/PlatilloCard';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';

const HomeNutricion = () => {

  const [popular, setPopular] = useState([]);
  const [veggie, setVeggie] = useState([]);
  const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;

  useEffect(() => {
    getPopular();
    getVeggie();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem('popular');

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=9`
      );
      const data = await api.json();
      console.log(data);

      localStorage.setItem('popular', JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };

  const getVeggie = async () => {
    try {
      const check = localStorage.getItem('veggie');

      if (check) {
        setVeggie(JSON.parse(check));
      } else {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=9&tags=vegetarian`);

        const responseText = await api.text();
        console.log("Raw response text:", responseText);

        const data = JSON.parse(responseText);

        try {
          localStorage.setItem("veggie", JSON.stringify(data.recipes));
          setVeggie(data.recipes);
          console.log(data.recipes);
        } catch (parseError) {
          console.error("JSON parsing error:", parseError);
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        <NutricionBanner />
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            Platillos populares
          </h4>

        </div>


        <Splide
          options={{
            perPage: 3,
            arrows: true,
            pagination: false,
            drag: 'free',
            gap: '1rem',
            breakpoints: {
              960: {
                perPage: 2,
              },
              768: {
                perPage: 1,
              },
            },
          }}
        >
          {popular.map((recipe) => (
            <SplideSlide key={recipe.id}>
              <Link to={`/morhealth/nutricion/recetas/receta/${recipe.id}`}>
                <PlatilloCard key={recipe.id} recipe={recipe} />
              </Link>
            </SplideSlide>
          ))}
        </Splide>


        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            Platillos vegetarianos
          </h4>

        </div>

        <Splide
          options={{
            perPage: 3,
            arrows: true,
            pagination: false,
            drag: 'free',
            gap: '1rem',
            breakpoints: {
              960: {
                perPage: 2,
              },
              768: {
                perPage: 1,
              },
            },
          }}
        >
          {veggie.map((recipe) => (
            <SplideSlide key={recipe.id}>
              <Link to={`/morhealth/nutricion/recetas/receta/${recipe.id}`}>
                <PlatilloCard key={recipe.id} recipe={recipe} />
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div className="col-span-1 h-full w-full rounded-xl 2xl:col-span-1">
        <DietasHome />
        <PlanHome />
      </div>
    </div>
  )
}


export default HomeNutricion
