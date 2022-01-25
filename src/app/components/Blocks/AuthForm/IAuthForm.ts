import { MouseEvent } from 'react';
import {
  IAuthFormValues,
  TAnchorText,
  TMode,
} from '../AuthFormContainer/IAuthContainer';

export interface IAuthFormProps {
  formFields: string[][];
  mode: TMode;
  anchorText: TAnchorText;
  toggleAnchorText: (event: MouseEvent<HTMLAnchorElement>) => void;
  submitClickHandler: (values: IAuthFormValues) => void;
}
