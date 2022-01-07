import { FC } from 'react';
import { IConditionalNavbarContainerProps } from '../../interfaces/navbar';
import {
  StyledNavbar,
  StyledNavbarMobileWrapper,
  StyledNavbarTabletWrapper,
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
        <StyledNavbarTabletWrapper>{children}</StyledNavbarTabletWrapper>
      )}
      {screen === 'mobile' && (
        <StyledNavbarMobileWrapper isActive={mobileIsActive}>
          {children}
        </StyledNavbarMobileWrapper>
      )}
    </>
  );
};

export default ConditionalNavbarContainer;
