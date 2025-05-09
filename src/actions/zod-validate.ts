import { inputValidations } from '$util/validations';
import type { Action } from 'svelte/action';

type InputType = keyof typeof inputValidations;

type Params = {
  type: string;
  setInvalid: (value: boolean) => void;
};

export const zodValidate: Action<HTMLInputElement, Params> = (node, params) => {
  let { type, setInvalid } = params;
  let isEnabled = type && type in inputValidations;

  const validate = () => {
    if (!isEnabled || !type) return;

    const schema = inputValidations[type as InputType];
    const result = schema.safeParse(node.value);

    setInvalid(node.value ? !result.success : false);
    node.setCustomValidity(result.success ? '' : ' ');
  };

  if (isEnabled) {
    node.addEventListener('input', validate);
  }

  return {
    update(newParams) {
      type = newParams.type;
      setInvalid = newParams.setInvalid;
      isEnabled = type && type in inputValidations;
    },
    destroy() {
      if (isEnabled) {
        node.removeEventListener('input', validate);
      }
    }
  };
};
