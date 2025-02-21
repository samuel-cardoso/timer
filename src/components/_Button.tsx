import { ButtonContainer, ButtonVariant } from "./_Button.styles";
interface ButtonProps {
  variant?: ButtonVariant;
}

export default function button({ variant = "primary" }: ButtonProps) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>;
}
