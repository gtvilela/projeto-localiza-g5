export interface IVeiculo {
  id: 3;
  placa: string;
  ano: string;
  valorHora: number;
  limitePorMalas: string;
  combustivel: number;
  kilomentroPorLitro: string;
  velocidadeMaxima: string;
  ocupantes: number;
  cambio: string;
  potencia: string;
  url: string;
  descricao: string;
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
}

export interface IVeiculoSimplificado {
  placa: string,
  ano: string,
  valorHora: number,
  limitePorMalas: string,
  idMarca: number,
  idModelo: number,
  idCategoria: number,
  combustivel: number
}
