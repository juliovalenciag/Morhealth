import React from "react"
import Back from "../common/Back"
import img from "../../assets/img/bg/bgplanes.jpg";
import Planes from "./Planes"

const Pricing = () => {
    return (
        <>
            <section className='pricing mb'>
                <Back name='Unéte a morhealth' title='14 días de prueba' cover={img} />
                <div className='price container'>
                    <Planes />
                </div>
            </section>
        </>
    )
}

export default Pricing
