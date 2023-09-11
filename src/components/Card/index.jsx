import {Container} from "./style"

export function Card({ title,desc, children }) {
  return (
    <Container>
      <h2>{title}</h2>
      <h3>{desc}</h3>
      {children}
    </Container>
  )
}