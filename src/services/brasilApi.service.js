import axios from "axios";

const brasilApi = axios.create({
  baseURL: "https://brasilapi.com.br/api",
  timeout: 5000
});

export async function fetchCepFromBrasilApi(cep) {
  const response = await brasilApi.get(`/cep/v2/${cep}`);
  return response.data;
}