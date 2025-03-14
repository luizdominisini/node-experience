import express from "express";
import request from "supertest";
import { router } from "./index.routes.js";

const app = express();
app.use(router);

describe("GET /", () => {
  it("should count the number of visits", async () => {
    const promises = Array.from({ length: 1000 }, () => request(app).get("/"));
    const responses = await Promise.all(promises);
    const lastResponse = responses[responses.length - 1];

    expect(lastResponse.text).toBe("This page has been visited 1000 times");
  });
});
