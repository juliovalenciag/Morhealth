import React from 'react';
import styled from 'styled-components';
import { InfinitySpin } from 'react-loader-spinner';

const StyledStack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Loader = () => (
    <StyledStack>
        <InfinitySpin color="grey" />
    </StyledStack>
);

export default Loader;