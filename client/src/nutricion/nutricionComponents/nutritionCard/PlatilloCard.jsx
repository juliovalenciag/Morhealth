import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useState } from "react";
import Card from ".";

const PlatilloCard = ({ recipe }) => {

  if (!recipe) {
    return null; // o puedes retornar un componente de "cargando" aquí
  }

  return (
    <Card extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white `}>

      <div className="h-full w-full flex flex-col justify-between">
        <div className="relative w-full">
          <img
            src={recipe.image}
            className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
            alt=""
          />

        </div>

        <div className="mb-3 flex items-center justify-between px-1 md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
          <div className="mb-2">
            <p className="text-lg font-bold text-navy-700 dark:text-white">
              {" "}
              {recipe.title}{" "}
            </p>
            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
              {recipe.readyInMinutes} min
            </p>
          </div>


        </div>

        <div className="flex items-center justify-between md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col 2xl:items-start 3xl:flex-row 3xl:items-center 3xl:justify-between flex-grow">
          <div className="flex">
            <p className="mb-2 text-sm font-bold text-brand-500 dark:text-white">
              {recipe.servings} <span> Porciones </span>
            </p>

          </div>
          <button
            href=""
            className="linear rounded-[20px] fixed-bottom bg-brand-700 px-4 py-2 text-base font-medium text-navy-800 transition dark:text-white duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
          >
            Ver más
          </button>
        </div>
      </div>
    </Card>

  );
};

export default PlatilloCard;
