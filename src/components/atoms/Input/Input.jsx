import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField'

const InputStyled = styled(TextField)`
  width: 60%;
  .MuiInputBase-input {
    font-size: 18px;
    padding: 10px 14px;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #050a30;
    }
  }
`

const Input = ({ onChange, ...props }) => {
  return (
    <InputStyled
      fullWidth
      variant="outlined"
      InputLabelProps={{ shrink: false }}
      onChange={onChange}
      {...props}
    />
  )
}

export default Input
