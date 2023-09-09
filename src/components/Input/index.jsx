import { Container } from "./style"

export const Input = ({placeholder, ...rest}) => {
  return (
    <Container
    placeholder= {placeholder}
    {...rest}
    >
    </Container >
  )
}

