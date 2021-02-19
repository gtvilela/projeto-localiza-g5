import React from 'react'

import { ModalContainer, ModalWindow, ModalShadow } from './styles'
import { FiX } from 'react-icons/fi'

interface ModalProps {
  title: string
  toggle: boolean
  toggleModal: () => void
}

const Modal: React.FC<ModalProps> = ({
  children,
  title,
  toggle,
  toggleModal
}) => {
  return (
    <ModalContainer toggle={toggle}>
      <ModalWindow>
        <header>
          <h2>{title}</h2>
          <a href="#" onClick={toggleModal}>
            <FiX size={20} />
          </a>
        </header>
        <main>{children}</main>
      </ModalWindow>
      <ModalShadow toggle={toggle} onClick={toggleModal}></ModalShadow>
    </ModalContainer>
  )
}

export default Modal
