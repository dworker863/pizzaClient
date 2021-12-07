import { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

interface ButtonProps {
  location?: boolean;
  text: string;
}

const StyledButton = styled.button`
  ${tw`
  py-3
  px-20
  rounded-3xl
  font-bold
  text-white
  bg-green-600
  hover:px-24
  transition-all
  `}
`;

const Button: FC<ButtonProps> = ({ text, location }) => {
  return (
    <div>
      <StyledButton>
        {location ? (
          <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
        ) : null}
        {text}
      </StyledButton>
    </div>
  );
};

export default Button;
