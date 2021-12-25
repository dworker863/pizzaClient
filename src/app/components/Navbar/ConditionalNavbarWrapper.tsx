import { FC, ReactNode } from 'react';
import {
  StyledNavbar,
  StyledNavbarMobileWrapper,
  StyledNavbarTabletWrapper,
} from './StyledNavbar';

interface IConditionalNavbarWrapperProps {
  mobileIsActive?: boolean;
  screen: 'desktop' | 'tablet' | 'mobile';
  children: ReactNode;
}

const ConditionalNavbarWrapper: FC<IConditionalNavbarWrapperProps> = ({
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

export default ConditionalNavbarWrapper;
