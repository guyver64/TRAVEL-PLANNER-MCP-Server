import express from "express";

const app = express();

app.get("/", (_req, res) => {
  res.status(200).send("OK");
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Healthcheck server running on port ${port}`);
});
