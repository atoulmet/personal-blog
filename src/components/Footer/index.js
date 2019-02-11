import React from 'react'

import { Container, ItemsWrapper, SocialItem, StyledLink } from './style'
import githubLogo from '../../../content/assets/github-logo.png'
import linkedinLogo from '../../../content/assets/linkedin-logo.png'
import twitterLogo from '../../../content/assets/twitter-logo.svg'
import emailLogo from '../../../content/assets/email-logo.png'
import {getLocaleColor, HighlightedItem} from '../Common'

const socialLinks = [
    {
        link: 'https://github.com/atoulmet',
        image: githubLogo
    },
    {
        link: 'https://twitter.com/xiyaseed',
        image: twitterLogo
    },
    {
        link: 'https://www.linkedin.com/in/alexia-toulmet-55742383/',
        image: linkedinLogo
    },
    {
        link: 'mailto:alexia.toulmet@gmail.com',
        image: emailLogo
    }
]

class Footer extends React.PureComponent {
    getSocialItems = (localeColor) => (
        socialLinks.map((item, index) => 
        <StyledLink key={`link-${index}`} href={item.link} target="_blank">
            <SocialItem key={`social-item-${index}`} src={item.image} target="_blank" localeColor={localeColor}></SocialItem>
        </StyledLink>
        )
    )

    render() {
        const localeColor = getLocaleColor(this.props.location.pathname)
        const socialItems = this.getSocialItems(localeColor)
        
        return (
            <Container>
                <HighlightedItem localeColor={localeColor}>Let's get in touch !</HighlightedItem>
                    <ItemsWrapper>
                        {socialItems}
                    </ItemsWrapper>
                
            </Container>
        )
    }
}

export default Footer