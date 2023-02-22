const request = require("supertest");
const app = require("../../app");
const { mongoConnect, mongoDisconnect } = require("../../services/mongo");

describe("Test GET /planets", () => {
  afterAll(async () => {
    await mongoDisconnect();
  });
  test("It should respond with 200 success", async () => {
    await mongoConnect();
    const response = await request(app)
      .get("/v1/planets")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});
