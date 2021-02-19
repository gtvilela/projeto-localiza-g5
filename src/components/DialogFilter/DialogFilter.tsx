import { Button } from '@components/global';
import { Checkbox, Dialog, DialogTitle, FormControlLabel } from '@material-ui/core';
import React, { FC, useEffect, useState } from 'react';
import api from 'services/api';
import { ContainerAno, DialogContainer } from './styles';

interface IProps {
  id: number;
  valorHora: number;
  url: string;
  marca: {
    id: number;
    nome: string;
  };
  modelo: {
    id: number;
    nome: string;
  };
  categoria: {
    id: number;
    nome: string;
  };
  ano: number;
}

const anos = [
  { id: 10, nome: 2013 },
  { id: 11, nome: 2014 },
  { id: 12, nome: 2015 },
  { id: 13, nome: 2016 },
  { id: 14, nome: 2017 },
  { id: 15, nome: 2018 },
  { id: 16, nome: 2019 },
  { id: 17, nome: 2020 },
  { id: 18, nome: 2021 },
];

interface IPropsDialog {
  onClose: (value) => void;
  isOpen: boolean;
}

const DialogFilter: FC<IPropsDialog> = (props) => {
  const { onClose, isOpen } = props;
  const [categorias, setCategorias] = useState([]);
  const [checkeds, setCheckeds] = useState([]);

  useEffect(() => {
    async function getCategorias(): Promise<void> {
      const response = await api.get('/Categoria/buscarTodos');
      setCategorias(response.data);
    }

    getCategorias();
  }, []);

  const handleClose = () => {
    onClose(checkeds);
  };

  const handleChangeCategories = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckeds([...checkeds, event.target.name]);
  };

  const handleChangeYears = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckeds([...checkeds, event.target.name]);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={isOpen}>
      <DialogContainer>
        <DialogTitle id="simple-dialog-title">Filtro</DialogTitle>
        <div>
          <strong>Categoria veículo</strong>
          {categorias.map((categoria) => (
            <div key={categoria.id}>
              <FormControlLabel
                control={<Checkbox onChange={handleChangeCategories} name={categoria.nome} />}
                label={categoria.nome}
              />
            </div>
          ))}
        </div>
        <div>
          <strong>Ano veículo</strong>
          <ContainerAno>
            {anos.map((ano) => (
              <div key={ano.id}>
                <FormControlLabel
                  control={<Checkbox onChange={handleChangeYears} name={ano?.nome?.toString()} />}
                  label={ano.nome}
                />
              </div>
            ))}
          </ContainerAno>
        </div>

        <Button onClick={() => onClose(checkeds)}>OK</Button>
      </DialogContainer>
    </Dialog>
  );
};

export default DialogFilter;
