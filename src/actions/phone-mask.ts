export function phoneMask(node: HTMLInputElement, p0: boolean | undefined) {
  const formatPhone = (raw: string): string => {
    let digits = raw.replace(/\D/g, '');

    if (digits.length > 10) digits = digits.slice(0, 10);

    if (digits.length > 6) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    } else if (digits.length > 3) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    } else if (digits.length > 0) {
      return `(${digits}`;
    }

    return '';
  };

  const handleInput = (e: Event) => {
    const input = e.target as HTMLInputElement;
    const cursorPosition = input.selectionStart ?? 0;
    const previousLength = input.value.length;

    const formatted = formatPhone(input.value);
    input.value = formatted;

    const newLength = formatted.length;
    const offset = newLength - previousLength;
    input.setSelectionRange(cursorPosition + offset, cursorPosition + offset);
  };

  const blockNonNumeric = (e: KeyboardEvent) => {
    if (
      !/[0-9]/.test(e.key) &&
      !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)
    ) {
      e.preventDefault();
    }
  };

  node.addEventListener('input', handleInput);
  node.addEventListener('keydown', blockNonNumeric);

  return {
    destroy() {
      node.removeEventListener('input', handleInput);
      node.removeEventListener('keydown', blockNonNumeric);
    }
  };
}
