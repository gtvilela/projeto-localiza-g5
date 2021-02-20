import React, { FC, useRef, useCallback, useEffect } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web'
import * as Yup from 'yup';
import {AiOutlineCar} from 'react-icons/ai'

import getValidationErrors from '../../../../../utils/getValidationErrors';
import api from '../../../../../services/api';

import { Modal, Input, Button } from '../../../../../components/global';

interface IVehicleProps {
  id: number;
  nome: string;
}

interface IModalFormNewAndEditProps {
  toggle: boolean;
  toggleModal(): void;
  initialData: IVehicleProps | null;
  handleCloseModalAfterWinAction(type: 'new' | 'edit', data: IVehicleProps): void
}

interface IData {
  nome: string;
}

const ModalFormNewAndEdit: FC<IModalFormNewAndEditProps> = ({ toggle, toggleModal, initialData, handleCloseModalAfterWinAction }) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: IData) => {
      try {
        if (initialData) {
          await api.put(`api/veiculo/${initialData.id}`, data);
          handleCloseModalAfterWinAction('edit', { id: initialData.id, ...data})
        } else {
          const response = await api.post('api/veiculo', data);
          handleCloseModalAfterWinAction('new', response.data)
        }
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
      }
  }, [initialData]);

  return (
    <Modal title={`${initialData ? 'Editar' : 'Cadastrar'} Veículo`} toggle={toggle} toggleModal={toggleModal}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={initialData} >
        <Input name="nome" label="Nome" icon={AiOutlineCar} />
        <Button type="submit" size="medium">
          {initialData ? 'Editar' : 'Cadastrar'}
        </Button>
      </Form>
    </Modal>
  )
}

export default ModalFormNewAndEdit
