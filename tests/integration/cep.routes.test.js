import request from "supertest";
import nock from "nock";
import app from "../../src/app.js";

describe("GET /api/ceps/:cep", () => {
  afterEach(() => {
    nock.cleanAll();
  });

  test("deve retornar dados do CEP com sucesso", async () => {
    nock("https://brasilapi.com.br")
      .get("/api/cep/v2/01001000")
      .reply(200, {
        cep: "01001000",
        state: "SP",
        city: "São Paulo",
        neighborhood: "Sé",
        street: "Praça da Sé",
        service: "correios",
        location: {
          type: "Point",
          coordinates: {
            longitude: "-46.633309",
            latitude: "-23.55052"
          }
        }
      });

    const response = await request(app).get("/api/ceps/01001-000");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      cep: "01001000",
      state: "SP",
      city: "São Paulo",
      neighborhood: "Sé",
      street: "Praça da Sé",
      service: "correios",
      location: {
        type: "Point",
        coordinates: {
          longitude: "-46.633309",
          latitude: "-23.55052"
        }
      }
    });
  });

  test("deve retornar 400 para CEP inválido", async () => {
    const response = await request(app).get("/api/ceps/123");

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      error: "CEP inválido. Informe um CEP com 8 dígitos."
    });
  });

  test("deve retornar 404 quando CEP não existir", async () => {
    nock("https://brasilapi.com.br")
      .get("/api/cep/v2/99999999")
      .reply(404, {
        message: "CEP not found"
      });

    const response = await request(app).get("/api/ceps/99999999");

    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      error: "CEP não encontrado."
    });
  });
});