import { Tag } from "../Tag";
import { Container } from "./style";

export function Card({ data, ...rest }) {
  return (
    <Container {...rest}>

      <h2>{data.title}</h2>
      <h3>{data.description}</h3>
      
      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
