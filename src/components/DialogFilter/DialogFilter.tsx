import { Button } from '@components/global';
import {
  Checkbox,
  CheckboxProps,
  Dialog,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  withStyles,
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import React, { FC, useEffect, useState } from 'react';
import api from 'services/api';
import { SymbolLogo } from '../../../public/images-components/IconsReact';
import { ContainerFilters, DialogContainer, TitleFilters } from './styles';

const GreenCheckbox = withStyles({
  root: {
    'color': green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

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
  onCancel: () => void;
  isOpen: boolean;
}

const DialogFilter: FC<IPropsDialog> = (props) => {
  const { onClose, isOpen, onCancel } = props;
  const [categorias, setCategorias] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [checkeds, setCheckeds] = useState([]);

  useEffect(() => {
    async function getCategorias(): Promise<void> {
      const response = await api.get('/Categoria/buscarTodos');
      setCategorias(response.data);
    }
    async function getMarcas(): Promise<void> {
      const response = await api.get('/Marca/buscarTodos');
      setMarcas(response.data);

    }

    getCategorias();
    getMarcas();
  }, []);

  const handleClose = () => {
    if (checkeds.length === 0) {
      onCancel();
    }

    onClose(checkeds);
  };

  const handleOK = () => {
    onClose(checkeds);
    setCheckeds([]);
  };

  const handleChangeCategories = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckeds([...checkeds, event.target.name]);
  };

  const handleChangeYears = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckeds([...checkeds, event.target.name]);
  };

  const handleChangeBrand = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckeds([...checkeds, event.target.name]);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={isOpen}>
      <DialogContainer>
        <DialogTitle className="header" id="simple-dialog-title">
          <SymbolLogo />
        </DialogTitle>
        <hr />
        <FormGroup row>
          <div>
            <TitleFilters>Categoria veículo</TitleFilters>
            <ContainerFilters>
              {categorias.map(({ id, nome }) => (
                <div key={id}>
                  <FormControlLabel
                    control={<GreenCheckbox onChange={handleChangeCategories} name={nome} />}
                    label={nome}
                  />
                </div>
              ))}
            </ContainerFilters>
          </div>
          <div>
            <TitleFilters>Marca</TitleFilters>
            <ContainerFilters>
              {marcas.map(({ id, nome }) => (
                <div key={id}>
                  <FormControlLabel control={<GreenCheckbox onChange={handleChangeBrand} name={nome} />} label={nome} />
                </div>
              ))}
            </ContainerFilters>
          </div>
          <div>
            <TitleFilters>Ano veículo</TitleFilters>
            <ContainerFilters>
              {anos.map(({ id, nome }) => (
                <div key={id}>
                  <FormControlLabel
                    control={<GreenCheckbox onChange={handleChangeYears} name={nome?.toString()} />}
                    label={nome}
                  />
                </div>
              ))}
            </ContainerFilters>
          </div>
          <div className="button-filter">
            <Button color="yellow" onClick={onCancel}>
              Cancelar
            </Button>
            <Button onClick={handleOK}>OK</Button>
          </div>
        </FormGroup>
      </DialogContainer>
    </Dialog>
  );
};

export default DialogFilter;
