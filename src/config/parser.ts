import fs from "fs";
import { EnvProps } from "src/global/types";
class Parser {
  private file: string;
  private struc: EnvProps | undefined;
  constructor(filePath: string) {
    this.file = filePath;
  }

  private parseFile(): object {
    const file = fs.readFileSync(this.file, "utf8");
    return JSON.parse(file);
  }

  public getProps(): object {
    const obj = this.parseFile();
    this.struc = {
      name: obj.name,
      env: {
        NODE_ENV: obj.env.NODE_ENV,
      },
      settings: {},
    };

    return this.struc;
  }

  public setProps(props: object): void {}
}
