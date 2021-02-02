import React, { useState } from 'react'
import ProjectModal from '../ProjectModal'
import {
  Container,
  Image,
  Description,
  Title,
  Illu,
  LinkWrapper,
  Url,
  Date,
  BottomWrapper,
} from './style'

const ProjectItem = props => {
  const {
    title,
    description,
    picture,
    stillPic,
    onlineUrl,
    date,
    content,
  } = props
  const [isOpen, setOpen] = useState(false)

  if (!stillPic) {
    return null
  }

  return (
    <>
      <Illu onClick={() => setOpen(true)} src={stillPic.publicURL} />
      <ProjectModal
        open={isOpen}
        content={content}
        onClose={() => {
          setOpen(false)
        }}
      />
    </>
  )
}

export default ProjectItem
