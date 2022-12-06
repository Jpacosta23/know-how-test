import styled from 'styled-components'
import CheckboxMUI from '@mui/material/Checkbox'

const StyleCheckbox = styled(CheckboxMUI)`
  width: 8px;
  height: 8px;
  border-radius: 1px;
`

const Checkbox = ({ ...props }) => {
  return (
    <StyleCheckbox
      {...props}
      sx={{
        color: 'gray'
      }}
    />
  )
}

export default Checkbox
