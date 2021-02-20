import React, { FC, useState, useEffect, useCallback } from 'react';
import { FiEdit2, FiTrash, FiPlus } from 'react-icons/fi'

import api from '../../services/api';

import { Header, Container, HeaderPages, Table, Button, ButtonsGroup  } from '../../components/global/index';

import ModalFormNewAndEdit from '../../components/pages/admin/list-vehicles/ModalFormNewAndEdit';
import ModalDelete from '../../components/pages/admin/global/ModalDelete';

interface IVehicleProps {
  id: number;
  placa: string;
  nome: string;
  modelo: {
    nome: string;
  }
}

type IStateProps = {
  isOpen: boolean;
  type: 'edit' | 'new' | 'delete';
  dataEdit: IVehicleProps | null;
}

const ListVehicles: FC = () => {
  const [vehicles, setVehicles] = useState([]);
  const [modalInfo, setModalInfo] = useState<IStateProps>({
    isOpen: false,
    type: 'new',
    dataEdit: null
  })

  useEffect(() => {
    api.get('api/veiculo/buscarTodos')
    .then(response => {
      setVehicles(response.data)
    })
  }, [])

  const handleClickAction = useCallback((type: 'edit' | 'new' | 'delete', data?: IVehicleProps) => {
    setModalInfo({
      isOpen: true,
      type,
      dataEdit: data
    })
  }, [setModalInfo])

  const handleCloseModal = useCallback(() => {
    setModalInfo({ ...modalInfo, isOpen: false })
  }, [setModalInfo]);

  const handleCloseModalAfterWinAction = useCallback((type: 'new' | 'edit', data: IVehicleProps) => {
    if (type === 'new') {
      setVehicles(oldVehicles => [...oldVehicles, data])
      handleCloseModal()
    } else if ( type === 'edit') {
      setVehicles(
        vehicles.map(mappedVehicles =>
          mappedVehicles.id === data.id ? { ...data } : mappedVehicles)
      )
      handleCloseModal()
    }
  }, [setVehicles, handleCloseModal])

  return (
    <>
      <Header hidden={false} />
      <Container>
        <HeaderPages title="Gerenciar Modelos" />
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
              {vehicles.map(vehicle => (
                <tr key={vehicle.id}>
                  <td width="95%">
                    {vehicle.modelo.nome}
                  </td>
                  <td align="right">
                    <ButtonsGroup>
                      <Button
                        color="yellow"
                        size="medium"
                        onClick={() => handleClickAction('edit', vehicle)}
                        radius
                      >
                        <FiEdit2 />
                      </Button>
                      <Button
                        color="red"
                        size="medium"
                        onClick={() => handleClickAction('delete', vehicle)}
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
                link="veiculo"
                id={modalInfo.dataEdit.id}
              />
            )}
      </Container>
    </>
  )
}

export default ListVehicles
