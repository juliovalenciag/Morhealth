import React from 'react';
import styled from 'styled-components';
import Loader from './Loader';

const StyledBox = styled.div`
  padding: 20px;
  margin-top: 20px;

  @media (min-width: 1024px) {
    margin-top: 203px;
  }
`;

const StyledTypography = styled.span`
  font-size: 25px;
  font-weight: 700;
  color: #000;
  margin-bottom: 33px;

  @media (min-width: 1024px) {
    font-size: 44px;
  }
`;

const StyledName = styled.span`
  color: #216b91;
  text-transform: capitalize;
`;

const StyledStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0px;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;

  @media (min-width: 1024px) {
    gap: 110px;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
`;

const StyledImage = styled.img`
  border-top-left-radius: 20px;
`;

const StyledTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #000;

  @media (min-width: 1024px) {
    font-size: 28px;
  }
`;

const StyledChannelName = styled.span`
  font-size: 14px;
  color: #000;
`;

const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <StyledBox>
      <StyledTypography>
        Mira videos sobre <StyledName>{name}</StyledName>
      </StyledTypography>
      <StyledStack>
        {exerciseVideos?.slice(0, 4)?.map((item, index) => (
          <StyledLink
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <StyledImage src={item.video.thumbnails[0].url} alt={item.video.title} />
            <div>
              <StyledTitle>{item.video.title}</StyledTitle>
              <StyledChannelName>{item.video.channelName}</StyledChannelName>
            </div>
          </StyledLink>
        ))}
      </StyledStack>
    </StyledBox>
  );
};

export default ExerciseVideos;
