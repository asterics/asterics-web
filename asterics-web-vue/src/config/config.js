const path = require("path");

let envConfigPath = path.join(process.cwd(), "src", "config", ".env"),
  schemaPath = path.join(process.cwd(), "src", "config", "schema.json");

require("dotenv").config({ path: envConfigPath });
const convict = require("convict"),
  config = convict(schemaPath),
  { getReferenceInPath } = require("@asterics/git-tools");

/* Load configuration */
config.load({
  env: "production",
  submodules: [
    {
      name: "asterics-docs",
      location: path.join(process.cwd(), "src", "external", "asterics-docs"),
      reference: getReferenceInPath(process.cwd(), "asterics-docs"),
      branch: "master"
    },
    {
      name: "WebACS",
      location: path.join(process.cwd(), "src", "external", "webacs"),
      reference: getReferenceInPath(process.cwd(), "WebACS"),
      branch: "master"
    }
  ]
});

/* Validate configuration with loaded schema */
config.validate({ allowed: "warn" });

module.exports = config;
