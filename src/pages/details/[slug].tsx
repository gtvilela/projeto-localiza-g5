import Header from '../../components/Header/Header';
import React, { FC } from 'react';
import { HeaderDetalhes } from '../../styles/pages/details';

const Details: FC = () => {
  return (
    <>
        <Header hidden={false} />
        <div>
        <HeaderDetalhes>
          <span className="label">FIAT</span>
          <span className="label">AO DIA</span>
          <span className="model">Uno 1.0</span>
          <span className="price">R$68,18</span>
        </HeaderDetalhes>
        <div>
          <div className="imagem">
             {/* Imagem do carro */}
          </div>
          <div className="detalhes">
            {/* Detalhes do carro */}
          </div>
        </div>

        </div>
    </>
  );
};

export default Details;
