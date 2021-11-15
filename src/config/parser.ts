import fs from "fs";
import { env } from "process";
import { EnvProps } from "src/global/types";
import dotEnv from "dotenv";
export class Parser {
  private file: string;
  private struc: EnvProps | undefined;
  constructor(filePath: string) {
    this.file = filePath;
    dotEnv.config();
  }

  private parseFile(): EnvProps {
    const file = fs.readFileSync(this.file, "utf8");
    return JSON.parse(file) as EnvProps;
  }

  public getProps(): EnvProps {
    const obj = this.parseFile();
    this.struc = {
      name: obj.name,
      env: {
        NODE_ENV: obj.env.NODE_ENV,
      },
      settings: {
        cache: {
          enabled: obj.settings.cache.enabled,
          forceCheck: obj.settings.cache.forceCheck,
          expiration: obj.settings.cache.expiration,
          db: obj.settings.cache.db,
        },
        database: {
          username: obj.settings.database.username,
          host: obj.settings.database.host,
          port: obj.settings.database.port,
          password: obj.settings.database.password,
          database: obj.settings.database.database,
        },
        server: {
          port: obj.settings.server.port,
          host: obj.settings.server.host,
          locations: obj.settings.server.locations,
        },
        storage: {
          host: obj.settings.storage.host,
          port: obj.settings.storage.port,
        },
      },
    };

    return this.struc;
  }

  public setProps(props: object): void {}
}
