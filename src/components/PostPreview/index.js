import React from 'react'

import { Container, Title, Date, Text, Duration, DateWrapper, Content, Cover } from './style'
import {getLocaleColor, HighlightedItem} from '../Common'

class DesktopNavbar extends React.PureComponent {
    render() {
        const {title, date, text, duration, cover_image, pathname} = this.props
        const localeColor = getLocaleColor(pathname)

        return (
            <Container>
                    {cover_image && <Cover url={cover_image.publicURL} />}
                <Content>
                    <HighlightedItem localeColor={localeColor}>
                    <Title {...this.props} >
                        {title} 
                    </Title>
                </HighlightedItem>
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
