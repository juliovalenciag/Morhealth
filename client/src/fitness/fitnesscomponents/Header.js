import React from 'react'

const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/morshealth/fitness/exercises">Ejercicios</Link>
                    </li>
                    <li>
                        <Link to="/morshealth/fitness/workouts">Entrenamientos</Link>
                    </li>
                    <li>
                        <Link to="/morshealth/fitness/nutrition">Planes de Nutrición</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
