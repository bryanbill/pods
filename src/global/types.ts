export type EnvProps = {
  name: string;
  env: {
    [key: string]: string;
  };
  settings: {
    cache: {
      [key: string]:
        | string
        | boolean
        | {
            forceCheck: {
              [key: string]: string | boolean;
            };
            expiration: {
              [key: string]: string | boolean;
            };
            db: {
              [key: string]: {
                type: string;
                host: string;
                port: number;
              };
            };
          };
    };
    database: {
      [key: string]: {
        host: string;
        port: string;
        database: string;
        username: string;
        password: string;
      };
    };
    server: {
      [key: string]: {
        host: string;
        port: string;
        locations: string;
      };
    };
    storage: {
      [key: string]: {
        host: string;
        port: string;
      };
    };
  };
};
