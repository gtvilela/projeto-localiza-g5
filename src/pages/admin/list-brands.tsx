import React, { FC, useState, useEffect, useCallback } from 'react';
import { FiEdit2, FiTrash, FiPlus } from 'react-icons/fi'

import api from '../../services/api';

import { Header, Container, HeaderPages, Table, Button, ButtonsGroup  } from '../../components/global/index';

import ModalFormNewAndEdit from '../../components/pages/admin/list-brands/ModalFormNewAndEdit';
import ModalDelete from '../../components/pages/admin/global/ModalDelete';

interface IBrandProps {
  id: number;
  nome: string;
}

type IStateProps = {
  isOpen: boolean;
  type: 'edit' | 'new' | 'delete';
  dataEdit: IBrandProps | null;
}

const ListBrands: FC = () => {
  const [brands, setBrands] = useState([]);
  const [modalInfo, setModalInfo] = useState<IStateProps>({
    isOpen: false,
    type: 'new',
    dataEdit: null
  })

  useEffect(() => {
    api.get('/Marca/buscarTodos')
    .then(response => {
      setBrands(response.data)
    })
  }, [])

  const handleClickAction = useCallback((type: 'edit' | 'new' | 'delete', data?: IBrandProps) => {
    setModalInfo({
      isOpen: true,
      type,
      dataEdit: data
    })
  }, [setModalInfo])

  const handleCloseModal = useCallback(() => {
    setModalInfo({ ...modalInfo, isOpen: false })
  }, [setModalInfo]);

  const handleCloseModalAfterWinAction = useCallback((type: 'new' | 'edit', data: IBrandProps) => {
    if (type === 'new') {
      // setBrands([{ id: 1, nome: 'gui'}])
      handleCloseModal()
    } else if ( type === 'edit') {
      // setBrands(
      //   brands.map(mappedBrands =>
      //     mappedBrands.id === data.id ? { ...data } : mappedBrands)
      // )
      handleCloseModal()
    }
  }, [brands, setBrands, handleCloseModal])

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
              {brands.map(brand => (
                <tr key={brand.id}>
                  <td width="95%">
                    {brand.nome}
                  </td>
                  <td align="right">
                    <ButtonsGroup>
                      <Button
                        color="yellow"
                        size="medium"
                        onClick={() => handleClickAction('edit', {id: brand.id, nome: brand.nome})}
                        radius
                      >
                        <FiEdit2 />
                      </Button>
                      <Button
                        color="red"
                        size="medium"
                        onClick={() => handleClickAction('delete', {id: brand.id, nome: brand.nome})}
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

export default ListBrands
