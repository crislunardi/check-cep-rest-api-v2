export function normalizeCep(cep) {
  return String(cep).replace(/\D/g, "");
}

export function isValidCep(cep) {
  const normalized = normalizeCep(cep);
  return /^\d{8}$/.test(normalized);
}