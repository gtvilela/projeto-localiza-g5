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
    await api.delete(`api/${link}/${id}`)
  }, [])

  return (
    <Modal title="Deletar marca" toggle={toggle} toggleModal={toggleModal}>
      <p style={{marginBottom: 32}}>
        Você tem certeza que deseja deletar esse item?
      </p>
      <ButtonsGroup>
      <Button size="medium" color="red" onClick={toggleModal}>
          Cancelar
        </Button>
        <Button size="medium" color="green" onClick={handleDeleteElement}>
          Confimar
        </Button>
        </ButtonsGroup>
    </Modal>
  )
}

export default ModalDelete;
