import { Container } from "./style";

export const Button = ({ title, ...rest }) => {
  return (
    <Container 
    type="button" 
    {...rest}
    >
      {title}
    </Container>
  );
};

export default Button;
