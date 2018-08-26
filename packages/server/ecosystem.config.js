const env = {
  NODE_ENV: "production",
  TYPEORM_CONNECTION: "postgres",
  TYPEORM_PORT: 5432,
  TYPEORM_USER: "postgres",
  TYPEORM_PASSWORD: "12345",
  TYPEORM_DATABASE: "database",
  TYPEORM_SYNCHRONIZE: true,
  TYPEORM_LOGGING: true,
  TYPEORM_ENTITIES: "./dist/entity/*.js",
  JWT_SECRET: "secret"
};

module.exports = {
  apps: [
    {
      name: "worker1",
      script: "./dist/index.js",
      merge_logs: true,
      out_file: "./tmp/workers.log",
      log_date_format: "MM/DD/YYYY HH:mm:ss",
      env_production: { ...env, PORT: 4000 }
    },
    {
      name: "worker2",
      script: "./dist/index.js",
      merge_logs: true,
      out_file: "./tmp/workers.log",
      log_date_format: "MM/DD/YYYY HH:mm:ss",
      env_production: { ...env, PORT: 4001 }
    },
    {
      name: "worker3",
      script: "./dist/index.js",
      merge_logs: true,
      out_file: "./tmp/workers.log",
      log_date_format: "MM/DD/YYYY HH:mm:ss",
      env_production: { ...env, PORT: 4002 }
    }
  ]
};
