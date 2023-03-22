import React, { useContext } from 'react';
import styled from 'styled-components';
import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import RightArrowIcon from '../../assets/img/right-arrow.png';
import LeftArrowIcon from '../../assets/img/left-arrow.png';

const ArrowTypography = styled.span`
  cursor: pointer;
`;

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <ArrowTypography onClick={() => scrollPrev()} className="right-arrow">
            <img src={LeftArrowIcon} alt="right-arrow" width="20px" />
        </ArrowTypography>
    );
};

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <ArrowTypography onClick={() => scrollNext()} className="left-arrow">
            <img src={RightArrowIcon} alt="right-arrow" width="20px" />
        </ArrowTypography>
    );
};

const StyledBox = styled.div`
  margin: 0 40px;
`;

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {data.map((item) => (
                <StyledBox key={item.id || item} itemId={item.id || item} title={item.id || item}>
                    {bodyParts ? (
                        <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
                    ) : (
                        <ExerciseCard exercise={item} />
                    )}
                </StyledBox>
            ))}
        </ScrollMenu>
    );
};

export default HorizontalScrollbar;
