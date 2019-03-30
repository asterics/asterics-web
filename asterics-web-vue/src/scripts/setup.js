const path = require("path");

const configPath = path.join(process.cwd(), "src", "config", "config.js");

const config = require(configPath);
const { execute } = require("@asterics/node-utils");
const { ensureGitSubmodule } = require("@asterics/git-tools");

const endpoint = config.get("endpoint");
const endpoint_docs = config.get("endpoint_docs");
const base = endpoint === "" ? endpoint_docs : `${endpoint}/${endpoint_docs}`;

/* Setup git submodules */
config.get("submodules").find(submodule => ensureGitSubmodule(submodule, config.get("verbose")));

buildAstericsDocs();
buildWebACS();

function buildAstericsDocs() {
  const asterics_docs = config.get("submodules").find(({ name }) => name === "asterics-docs");
  execute({
    cmd: `yarn --cwd ${asterics_docs.location} install`,
    success: `yarn dependencies installed in ${asterics_docs.location}`,
    error: `failed installing npm dependencies in ${asterics_docs.location}`,
    verbose: config.get("verbose")
  });

  execute({
    cmd: `yarn --cwd ${asterics_docs.location} setup`,
    success: `build asterics-docs in ${asterics_docs.location}`,
    error: `failed building asterics-docs in ${asterics_docs.location}`,
    verbose: config.get("verbose"),
    env: { ENDPOINT: base, FATALITY: config.get("fatality") }
  });
}

function buildWebACS() {
  const webacs = config.get("submodules").find(({ name }) => name === "WebACS");
  execute({
    cmd: `yarn --cwd ${webacs.location} install`,
    success: `yarn dependencies installed in ${webacs.location}`,
    error: `failed installing npm dependencies in ${webacs.location}`,
    verbose: config.get("verbose")
  });

  execute({
    cmd: `yarn --cwd ${webacs.location} build`,
    success: `build WebACS in ${webacs.location}`,
    error: `failed building WebACS in ${webacs.location}`,
    verbose: config.get("verbose")
  });
}
