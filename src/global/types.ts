export type EnvProps = {
  name: string;
  env: {
    NODE_ENV: string;
  };
  settings: {
    cache: {
      enabled: string | boolean;
      forceCheck: {
        enabled: string | boolean;
        interval: string;
      };
      expiration: {
        max_age: string | boolean;
      };
      db: {
        type: string;
        host: string;
        port: number;
      };
    };

    database: {
      host: string;
      port: string;
      database: string;
      username: string;
      password: string;
    };
    server: {
      host: string;
      port: string;
      locations: string;
    };
    storage: {
      host: string;
      port: string;
    };
  };
};
