import React from 'react';

import { AiTwotoneEdit } from 'react-icons/ai';
import { TiDelete } from 'react-icons/ti';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import BlogNavbar from '../components/pagecomponents/BlogNavbar';

const Single = () => {
    return (
        <>
        <BlogNavbar/>
        <div className='single'>
            <div className="content">
                <img src='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1961&q=80' alt='' />
                <div className="user">
                    <img src='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1961&q=80' alt='' />
                    <div className="info">
                        <span>Sawalito</span>
                        <p>Publicado hace 2 dias</p>
                    </div>
                    <div className="edit">
                        <Link to={`/publicar?edit=2`}>
                        <AiTwotoneEdit/>
                        
                        </Link>
                        <TiDelete/>
                    </div>
                </div>
                <h1>Lorem ipsum</h1>
                <p>Descriocion</p>
            </div>
            <Menu/>
        </div>
        </>
    )
}

export default Single
