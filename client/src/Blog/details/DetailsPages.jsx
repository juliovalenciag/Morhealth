import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { blog } from "../assets/data/data";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import styled from "styled-components";
import Header from "../components/header/Header";

export const DetailsPages = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState(null);

  const [post, setPost] = useState({});

  useEffect(() => {
    let blogs = blog.find((blogs) => blogs.id === parseInt(id));
    if (blogs) {
      setBlogs(blogs);
    }
  }, []);

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


  return (
    <>
      <Header />
      {blogs ? (
        <SingleContainer>
          <SinglePage>
            <Container>


              <PostImg src={blogs.cover} alt="" />

              <AuthorButtonsContainer>
                <AuthorSection>
                  <AuthorImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Author" />
                  <p>Author: Sunil</p>
                </AuthorSection>


                <Buttons>
                  <Button>
                    <BsPencilSquare />
                  </Button>
                  <Button>
                    <AiOutlineDelete />
                  </Button>
                </Buttons>
              </AuthorButtonsContainer>

              <Right>
                <h1>Betadine Feminine Wash</h1>
                <p>{blogs.desc}</p>
                <p>
                  ...
                </p>
              </Right>
            </Container>
          </SinglePage>


          <GridItem>
            <h1> Otros posts que te podrían interesar: </h1>
            <CardContainer>
              {posts.map((post) => (
                <CardBox key={post.id}>
                  <img src={post.img} alt="" />
                  <h2>{post.title}</h2>
                  <button>Leer más</button>
                </CardBox>
              ))}
            </CardContainer>
          </GridItem>


        </SingleContainer>
      ) : null}
    </>
  );
};

const SingleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 50px 0;
`;

const GridItem = styled.section`
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  h1{
    font-size: larger;
  }
  @media (max-width: 1024px) {
    &:nth-child(3) {
      grid-row: span none;
    }
  }

  @media (max-width: 640px) {
    &:nth-child(3) {
      grid-row: span none;
    }
  }


`;
const SinglePage = styled.section`
  display: flex;
  grid-column: span 2;
  
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 95%;
  margin: auto;

  `;

const AuthorButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const AuthorImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  `;

const PostImg = styled.img`
  
    width: 100%;
    height: 100%;
    border-radius: 10px;

`;

const Right = styled.div`
  margin-top: 30px;

  h1 {
    font-size: 30px;
    font-weight: 500;
  }

  p {
    margin: 20px 0;
    font-size: 18px;
    line-height: 2;
    text-transform: capitalize;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Button = styled.button`
  margin-left: 20px;
  border: none;
  background: ${({ theme }) => theme.primary};
  color: #fff;
  padding: 6px 12px;
  font-size: 16px;
  border-radius: 4px;

  &:nth-child(1) {
    background: #10ac84;
  }

  &:nth-child(2) {
    background: #ee5253;
  }
`;

const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;


const CardContainer = styled.div`
max-width: 95%;

  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 15px;

`;

const CardBox = styled.div`
  transition: 0.5s;
  background-color: #eaecee;
  color: #031728;
  border-radius: 10px;
  padding: 1rem;

  &:hover {
    box-shadow: 0 2px 4px rgb(0 0 0 / 8%);
    cursor: pointer;
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 20px;
  }
  button{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export default DetailsPages;