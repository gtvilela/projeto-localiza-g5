export interface IPropsCard {
  veiculo: {
    id: number;
    valorHora: number;
    url: string;
    marca: {
      nome: string;
    };
    modelo: {
      nome: string;
    };
  };
}
