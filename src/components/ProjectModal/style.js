import styled from 'styled-components'
import Modal from 'react-responsive-modal'

import { media } from '../Common/helpers'

export const StyledModal = styled(Modal)`
`

export const ModalStyle = {
    borderRadius: '5px',
    fontFamily: 'Open Sans, sans-serif',
}

export const Wrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;
padding: 30px 0;
`

export const ProjectImage = styled.img`
border-radius: 5px;
width: 600px;
box-shadow: rgba(37, 59, 85, 0.25) 0px 2px 5px;
`

export const Title = styled.div`
font-weight: 600;`

export const Description = styled.div`
width: 90%;
margin-top: 15px;
text-align: center;
min-width: 700px;
${media.maxWidth.md} {
    min-width: 600px;
        }
${media.maxWidth.sm} {
    min-width: inherit;
}
`

export const LiveLink = styled.a`
outline: none;
box-shadow: none;
`

export const closeButtonStyle = {
    outline: 'none',
    cursor: 'pointer'
}