import React from 'react'

import { Container, Title, Date, Text, Duration, DateWrapper, Content, Cover } from './style'

class DesktopNavbar extends React.PureComponent {
    render() {
        const {title, date, text, duration, cover_image} = this.props

        return (
            <Container>
                    {cover_image && <Cover url={cover_image.publicURL} />}
                <Content>
                <Title {...this.props}>
                    {title} 
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
