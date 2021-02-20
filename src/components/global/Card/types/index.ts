export interface IPropsCard {
  vehicles: {
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
