import React, { useEffect, useState } from "react";
import { blog } from "../../assets/data/data";
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Card = () => {

  const [posts, setPosts] = useState([]);

  const cat = useLocation().search


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

                <StyledLink to={`/morhealth/blog/post/${post.idpost}`} className="link">
                  <h3>{post.title}</h3>
                  <CardDescription>{post.desc.slice(0, 180)}...</CardDescription>
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
