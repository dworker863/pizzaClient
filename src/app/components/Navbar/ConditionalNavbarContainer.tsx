import { FC } from 'react';
import { IConditionalNavbarContainerProps } from '../../interfaces/navbar';
import {
  StyledNavbar,
  StyledNavbarMobileContainer,
  StyledNavbarTabletContainer,
} from './StyledNavbar';

const ConditionalNavbarContainer: FC<IConditionalNavbarContainerProps> = ({
  mobileIsActive,
  screen,
  children,
}) => {
  return (
    <>
      {screen === 'desktop' && <StyledNavbar>{children}</StyledNavbar>}
      {screen === 'tablet' && (
        <StyledNavbarTabletContainer>{children}</StyledNavbarTabletContainer>
      )}
      {screen === 'mobile' && (
        <StyledNavbarMobileContainer isActive={mobileIsActive}>
          {children}
        </StyledNavbarMobileContainer>
      )}
    </>
  );
};

export default ConditionalNavbarContainer;
