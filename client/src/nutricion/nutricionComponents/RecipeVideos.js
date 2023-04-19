import React from 'react';
import styled from 'styled-components';
import { Typography, Box, Stack } from '@mui/material';
import Loader from '../../fitness/components/Loader';

const VideoContainer = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-basis: calc(25% - 40px);
    margin-right: 20px;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const VideoInfo = styled(Box)`
  padding: 10px;
  background-color: #fff;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const RecipeVideos = ({ recipeVideos, recipeName }) => {
    console.log("recipeVideos:", recipeVideos);
    console.log("recipeName:", recipeName);
    
    return (
        <Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p="20px">
            <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
                Mira videos sobre <span style={{ color: '#216B91', textTransform: 'capitalize' }}>{recipeName}</span>
            </Typography>
            <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
                {recipeVideos?.slice(0, 4)?.map((item, index) => (
                    <VideoContainer
                        key={index}
                        className="recipe-video"
                        href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Thumbnail src={item.video.thumbnails[0].url} alt={item.video.title} />
                        <VideoInfo>
                            <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000">
                                {item.video.title}
                            </Typography>
                            <Typography fontSize="14px" color="#000">
                                {item.video.channelName}
                            </Typography>
                        </VideoInfo>
                    </VideoContainer>
                ))}
            </Stack>
        </Box>
    )
}

export default RecipeVideos
