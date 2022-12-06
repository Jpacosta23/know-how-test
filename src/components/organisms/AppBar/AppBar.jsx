import React from 'react'
import { AppBar } from '@mui/material'
import Text from '../../atoms/Text/Text'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const navItems = [
  { name: 'Search', route: '/' },
  { name: 'Favorites', route: '/favorites' }
]

const NavContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
`

const RoutesContainer = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 10%;
  width: 70%;
`

const StyledLink = styled(Link)`
  margin-left: 20px;
  margin-right: 20px;
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 0.15px;
  font-style: normal;
  font-weight: normal;
  text-decoration: none;
  font-family: 'Roboto';
  font-color: #050a30;
  &:focus,
  &:hover,
  &:visited,
  &:link {
    color: #050a30;
  }

  &:active {
    color: #ececec;
  }
`

const StyledAppBar = styled(AppBar)`
  background: #7ec8e3;
`

const StyledText = styled(Text)`
  color: #050a30;
`

function NavBar() {
  return (
    <StyledAppBar position="static">
      <NavContainer>
        <StyledText sx={{ my: 2 }}>Know How Test</StyledText>
        <RoutesContainer>
          {navItems.map((item, idx) => {
            return (
              <StyledLink key={`${item.name}-${idx}`} to={item.route}>
                {item.name}
              </StyledLink>
            )
          })}
        </RoutesContainer>
      </NavContainer>
    </StyledAppBar>
  )
}

export default NavBar
