import { FC } from 'react';
import { IConditionalNavbarContainerProps } from './IConditionalNavbarContainer';
import {
  StyledNavbar,
  StyledNavbarMobileWrapper,
  StyledNavbarTabletWrapper,
} from './StyledConditionalNavbarContainer';

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
