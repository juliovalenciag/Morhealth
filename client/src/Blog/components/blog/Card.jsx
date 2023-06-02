import React, { useEffect, useState } from "react";
import { blog } from "../../assets/data/data";
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Card = () => {

  const cat = useLocation().search

  {/*
  const [posts, setPosts] = useState([]);

*

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

*/}
  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  const posts = [
    {
      id: 1,
      title: "Los mejores alimentos para aumentar tu energia",
      desc: " Aquí hay algunos alimentos que pueden ayudarte a aumentar tu energía: Plátanos: Los plátanos son ricos en carbohidratos y potasio, lo que los convierte en una excelente opción para aumentar la energía. Frutos secos: Los frutos secos son ricos en proteínas y grasas saludables, lo que los convierte en una excelente opción para aumentar la energía.",
      img: "https://images.unsplash.com/photo-1565061338076-3d346bb4bfc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1588&q=80",
    },
    {
      id: 4,
      title: "Cómo mantener una dieta saludable en la oficina",
      desc: "Para mantener una dieta saludable, es importante comer una variedad de alimentos nutritivos y limitar los alimentos procesados y azucarados. Aquí hay algunos consejos para ayudarte a mantener una dieta saludable:",
      img: "https://images.unsplash.com/photo-1522152302542-71a8e5172aa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1608&q=80",
    },
    {
      id: 2,
      title: "Los mejores ejercicios para tonificar piernas",
      desc: "Aquí hay algunos ejercicios que puedes hacer para tonificar tus piernas: Sentadillas: Las sentadillas son un gran ejercicio para tonificar los músculos de las piernas. Para hacer una sentadilla, párate con los pies separados al ancho de los hombros y baja lentamente tu cuerpo hacia el suelo, doblando las rodillas y manteniendo la espalda recta. Luego, levántate lentamente. Zancadas: Las zancadas son otro gran ejercicio para tonificar los músculos de las piernas. Para hacer una zancada, da un paso hacia adelante con un pie y baja lentamente tu cuerpo hacia el suelo, doblando las rodillas y manteniendo la espalda recta. Luego, levántate lentamente y repite con la otra pierna",
      img: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      id: 3,
      title: "Cómo preparar comidas saludables en 30 minutos",
      desc: "Aquí hay algunos consejos para preparar comidas saludables en 30 minutos: Planifica tus comidas con anticipación: Antes de comenzar a cocinar, asegúrate de tener todos los ingredientes que necesitas y de haber planificado tu comida con anticipación. Usa ingredientes simples: Utiliza ingredientes simples y fáciles de preparar para ahorrar tiempo.",
      img: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    
    {
      id: 5,
      title: "Como mantener una dieta saludable mientras viajas",
      desc: "Mantener una dieta saludable mientras viajas puede ser un desafío, pero aquí hay algunos consejos que pueden ayudarte: Planifica con anticipación: Antes de salir de viaje, investiga los restaurantes y supermercados locales para encontrar opciones saludables. Empaca tus propios bocadillos: Empaca bocadillos saludables como frutas, nueces y barras de granola para tener algo que comer en caso de emergencia.",
      img: "https://images.unsplash.com/photo-1564403256236-8f6929897a47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1351&q=80",
    },
    {
      id: 6,
      title: "Los mejores ejercicios para quemar grasa abdominal",
      desc: "Aquí hay algunos ejercicios que pueden ayudarte a reducir la grasa abdominal: Plancha: La plancha es un gran ejercicio para tonificar los músculos abdominales. Para hacer una plancha, acuéstate boca abajo con los antebrazos apoyados en el suelo y levanta tu cuerpo del suelo, manteniendo tu cuerpo recto.",
      img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      id: 7,
      title: "Como preparar licuados saludables para el desayuno",
      desc: "Aquí hay algunas recetas de licuados saludables para el desayuno: Licuado de plátano y fresa: Mezcla 1 plátano maduro, 1 taza de fresas congeladas, 1 taza de leche de almendras sin azúcar y 1 cucharada de miel en una licuadora hasta que quede suave.",
      img: "https://images.unsplash.com/photo-1626078436898-7c7953c04778?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ];


  {/*
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
*/}
  return (
    <>
      <BlogSection className="blog">
        <CardContainer className="container grid3">


          {posts.map((post) => (
            <CardBox className="box boxItems" key={post.idpost}>
              <div className="img">
                <img src={post.img} alt="" />
              </div>
              <CardDetails className="details">

                {/*
                <CardTag className="tag">
                  <AiOutlineTags className="icon" />
                  <a href="/">#{item.category}</a>
                </CardTag>
          */}

                <StyledLink to={`/morhealth/blog/post/1`} className="link">
                  <h3>{post.title}</h3>
                  <CardDescription><p>{getText(post.desc.slice(0, 180))}</p>...</CardDescription>
                  <ReadMore>Leer más</ReadMore>
                </StyledLink>
                <CardDate className="date">
                  {/*<AiOutlineClockCircle className="icon" /> <label htmlFor="">{item.date}</label>*/}
                  <AiOutlineComment className="icon" /> <label htmlFor="">27</label>
                  <AiOutlineShareAlt className="icon" /> <label htmlFor="">SHARE</label>
                </CardDate>
              </CardDetails>
            </CardBox>
          ))}


        </CardContainer>
      </BlogSection>
    </>
  );
};

const BlogSection = styled.section`
  margin: 50px 0;
`;

const CardContainer = styled.div`
  max-width: 95%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CardBox = styled.div`
  transition: 0.5s;
  background-color: #eaecee;
  border-radius: 10px;
  padding: 1rem;

  &:hover {
    box-shadow: 0 2px 4px rgb(0 0 0 / 8%);
    cursor: pointer;
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 20px;
  }
`;

const ReadMore = styled.button`

  border-style: dotted;
  &:hover {
      color: #fff;
      background-color: #007bff;
      border-radius: 5px;
    }
`;

const CardDetails = styled.div`
  display: flex;
  flex-direction: column;

  .tag {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }

  h3 {
    font-weight: 500;
  }

  p {
    color: #999;
    font-weight: 400;
    margin: 20px 0;
    font-size: 17px;
    line-height: 25px;
  }

  .date {
    display: flex;
    align-items: center;
  }

  .date label {
    display: block;
    margin-right: 20px;
  }
`;

const CardTag = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  a {
    color: blue;
    opacity: 0.7;
  }

  .icon {
    margin-right: 10px;
    font-size: 20px;
  }
`;

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;

  &:hover {
    color: #000;
  }
`;

const CardDescription = styled.p`
  color: #999;
  font-weight: 400;
  margin: 20px 0;
  font-size: 17px;
  line-height: 25px;
`;

const CardDate = styled.div`
  display: flex;
  align-items: center;

  label {
    display: block;
    margin-right: 20px;
  }

  .icon {
    margin-right: 10px;
    font-size: 20px;
  }
`;

export default Card;
