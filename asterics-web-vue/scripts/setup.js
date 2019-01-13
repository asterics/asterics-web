require("dotenv").config();
const shell = require("shelljs");

if (!shell.which("git")) {
  shell.echo("Sorry, this script requires git");
  shell.exit(1);
}

// Clone all submodules
process.env.GIT_SUBMODULES.split(" ").forEach(submodule => {
  if (shell.exec(`git submodule update ${submodule}`).code !== 0) {
    shell.echo(`Error: cloning git submodule ${submodule} failed`);
  }
});
