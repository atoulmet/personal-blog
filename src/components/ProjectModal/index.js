import React from 'react'

import {
  StyledModal,
  ProjectImage,
  Title,
  Description,
  LiveLink,
  closeButtonStyle,
  Wrapper,
  ModalStyle,
} from './style'

const ProjectModal = ({ open, onClose, content }) => {
  const { onlineUrl, animPic, stillPic, title } = content.frontmatter
  const description = content.html

  return (
    <StyledModal
      open={open}
      onClose={onClose}
      center
      closeOnOverlayClick
      styles={{ closeButton: closeButtonStyle, modal: ModalStyle }}
    >
      <Wrapper>
        {animPic && <ProjectImage src={animPic.publicURL} />}
        <Title>{title}</Title>
        {onlineUrl && (
          <LiveLink href={onlineUrl} target="_blank">
            View more
          </LiveLink>
        )}
        <Description dangerouslySetInnerHTML={{ __html: description }} />
      </Wrapper>
    </StyledModal>
  )
}

export default ProjectModal
