import { Form, Formik } from 'formik';
import { FC } from 'react';
import { IStyledActiveComponent } from '../../../commonInterfaces/IStyledActiveComponent';
import {
  addressFormFields,
  addressInitialValues,
} from '../../../utils/staticData';
import { addressValidation } from '../../../utils/validation';
import Button from '../../Elements/Button/Button';
import FormItem from '../../Elements/FormItem/FormItem';
import {
  StyledAddressModal,
  StyledAddressModalButtonsWrapper,
} from './StyledAddressModal';

const AddressModal: FC<IStyledActiveComponent> = ({ isActive }) => {
  console.log(isActive);

  return (
    <StyledAddressModal isActive={isActive}>
      <Formik
        initialValues={addressInitialValues}
        validationSchema={addressValidation}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        <Form>
          {addressFormFields.map(([name, labelText, type, placeholder]) => (
            <FormItem
              name={name}
              labelText={labelText}
              type={type}
              placeholder={placeholder}
            />
          ))}
          <StyledAddressModalButtonsWrapper>
            <Button text="Отправить" type="submit" />
          </StyledAddressModalButtonsWrapper>
        </Form>
      </Formik>
    </StyledAddressModal>
  );
};

export default AddressModal;
