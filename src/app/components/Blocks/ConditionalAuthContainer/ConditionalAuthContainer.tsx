import { FC } from 'react';
import {
  StyledAuthModal,
  StyledAuthModalMobile,
  StyledAuthModalTablet,
} from './StyledConditionalAuthContainer';
import { IConditionalAuthContainerProps } from './IConditionalAuthContainer';

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
