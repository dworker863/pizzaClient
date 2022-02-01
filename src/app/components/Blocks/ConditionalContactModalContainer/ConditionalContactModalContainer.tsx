import { FC } from 'react';
import { IConditionalContactModalContainerProps } from './IConditionalContactModalContainer';
import {
  StyledContactModal,
  StyledContactModalMobileWrapper,
  StyledContactModalTabletWrapper,
} from './StyledConditionalContactModalContainer';

const ConditionalContactModalContainer: FC<
  IConditionalContactModalContainerProps
> = ({ mobileIsActive, screen, children }) => {
  return (
    <>
      {screen === 'desktop' && (
        <StyledContactModal>{children}</StyledContactModal>
      )}
      {screen === 'tablet' && (
        <StyledContactModalTabletWrapper>
          {children}
        </StyledContactModalTabletWrapper>
      )}
      {screen === 'mobile' && (
        <StyledContactModalMobileWrapper isActive={mobileIsActive}>
          {children}
        </StyledContactModalMobileWrapper>
      )}
    </>
  );
};

export default ConditionalContactModalContainer;
