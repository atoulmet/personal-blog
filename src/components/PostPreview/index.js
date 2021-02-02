import React from 'react'
import MediaQuery from 'react-responsive'

import { Container, StyledLink, Date, Text, Duration, DateWrapper, Content, Cover, PostDescription } from './style'
import { getLocaleColor, HighlightedItem } from '../Common'

class DesktopNavbar extends React.PureComponent {
    render() {
        const { title, date, text, duration, cover_image, pathname, to } = this.props
        const localeColor = getLocaleColor(pathname)

        return (
            <Container>
                <Content>
                    <StyledLink to={to} >
                        {cover_image && <Cover url={cover_image.publicURL} />}
                        <PostDescription>
                            <MediaQuery minDeviceWidth={700}>
                                {(mobile) => (
                                    mobile ? (
                                        <HighlightedItem localeColor={localeColor}>
                                            {title}
                                        </HighlightedItem>) :
                                        title

                                )}
                            </MediaQuery>
                        </PostDescription>
                    </StyledLink>
                    <DateWrapper>
                        <Date>
                            {date}
                        </Date>
                        •
                <Duration>
                            {duration}
                        </Duration>
                    </DateWrapper>
                    <Text>
                        {text}
                    </Text>
                </Content>
            </Container>
        )
    }
}

export default DesktopNavbar
