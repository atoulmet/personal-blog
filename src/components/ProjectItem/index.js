import React from 'react'

import { Container, Image, Description, Title, Wrapper } from './style'

class ProjectItem extends React.PureComponent {
    render() {
        const { title, description, picture } = this.props

        return (
            <Container >
                <Image picture={picture ? picture.publicURL: '' } />
                <Wrapper>
                    <Title>{title}</Title>
                    <Description dangerouslySetInnerHTML={{ __html: description }}></Description>
                </Wrapper>
            </Container>
        )
    }
}

export default ProjectItem
