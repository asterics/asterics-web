const path = require("path");

const configPath = path.join(process.cwd(), "src", "config", "config.js");

const config = require(configPath);
const { execute } = require("@asterics/node-utils");
const { ensureGitSubmodule } = require("@asterics/git-tools");

/* Setup git submodules */
config.get("submodules").find(submodule => ensureGitSubmodule(submodule, config.get("verbose")));

/* Install dependencies*/
buildAstericsDocs();

function buildAstericsDocs() {
  const asterics_docs = config.get("submodules").find(({ name }) => name === "asterics-docs");
  execute({
    cmd: `npm install --prefix ${asterics_docs.location}`,
    success: `npm dependencies installed in ${asterics_docs.location}`,
    error: `failed installing npm dependencies in ${asterics_docs.location}`,
    verbose: config.get("verbose")
  });

  execute({
    cmd: `npm run-script setup --prefix ${asterics_docs.location}`,
    success: `build asterics-docs in ${asterics_docs.location}`,
    error: `failed building asterics-docs in ${asterics_docs.location}`,
    verbose: config.get("verbose"),
    env: { ENDPOINT: "docs" }
  });
}
