const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });
// const fs = require("fs");
// const { gitLocalPath } = require("../src/libraries/util/git");
const { gitLocalPath } = require("asterics-web-git");
const shell = require("shelljs");

if (!shell.which("git")) {
  shell.echo("Sorry, this script requires git");
  shell.exit(1);
}

let asterics_docs = {
    path: process.env.GIT_SUBMODULE_DOCS,
    ref: gitLocalPath(__dirname, process.env.GIT_SUBMODULE_DOCS_REF),
    branch: process.env.GIT_SUBMODULE_DOCS_BRANCH || "master",
    fatal: process.env.GIT_SUBMODULE_DOCS_FATALITY || false,
    commands: []
  },
  webacs = {
    path: process.env.GIT_SUBMODULE_WEBACS,
    ref: gitLocalPath(__dirname, process.env.GIT_SUBMODULE_WEBACS_REF),
    branch: process.env.GIT_SUBMODULE_WEBACS_BRANCH || "master",
    fatal: process.env.GIT_SUBMODULE_WEBACS_FATALITY || false
  };

/* Run init commands for (all) repositories */
[asterics_docs, webacs].forEach(r => {
  let refCommand = r.ref ? `--reference ${r.ref}` : "";
  if (refCommand) shell.echo(`From (local) ${r.ref}`);

  /* clone repository */
  // eslint-disable-next-line
  let s = shell.exec(`git submodule update --init ${refCommand} ${r.path}`);
  if (s.code !== 0) {
    shell.echo(`failed cloning ${r.path}`);
    if (r.fatal) shell.exit(1);
  }
  /* checkout branch/tag */
  // eslint-disable-next-line
  s = shell.exec(`git --git-dir=${r.path}/.git --work-tree=${r.path} checkout ${r.branch}`);
  if (s.code !== 0) {
    shell.echo(`failed checking out ${r.branch} in ${r.path}`);
    if (r.fatal) shell.exit(1);
  }
  /* pull latest commits */
  // eslint-disable-next-line
  s = shell.exec(`git --git-dir=${r.path}/.git --work-tree=${r.path} pull origin ${r.branch}`);
  if (s.code !== 0) {
    shell.exec(`failed to pull latest commits of ${r.path}`);
    if (r.fatal) shell.exit(1);
  }
});

/* Setup asterics-docs */

/* Install dependencies*/
let s = shell.exec(`npm install --prefix ${asterics_docs.path}`);
if (s.code !== 0) {
  shell.echo(`failed installing npm dependencies (${asterics_docs.path})`);
  if (asterics_docs.fatal) shell.exit(1);
}
/* Build asterics-docs */
asterics_docs.path = path.join(__dirname, "..", asterics_docs.path);
console.log(asterics_docs.path);
console.log(require("fs-extra").readdirSync(asterics_docs.path));
s = shell.exec(
  `PREFIX=docs npm run-script build --prefix ${asterics_docs.path}`
);
if (s.code !== 0) {
  shell.echo(`failed building ${asterics_docs.path}`);
  if (asterics_docs.fatal) shell.exit(1);
}
