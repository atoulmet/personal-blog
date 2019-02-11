import React from 'react'
import MediaQuery from 'react-responsive'

import { Container, Title, Date, Text, Duration, DateWrapper, Content, Cover } from './style'
import { getLocaleColor, HighlightedItem } from '../Common'

class DesktopNavbar extends React.PureComponent {
    render() {
        const { title, date, text, duration, cover_image, pathname } = this.props
        const localeColor = getLocaleColor(pathname)

        return (
            <Container>
                {cover_image && <Cover url={cover_image.publicURL} />}
                <Content>
                    <Title {...this.props} >
                    <MediaQuery minDeviceWidth={700}>
                        {(mobile) => (
                            mobile ? (
                            <HighlightedItem localeColor={localeColor}>
                                {title}
                            </HighlightedItem>) :
                                title
                        )}
                    </MediaQuery>

                    </Title>
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
