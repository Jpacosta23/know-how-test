import styled from 'styled-components'
import Checkbox from '../../atoms/Checkbox/Checkbox'

const CheckboxImageContainer = styled('div')`
  vertical-align: flex-end;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  width: 150px;
  height: 150px;
  margin: 20px;
`
const ImageBackground = styled('img')`
  position: absolute;
  object-fit: fill;
  width: 150px;
  height: 150px;
`
const CheckboxBackground = styled(Checkbox)`
  position: relative;
  background-color: white;
  bottom: 56px;
  left: 10px;
  z-index: 2;
  &:hover {
    background-color: white;
  }
`

const CheckboxImage = ({ checked, onChange, src, alt, ...props }) => {
  return (
    <CheckboxImageContainer>
      <CheckboxBackground checked={checked} onChange={onChange} {...props} />
      <ImageBackground
        src={src}
        alt={alt}
        aria-label={alt}
        aria-labelledby="t2"
        title={alt}
      />
    </CheckboxImageContainer>
  )
}

export default CheckboxImage
