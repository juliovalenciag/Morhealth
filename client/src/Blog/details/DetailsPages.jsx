import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import styled from "styled-components";
import Header from "../components/header/Header";
import moment from 'moment';
import axios from 'axios';
import { AuthContext } from '../../context/authContext';
import DOMPurify from "dompurify";

const DetailsPages = () => {

  //Para la descripcion del post
  const [post, setPost] = useState({});

  //Para los posts relacionados
  const [posts, setPosts] = useState([]);

  const location = useLocation();

  const navigate = useNavigate();

  const postId = location.pathname.split("/")[4];

  const { currentUser } = useContext(AuthContext);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);


  useEffect(() => {
    const fetchData = async () => {
      if (post.cat) { // Asegúrate de que post.cat esté disponible antes de hacer la solicitud
        try {
          const res = await axios.get(`/posts/?cat=${post.cat}`);
          setPosts(res.data);
        } catch (err) {
          console.log(err);
        }
      }
    };
    fetchData();
  }, [post.cat]);


  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/morhealth/blog/")
    } catch (err) {
      console.log(err);
    }
  }



  return (
    <>
      <Header />

      <SingleContainer>
        <SinglePage>
          <Container>

            <PostImgContainer>
              <PostImg src={post?.img} />
            </PostImgContainer>


            <TitleAuthorContainer>
              <h1>{post.title}</h1>
              <AuthorSection>

                {post.userImg &&
                  <AuthorImage src={post.userImg} alt="" />
                }

                <p>Autor: {post.username}</p>
              </AuthorSection>
            </TitleAuthorContainer>

            <PublishButtonsContainer>
              <p>Publicado: {moment(post.date).fromNow()}</p>

              {currentUser.username === post.username && (
                <Buttons>
                  <Button>
                    <Link to='/morhealth/blog/write?=2' state={post}>
                      <BsPencilSquare />
                    </Link>
                  </Button>
                  <Button>
                    <AiOutlineDelete onClick={handleDelete} />
                  </Button>
                </Buttons>
              )}
            </PublishButtonsContainer>

            <PostContent  >

              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(post.desc),
                }}
              ></p>
            </PostContent>

          </Container>
        </SinglePage>

        <RelatedPosts>
          <RelatedPostsContainer>
            <CardContainer cat={post.cat}>
              <RelatedPostsTitle> Otros posts que te podrían interesar: </RelatedPostsTitle>
              {posts.map((post) => (
                <CardBox key={post.id}>
                  <img src={post.img} alt="" />
                  <h2>{post.title}</h2>
                  <button>Leer más</button>
                </CardBox>
              ))}
            </CardContainer>
          </RelatedPostsContainer>
        </RelatedPosts>

      </SingleContainer>

    </>
  );
};

const SingleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 50px 0;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SinglePage = styled.section`
  display: flex;
  grid-column: span 2;
  padding: 1rem;

  justify-content: center; 
  

  @media (max-width: 992px) {
    grid-column: span 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 1rem;
`;


const AuthorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
`;

const PublishButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const PostContent = styled.div`
  margin-top: 30px;

  p {
    margin: 20px 0;
    font-size: 20px;
    line-height: 1.6;
    text-transform: capitalize;
  }
`;



const PostImgContainer = styled.div`
  width: 100%;
  max-height: 600px;
  overflow: hidden;
  display: flex;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const PostImg = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    height: 300px;
  }
}
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  `;

const Button = styled.button`
  border: none;
  background: ${({ theme }) => theme.primary};
  color: #fff;
  padding: 6px 12px;
  font-size: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
  
  &:nth-child(1) {
    background: #10ac84;
  }
  
  &:nth-child(2) {
    background: #ee5253;
  }
  
  &:hover {
    background: ${({ theme }) => theme.primaryDark};
  }
  
  &:nth-child(1):hover {
    background: #0d9b76;
  }
  
  &:nth-child(2):hover {
    background: #d94043;
  }
  `;


const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  `;

const TitleAuthorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  
  h1 {
    font-size: 30px;
    font-weight: 500;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    h1 {
      font-size: 24px;
      margin-bottom: 10px;
    }
  }
  `;
const RelatedPostsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;
const RelatedPosts = styled.section`
  display: flex;
  justify-content: center;
  width: 300px;
  @media (max-width: 992px) {
    width: 100%;
  }
  `;

const RelatedPostsTitle = styled.h2`
    margin-bottom: 30px;
    font-size: 28px;
    font-weight: bold;
    text-align: center;
  `;
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  `;

const CardBox = styled.div`
  background-color: #eaecee;
  color: #031728;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgb(0 0 0 / 8%);
  transition: 0.5s;
  
  &:hover {
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
  
  h2 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  button {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: ${({ theme }) => theme.primary};
    color: #fff;
    padding: 6px 12px;
    font-size: 16px;
    border-radius: 4px;
    border: none;
    transition: background 0.3s;
  }

  button:hover {
    background-color: ${({ theme }) => theme.primaryDark};
  }
`;



export default DetailsPages;