import React from 'react';
import styled from 'styled-components';

const SectionWrapper = ({ children, backgroundColor, paddingTop, paddingBottom }) => {
    return (
        <Wrapper backgroundColor={backgroundColor} paddingTop={paddingTop} paddingBottom={paddingBottom}>
            <Container>{children}</Container>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  background-color: ${(props) => props.backgroundColor || '#f5f5f5'};
  padding-top: ${(props) => props.paddingTop || '40px'};
  padding-bottom: ${(props) => props.paddingBottom || '40px'};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export default SectionWrapper;
