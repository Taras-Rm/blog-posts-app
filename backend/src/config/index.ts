import dotenv from "dotenv";
dotenv.config();

interface Config {
  server: {
    port: string;
  };
  db: {
    url: string;
  };
}

const config: Config = {
  server: {
    port: process.env.PORT || "8080",
  },
  db: {
    url: process.env.DATABASE_URL || "",
  },
};

export default config;
