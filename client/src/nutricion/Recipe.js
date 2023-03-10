import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import React from 'react'

function Recipe() {

    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=4b6414652eca4d17a1808f6504cc229d`)
        const detailData = await data.json();
        console.log(detailData);
        setDetails(detailData);
    }

    useEffect(() => {
        fetchDetails();
    },[params.name])
  return (
    <DetailWrapper>
        <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt=""/>
        </div>
        <Info id="google_translate_element">
            <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab("instructions")}>Instrucciones</Button>
            <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab("ingredients")}>Ingredientes</Button>
            {activeTab === 'instructions' && (
            <div>
            <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
            <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
        </div> )}
            {activeTab === 'ingredients' && (<ul>
                {details.extendedIngredients.map((ingredient) =>(
                    <li key={ingredient.id}>{ingredient.original}</li>
                ))}
            </ul>)}
            
        </Info>
    </DetailWrapper>
  );
}
const DetailWrapper = styled.div`
    padding: 2rem;
    margin-top: 2rem;
    margin-bottom: 5rem;
    display: flex;
    .active{
        background: linear-gradient(#216B91, #031728);
        color: white;
    }
    h2{
        margin-bottom: 2rem;
    }
    ul{
        margin-top: 2rem;
    }
        li{
            font-size: 1.2rem;
            line-height: 1.8rem;
        }
    img{
        border-radius: 1rem;
        box-shadow: 10px 10px 5px #ccc;
        max-width: 400px;
        min-width: 100px;
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #031728;
    background: white;
    border: 1px solid black;
    margin-right: 2rem;
    font-weight:600;
    width: 150px;
    border-radius: .5rem;
`;
const Info = styled.div`
    max-width: 800px;
    margin-left: 8rem;
`;

export default Recipe