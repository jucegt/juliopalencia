import { inputValidations } from '$util/validations';
import type { Action } from 'svelte/action';

export const zodValidate: Action<HTMLInputElement, keyof typeof inputValidations> = (
  node,
  type
) => {
  const validate = () => {
    const value = node.value;
    const schema = inputValidations[type];

    const result = schema.safeParse(value);
    node.setCustomValidity(result.success ? '' : result.error.issues[0].message);
  };

  node.addEventListener('input', validate);

  return {
    update(newType) {
      type = newType;
    },
    destroy() {
      node.removeEventListener('input', validate);
    }
  };
};
