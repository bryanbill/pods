import { Parser } from "./parser";

const test = async () => {
  const parser = new Parser("../../config.default.json");

  const obj = parser.getProps();

  console.log(obj);
};
