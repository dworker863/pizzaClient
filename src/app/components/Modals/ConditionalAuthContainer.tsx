import { FC } from 'react';
import { IConditionalAuthContainerProps } from '../../interfaces/authModal';
import {
  StyledAuthModal,
  StyledAuthModalMobile,
  StyledAuthModalTablet,
} from './StyledAuth';

const ConditionalAuthContainer: FC<IConditionalAuthContainerProps> = ({
  screen,
  children,
}) => {
  return (
    <>
      {screen === 'desktop' && <StyledAuthModal>{children}</StyledAuthModal>}
      {screen === 'tablet' && (
        <StyledAuthModalTablet>{children}</StyledAuthModalTablet>
      )}
      {screen === 'mobile' && (
        <StyledAuthModalMobile>{children}</StyledAuthModalMobile>
      )}
    </>
  );
};

export default ConditionalAuthContainer;
