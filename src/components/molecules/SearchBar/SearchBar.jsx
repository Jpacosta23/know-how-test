import SearchIcon from '@mui/icons-material/Search'
import { IconButton, InputAdornment } from '@mui/material'
import React from 'react'
import Input from '../../atoms/Input/Input'

function SearchBar({ onChange, onClick, ...props }) {
  return (
    <Input
      id="outlined-basic"
      placeholder="search"
      fullWidth
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={onClick}
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        )
      }}
      onChange={onChange}
      {...props}
    />
  )
}

export default SearchBar
