
import { Tag } from "../Tag";
import { Container, Star } from "./style";
import { AiFillStar } from 'react-icons/ai'

export function Card({ data, ...rest }) {
  
  let stars = Number(data.rating)
  const items =[...(new Array(stars).keys())]

  return (
    <Container {...rest}>
      <h2>{data.title}</h2>
      <Star>{items.map((index)=>(
        <AiFillStar key={index}/>
      ))}<span>({stars}) </span></Star>
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
