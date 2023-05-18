import Card from "./../../components/card";
import React, { useMemo } from "react";


function DietasHome() {
    

    return (
        <Card extra={"h-[600px] w-full"}>
            {/* Top Creator Header */}
            <div className="flex h-fit w-full items-center justify-between rounded-t-2xl bg-white px-4 pt-4 pb-[20px] shadow-2xl shadow-gray-100 dark:!bg-navy-700 dark:shadow-none">
                <h4 className="text-lg font-bold text-navy-700 dark:text-white">
                    Dietas
                </h4>
                <button className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20">
                    Ver más
                </button>
            </div>

            {/* Top Creator Heading */}
            <div className="w-full overflow-x-scroll px-4 md:overflow-x-hidden">
                
            </div>
        </Card>
    );
}

export default DietasHome;
