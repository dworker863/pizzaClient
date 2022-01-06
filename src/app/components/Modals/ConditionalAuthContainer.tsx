import { FC, ReactNode } from 'react';
import {
  StyledAuthModal,
  StyledAuthModalMobile,
  StyledAuthModalTablet,
} from './StyledAuth';

interface IConditionalAuthContainerProps {
  screen: 'desktop' | 'tablet' | 'mobile';
  children: ReactNode;
}

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
