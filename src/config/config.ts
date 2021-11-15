import { Parser } from "./parser";

module.exports = {
  host: new Parser("").getProps().settings.server.host,
};
