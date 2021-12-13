import { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const StyledAddressButton = styled.button`
  &:before {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 337px;
    height: 48px;
    border-radius: 24px;
    background-color: rgba(5, 150, 105);
    transition: all 0.2s;
  }

  &:hover {
    &:before {
      transform: scale(1.083333333333333);
    }
  }

  ${tw`
  relative
  py-3
  px-20
  rounded-3xl
  font-bold
  text-white
  bg-green-600
  `}
`;

const AddressButon: FC = () => {
  return (
    <div>
      <StyledAddressButton>
        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
        Укажите свой адрес
      </StyledAddressButton>
    </div>
  );
};

export default AddressButon;
