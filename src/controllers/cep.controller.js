import { fetchCepFromBrasilApi } from "../services/brasilApi.service.js";
import { isValidCep, normalizeCep } from "../utils/cep.validator.js";

export async function getCep(req, res, next) {
  try {
    const cep = normalizeCep(req.params.cep);

    if (!isValidCep(cep)) {
      return res.status(400).json({
        error: "CEP inválido. Informe um CEP com 8 dígitos."
      });
    }

    const data = await fetchCepFromBrasilApi(cep);

    return res.status(200).json({
      cep: data.cep,
      state: data.state,
      city: data.city,
      neighborhood: data.neighborhood,
      street: data.street,
      service: data.service,
      location: data.location || null
    });
  } catch (error) {
    if (error.response?.status === 404) {
      return res.status(404).json({
        error: "CEP não encontrado."
      });
    }

    return next(error);
  }
}