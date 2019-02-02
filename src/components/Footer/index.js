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
    getSocialItems = () => (
        socialLinks.map((item, index) => 
        <StyledLink key={`link-${index}`} href={item.link}>
            <SocialItem key={`social-item-${index}`} src={item.image} target="_blank"></SocialItem>
        </StyledLink>
        )
    )

    render() {
        const socialItems = this.getSocialItems()
        const localeColor = getLocaleColor(this.props.location.pathname)
        
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

const socialQuery = graphql`
    query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpeg/" }) {
        childImageSharp {
            fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
        }
        }
    }
    }
`

export default Footer