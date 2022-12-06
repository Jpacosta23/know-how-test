import { IconButton } from '@mui/material'
import HeartBrokenIcon from '@mui/icons-material/HeartBroken'
import styled from 'styled-components'

const ButtonImageContainer = styled('div')`
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
const IconBackground = styled(IconButton)`
  position: relative;
  bottom: 56px;
  left: 10px;
  z-index: 2;
  &:hover {
    background-color: white;
  }
`

const ButtonImage = ({ onClick, src, alt, id, ...props }) => {
  return (
    <ButtonImageContainer>
      <IconBackground onClick={() => onClick(id)}>
        <HeartBrokenIcon color="primary" style={{ fill: 'red' }} />
      </IconBackground>
      <ImageBackground
        src={src}
        alt={alt}
        aria-label={alt}
        aria-labelledby="t2"
        title={alt}
      />
    </ButtonImageContainer>
  )
}

export default ButtonImage
