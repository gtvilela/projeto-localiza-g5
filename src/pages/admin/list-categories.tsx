import React, { FC, useState, useEffect, useCallback } from 'react';
import { FiEdit2, FiTrash, FiPlus } from 'react-icons/fi'

import api from '../../services/api';

import { Header, Container, HeaderPages, Table, Button, ButtonsGroup  } from '../../components/global/index';

import ModalFormNewAndEdit from '../../components/pages/admin/list-categories/ModalFormNewAndEdit';
import ModalDelete from '../../components/pages/admin/global/ModalDelete';

interface ICategoryProps {
  id: number;
  nome: string;
  url: string;
  descricao: string;
}

type IStateProps = {
  isOpen: boolean;
  type: 'edit' | 'new' | 'delete';
  dataEdit: ICategoryProps | null;
}

const ListCategories: FC = () => {
  const [categories, setCategories] = useState([]);
  const [modalInfo, setModalInfo] = useState<IStateProps>({
    isOpen: false,
    type: 'new',
    dataEdit: null
  })

  useEffect(() => {
    api.get('api/categoria/buscarTodos')
    .then(response => {
      setCategories(response.data)
    })
  }, [])

  const handleClickAction = useCallback((type: 'edit' | 'new' | 'delete', data: ICategoryProps) => {
    setModalInfo({
      isOpen: true,
      type,
      dataEdit: data
    })
  }, [setModalInfo])

  const handleCloseModal = useCallback(() => {
    setModalInfo({ ...modalInfo, isOpen: false })
  }, [setModalInfo]);

  const handleCloseModalAfterWinAction = useCallback((type: 'new' | 'edit', data: ICategoryProps) => {
    if (type === 'new') {
      setCategories([...categories, data])
      handleCloseModal()
    } else if ( type === 'edit') {
      setCategories(
        categories.map(mappedBrands =>
          mappedBrands.id === data.id ? { ...data } : mappedBrands)
      )
      handleCloseModal()
    }
  }, [categories, setCategories, handleCloseModal])

  return (
    <>
      <Header hidden={false} />
      <Container>
        <HeaderPages title="Gerenciar Categorias" />
          <Table>
            <thead>
              <tr>
                <th align="left">
                  Nome
                </th>
                <th align="right">
                  <Button size="medium" onClick={() => handleClickAction('new', null)}>
                    <FiPlus />
                    Adicionar
                  </Button>
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.map(category => (
                <tr key={category.id}>
                  <td width="95%">
                    {category.nome}
                  </td>
                  <td align="right">
                    <ButtonsGroup>
                      <Button
                        color="yellow"
                        size="medium"
                        onClick={() => handleClickAction('edit', {id: category.id, nome: category.nome, url: category.url, descricao: category.descricao})}
                        radius
                      >
                        <FiEdit2 />
                      </Button>
                      <Button
                        color="red"
                        size="medium"
                        onClick={() => handleClickAction('delete', {id: category.id, nome: category.nome, url: category.url, descricao: category.descricao })}
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

export default ListCategories
