import { Pagination, Stack } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import Text from '../../components/atoms/Text/Text'
import CheckboxImage from '../../components/molecules/CheckboxImage/CheckboxImage'
import SearchBar from '../../components/molecules/SearchBar/SearchBar'
import {
  addToFavorites,
  removeFromFavorites,
  searchGifs
} from '../../context/actions'
import { useAppDispatch, useAppState } from '../../context/context'

const Container = styled('div')`
  width: 100%;
  height: 100%;
`

const SearchContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

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
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding-top: 20px;
`

const Gif = styled(CheckboxImage)``

function Search() {
  const { data, favorites } = useAppState()
  const limit = 25
  const [currentPage, setCurrentPage] = useState(1)
  const numberOfPages = useMemo(
    () =>
      data?.pagination?.total_count
        ? Math.ceil(data.pagination.total_count / limit)
        : 0,
    [data?.pagination?.total_count]
  )

  const offset = useMemo(() => limit * (currentPage - 1), [currentPage])
  const dispatch = useAppDispatch()
  const [query, setQuery] = useState('')
  const handleOnChange = (evt) => {
    const { value } = evt.target
    setQuery(value)
  }

  const handleChangePage = (event, value) => {
    event.preventDefault()
    setCurrentPage(value)
  }

  useEffect(() => {
    searchGifs(query, dispatch, offset, limit)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    searchGifs(query, dispatch, offset, limit)
    setCurrentPage(1)
  }

  const handleFavorites = (event) => {
    const { checked, name } = event.target
    if (checked) {
      const imageToAdd = data.data.find((gif) => gif.id === name)
      addToFavorites(dispatch, [...favorites, imageToAdd])
    } else {
      const imageToRemoveIndex = favorites.findIndex((gif) => gif.id === name)
      favorites.splice(imageToRemoveIndex, 1)
      removeFromFavorites(dispatch, favorites)
    }
  }

  return (
    <Container>
      <Title>Find your favorite giphs 😜</Title>
      <SearchContainer>
        <SearchBar onChange={handleOnChange} onClick={handleSubmit} />
        {data?.data?.length > 0 ? (
          <>
            <GifContainer>
              {data?.data
                ? data.data.map((gif) => {
                    return (
                      <Gif
                        src={gif.images.fixed_height_small.url}
                        key={gif.id}
                        alt={gif.title}
                        onChange={handleFavorites}
                        checked={favorites.some(
                          (favorite) => favorite.id === gif.id
                        )}
                        name={gif.id}
                      />
                    )
                  })
                : null}
            </GifContainer>
            <Stack spacing={3}>
              <Pagination
                color="primary"
                count={numberOfPages}
                page={currentPage}
                onChange={handleChangePage}
              />
            </Stack>
          </>
        ) : null}
      </SearchContainer>
    </Container>
  )
}

export default Search
