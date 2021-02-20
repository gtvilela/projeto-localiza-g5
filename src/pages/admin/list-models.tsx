import React, { FC, useState, useEffect, useCallback } from 'react';
import { FiEdit2, FiTrash, FiPlus } from 'react-icons/fi'

import api from '../../services/api';

import { Header, Container, HeaderPages, Table, Button, ButtonsGroup  } from '../../components/global/index';

import ModalFormNewAndEdit from '../../components/pages/admin/list-models/ModalFormNewAndEdit';
import ModalDelete from '../../components/pages/admin/global/ModalDelete';

interface IModelProps {
  id: number;
  nome: string;
}

type IStateProps = {
  isOpen: boolean;
  type: 'edit' | 'new' | 'delete';
  dataEdit: IModelProps | null;
}

const ListModels: FC = () => {
  const [models, setModels] = useState([]);
  const [modalInfo, setModalInfo] = useState<IStateProps>({
    isOpen: false,
    type: 'new',
    dataEdit: null
  })

  useEffect(() => {
    api.get('api/modelo/buscarTodos')
    .then(response => {
      setModels(response.data)
    })
  }, [])

  const handleClickAction = useCallback((type: 'edit' | 'new' | 'delete', data?: IModelProps) => {
    setModalInfo({
      isOpen: true,
      type,
      dataEdit: data
    })
  }, [setModalInfo])

  const handleCloseModal = useCallback(() => {
    setModalInfo({ ...modalInfo, isOpen: false })
  }, [setModalInfo]);

  const handleCloseModalAfterWinAction = useCallback((type: 'new' | 'edit', data: IModelProps) => {
    if (type === 'new') {
      // setModels([{ id: 1, nome: 'gui'}])
      handleCloseModal()
    } else if ( type === 'edit') {
      // setModels(
      //   models.map(mappedModels =>
      //     mappedModels.id === data.id ? { ...data } : mappedModels)
      // )
      handleCloseModal()
    }
  }, [models, setModels, handleCloseModal])

  return (
    <>
      <Header hidden={false} />
      <Container>
        <HeaderPages title="Gerenciar Marcas" />
          <Table>
            <thead>
              <tr>
                <th align="left">
                  Nome
                </th>
                <th align="right">
                  <Button size="medium" onClick={() => handleClickAction('new')}>
                    <FiPlus />
                    Adicionar
                  </Button>
                </th>
              </tr>
            </thead>
            <tbody>
              {models.map(model => (
                <tr key={model.id}>
                  <td width="95%">
                    {model.nome}
                  </td>
                  <td align="right">
                    <ButtonsGroup>
                      <Button
                        color="yellow"
                        size="medium"
                        onClick={() => handleClickAction('edit', {id: model.id, nome: model.nome})}
                        radius
                      >
                        <FiEdit2 />
                      </Button>
                      <Button
                        color="red"
                        size="medium"
                        onClick={() => handleClickAction('delete', {id: model.id, nome: model.nome})}
                        radius
                      >
                        <FiTrash />
                      </Button>
                    </ButtonsGroup>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
            {(modalInfo.type === 'new' || modalInfo.type === 'edit') && (
              <ModalFormNewAndEdit
                toggle={modalInfo.isOpen}
                toggleModal={handleCloseModal}
                initialData={modalInfo.dataEdit}
                handleCloseModalAfterWinAction={handleCloseModalAfterWinAction}
              />
            )}

            {modalInfo.type === 'delete' && (
              <ModalDelete
                toggle={modalInfo.isOpen}
                toggleModal={handleCloseModal}
                link="categoria"
                id={modalInfo.dataEdit.id}
              />
            )}
      </Container>
    </>
  )
}

export default ListModels
