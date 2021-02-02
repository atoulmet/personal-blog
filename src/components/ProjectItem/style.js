import styled from 'styled-components'

import { colors } from '../Common'
import { media } from '../Common/helpers'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 30px;
  ${media.maxWidth.sm} {
    flex-direction: column;
    width: 100%;
  }
`

export const Image = styled.div`
    border-radius: 50%;
    height: 110px;
    width: 110px;
    background-image: url("${({ picture }) => picture}");
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: 50%; 
    background-color: ${colors.yellow}
`

export const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  ${media.maxWidth.xs} {
    display: flex;
    justify-content: center;
  }
`

export const Illu = styled.img`
  display: flex;
  height: 250px;
  width: 250px;
  border-radius: 5px;
  margin: 0px 20px 40px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: rgb(37 59 85 / 25%) 0px 2px 5px;
  transition: all 0.2s linear 0s;
  cursor: pointer;
`

export const LinkWrapper = styled.a`
  cursor: ${({ href }) => (href ? 'pointer' : 'auto')};
  box-shadow: none;
  &:hover {
    box-shadow: none !important;
  }
`

export const Description = styled.div`
  max-width: 500px;
`

export const OnlineLink = styled.a`
  box-shadow: none;
  &:hover {
    box-shadow: none !important;
  }
`

export const Date = styled.div`
  margin-right: 15px;
`

export const Url = styled.div`
  margin-left: 15px;
`

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
