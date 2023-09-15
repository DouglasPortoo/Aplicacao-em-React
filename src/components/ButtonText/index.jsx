import {FiArrowLeft} from 'react-icons/fi'
import {Container} from './style'

export function ButtonText ({title, ...rest}){
  return(
    <Container>
        <FiArrowLeft/>
      <button {...rest} >{title}</button>
    </Container>
  )
}