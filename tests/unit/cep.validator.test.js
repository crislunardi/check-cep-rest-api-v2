import { isValidCep, normalizeCep } from "../../src/utils/cep.validator.js";

describe("cep.validator", () => {
  test("deve normalizar CEP com máscara", () => {
    expect(normalizeCep("01001-000")).toBe("01001000");
  });

  test("deve validar CEP com 8 dígitos", () => {
    expect(isValidCep("01001000")).toBe(true);
  });

  test("deve invalidar CEP com letras", () => {
    expect(isValidCep("0100A000")).toBe(false);
  });

  test("deve invalidar CEP com tamanho incorreto", () => {
    expect(isValidCep("123")).toBe(false);
  });
});