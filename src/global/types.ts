export type EnvProps = {
  name: string;
  env: {
    [key: string]: string;
  };
  settings: {
    [key: string]: string | boolean;
  };
};
