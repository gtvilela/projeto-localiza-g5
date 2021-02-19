import { Button } from '@components/global';
import { Checkbox, CheckboxProps, Dialog, DialogTitle, FormControlLabel, FormGroup, withStyles } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import React, { FC, useEffect, useState } from 'react';
import api from 'services/api';
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

  const handleOK = () => {
    onClose(checkeds);
    setCheckeds([]);
  }

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
        <hr />
        <FormGroup row>
        <div>
          <TitleFilters>Categoria veículo</TitleFilters>
          <ContainerFilters>
            {categorias.map((categoria) => (
              <div key={categoria.id}>
                <FormControlLabel
                  control={<GreenCheckbox onChange={handleChangeCategories} name={categoria.nome} />}
                  label={categoria.nome}
                />
              </div>
            ))}
          </ContainerFilters>
        </div>
        <div>
          <TitleFilters>Ano veículo</TitleFilters>
          <ContainerFilters>
            {anos.map((ano) => (
              <div key={ano.id}>
                <FormControlLabel
                  control={<GreenCheckbox onChange={handleChangeYears} name={ano?.nome?.toString()} />}
                  label={ano.nome}
                />
              </div>
            ))}
          </ContainerFilters>
        </div>
        <div className="button-filter">
          <Button color="yellow" onClick={() => onCancel()}>
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
