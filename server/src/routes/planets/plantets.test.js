const request = require("supertest");
const app = require("../../app");
const { mongoConnect } = require("../../services/mongo");

describe("Test GET /planets", () => {
  test("It should respond with 200 success", async () => {
    await mongoConnect();
    const response = await request(app)
      .get("/v1/planets")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});
