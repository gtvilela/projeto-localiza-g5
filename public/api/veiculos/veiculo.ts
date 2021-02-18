import axios from 'axios';
import { IVeiculoSimplificado } from './types';
import {baseUrl} from './utils/baseUrl'

export const getVeiculo = async (id: number) => {
  try {
    const {data} = await axios.get(`${baseUrl}Veiculo/${id}`);
    return data;
  }catch(e) {
    return 'Não foi possível localizar o veículo. Tente mais tarde. ' + e;
  }
}
export const getAllVeiculos = async () => {
  try {
    const {data} = await axios.get(`${baseUrl}Veiculo/buscarTodos`);
    return data;
  } catch(e) {
    return 'Não foi possível localizar os veículos. Tente mais tarde. ' + e;
  }
}

export const postVeiculo = async (veiculo: IVeiculoSimplificado) => {
  try {
    const res = await axios.post(`${baseUrl}Veiculo`, veiculo);
    return res;
  }
  catch(e) {
    return 'Não foi possível cadastrar o veículo. Tente mais tarde. ' + e;
  }
 }

 export const deleteVeiculo = async (id) => {
   try {
     const res = await axios.delete(`${baseUrl}Veiculo/${id}`);
    return res;
   }catch(e) {
    return 'Não foi possível deletar o veículo. Tente mais tarde. ' + e;
   }
 }
