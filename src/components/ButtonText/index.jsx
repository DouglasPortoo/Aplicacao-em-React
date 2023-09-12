import {FiArrowLeft} from 'react-icons/fi'
import {Container} from './style'

export function ButtonText ({title}){
  return(
    <Container>
        <FiArrowLeft/>
      <button>{title}</button>
    </Container>
  )
}