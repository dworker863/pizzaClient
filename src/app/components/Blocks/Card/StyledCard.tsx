import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledCard = styled.div`
  ${tw`
    flex
    flex-col
    bg-white
    rounded-xl
    p-4
    mb-14
  `}

  width: 32%;
  font-family: Montserrat, sans-serif;
  color: ${(props) => props.theme.colors.lightBrown};
`;

export const StyledTitle = styled.h3`
  ${tw`
    font-bold
    text-lg
    mb-2
    mt-5
  `}

  color: ${(props) => props.theme.colors.brown};
  letter-spacing: 0.04px;
`;

export const StyledDescription = styled.p`
  ${tw`
    text-sm
    mb-10
  `}
`;

export const StyledOrder = styled.div`
  ${tw`
    flex
    justify-between
    mt-auto
  `}
`;

export const StyledPrice = styled.span`
  ${tw`
    text-xl
  `}

  line-height: 40px;
  color: ${(props) => props.theme.colors.brown};
  font-weight: 600;
`;
