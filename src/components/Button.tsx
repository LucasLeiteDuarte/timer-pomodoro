import { ButtonContainer, ButtonVariant } from "./Button.Styles";

interface ButtonProps {
  variant?: ButtonVariant;
}
export function Button({ variant = "primary" }: ButtonProps) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>;
}