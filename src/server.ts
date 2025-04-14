import express from "express";

const app = express();

// Main route
app.get("/", (_req, res) => {
  res.status(200).send("MCP Server is running");
});

// Healthcheck route
app.get("/health", (_req, res) => {
  res.status(200).send("OK");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
