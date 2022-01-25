import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { IButtonProps } from './IButton';
import { StyledButton } from './StyledButton';

const Button: FC<IButtonProps> = ({
  text,
  clickHandler,
  type,
  inverse,
  login,
  address,
}) => {
  return (
    <StyledButton
      onClick={clickHandler}
      type={type}
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
