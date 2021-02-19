import React, {FC, useCallback  } from 'react';
import api from '../../../../../services/api';
import { Modal, ButtonsGroup , Button } from '../../../../../components/global';


interface IModalDeleteProps {
  toggle: boolean;
  toggleModal(): void;
  id: number;
  link: string;
}


const ModalDelete: FC<IModalDeleteProps> = ({ toggle, toggleModal, id, link }) => {

  const handleDeleteElement = useCallback(async () => {
    await api.delete(`/${link}/${id}`)
  }, [])

  return (
    <Modal title="Deletar marca" toggle={toggle} toggleModal={toggleModal}>
      <ButtonsGroup>
      <Button size="medium">
          Cancelar
        </Button>
        <Button size="medium" color="red" onClick={handleDeleteElement}>
          Confimar
        </Button>
        </ButtonsGroup>
    </Modal>
  )
}

export default ModalDelete;
