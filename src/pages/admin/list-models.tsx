import React from 'react';
import { FiEdit2, FiTrash, FiPlus } from 'react-icons/fi'

import { Header, Container, HeaderPages, Table, Button, ButtonsGroup } from '../../components/global/index';

const ListModels = () => {
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
                <Button size="medium">
                  <FiPlus />
                  Adicionar
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td width="95%">
                Uno 1.0
              </td>
              <td align="right">
                <ButtonsGroup>
                  <Button color="yellow" size="medium" radius>
                    <FiEdit2 />
                  </Button>
                  <Button color="red" size="medium" radius>
                    <FiTrash />
                  </Button>
                </ButtonsGroup>
              </td>
            </tr>
            <tr>
              <td width="95%">
                Uno 1.0
              </td>
              <td align="right">
                <ButtonsGroup>
                  <Button color="yellow" size="medium" radius>
                    <FiEdit2 />
                  </Button>
                  <Button color="red" size="medium" radius>
                    <FiTrash />
                  </Button>
                </ButtonsGroup>
              </td>
            </tr>
            <tr>
              <td width="95%">
                Uno 1.0
              </td>
              <td align="right">
                <ButtonsGroup>
                  <Button color="yellow" size="medium" radius>
                    <FiEdit2 />
                  </Button>
                  <Button color="red" size="medium" radius>
                    <FiTrash />
                  </Button>
                </ButtonsGroup>
              </td>
            </tr>
            <tr>
              <td width="95%">
                Uno 1.0
              </td>
              <td align="right">
                <ButtonsGroup>
                  <Button color="yellow" size="medium" radius>
                    <FiEdit2 />
                  </Button>
                  <Button color="red" size="medium" radius>
                    <FiTrash />
                  </Button>
                </ButtonsGroup>
              </td>
            </tr>
            <tr>
              <td width="95%">
                Uno 1.0
              </td>
              <td align="right">
                <ButtonsGroup>
                  <Button color="yellow" size="medium" radius>
                    <FiEdit2 />
                  </Button>
                  <Button color="red" size="medium" radius>
                    <FiTrash />
                  </Button>
                </ButtonsGroup>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default ListModels
