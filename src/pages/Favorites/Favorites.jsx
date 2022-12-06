import styled from 'styled-components'
import Text from '../../components/atoms/Text/Text'
import ButtonImage from '../../components/molecules/ButtonImage/ButtonImage'
import { removeFromFavorites } from '../../context/actions'
import { useAppDispatch, useAppState } from '../../context/context'

const Title = styled(Text)`
  font-size: 24px;
  color: #9d9d9d;
  font-weight: 700;
  line-height: 24px;
  margin-bottom: 3%;
  color: #050a30;
  margin-top: 2%;
  margin-left: 20px;
`

const GifContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 100%;
`

const Container = styled('div')`
  width: 100%;
  height: 100%;
`

const Gif = styled(ButtonImage)``

function Favorites() {
  const { favorites } = useAppState()
  const dispatch = useAppDispatch()
  const handleRemoveFavorites = (id) => {
    favorites.splice(id, 1)
    removeFromFavorites(dispatch, favorites)
  }
  return (
    <Container>
      <Title>Favorite Gifs ❤️</Title>
      <GifContainer>
        {favorites
          ? favorites.map((gif, idx) => {
              return (
                <Gif
                  src={gif.images.fixed_height_small.url}
                  key={gif.id}
                  alt={gif.title}
                  onClick={handleRemoveFavorites}
                  id={idx}
                />
              )
            })
          : null}
      </GifContainer>
    </Container>
  )
}

export default Favorites
