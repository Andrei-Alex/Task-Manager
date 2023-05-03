export interface IInputs {
  label: string;
  placeholder: string;
  required: boolean;
  id: string;
}

export interface IForm {
  inputs: IInputs[];
  submitHandler: () => void;
  title: string;
}
