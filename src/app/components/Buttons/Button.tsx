import { FC, MouseEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import StyledButton from './StyledButton';

interface IButtonProps {
  text: string;
  clickHandler: (event: MouseEvent<HTMLButtonElement>) => void;
  inverse?: boolean;
  login?: boolean;
  address?: boolean;
}

const Button: FC<IButtonProps> = ({
  text,
  clickHandler,
  inverse,
  login,
  address,
}) => {
  return (
    <StyledButton
      onClick={clickHandler}
      inverse={inverse}
      login={login}
      address={address}
    >
      {address && <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />}
      {text}
    </StyledButton>
  );
};

export default Button;
