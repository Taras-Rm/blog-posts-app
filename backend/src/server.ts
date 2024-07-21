import app from "./app";
import config from "./config";

const PORT = config.server.port;

app.listen(PORT, () => {
  console.log(`Serever listening port ${PORT}...`);
});

// Add validation on BE
// error handling on BE
// swagger
// connect FE and BE
// test BE
// test FE