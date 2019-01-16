const fs = require("fs");
const path = require("path");

function mapDirectoryStats(dirPath, dirName) {
  let p = `${dirPath}/${dirName}`;
  return { path: p, stat: fs.statSync(p) };
}

function isLocalRepositoryPath(dirPath) {
  let rGitFolder = /.git$/,
    folders = fs
      .readdirSync(dirPath)
      .map(e => mapDirectoryStats(dirPath, e))
      .filter(e => e.stat.isDirectory() && rGitFolder.test(e.path));
  return folders.length > 0;
}

function gitLocalPath(dirPath, dirName) {
  let auto = /^auto:/,
    remote = /^remote/,
    resultPath;

  /* auto */
  if (auto.test(dirName)) {
    dirName = dirName.replace(auto, "");

    let searchPath = dirPath,
      parentDirs = searchPath.split("/").length,
      rSearch = new RegExp("/" + dirName + "$");

    for (let i = 0; i < parentDirs; i++) {
      let search = fs
        .readdirSync(searchPath)
        .map(e => mapDirectoryStats(searchPath, e))
        .filter(e => e.stat.isDirectory())
        .filter(e => rSearch.test(e.path))
        .filter(e => isLocalRepositoryPath(e.path));
      if (search.length > 0) {
        resultPath = search[0].path;
        break;
      }
      /* Jump to parent directory */
      searchPath = path.join(searchPath, "..");
    }
    /* remote */
  } else if (remote.test(dirName)) {
    resultPath = "";
    /* path */
  } else if (path.isAbsolute(dirName)) {
    resultPath = dirName;
  }

  return resultPath;
}

// console.log(__dirname);
// console.log(searchUpWardsFrom(__dirname, "AsTeRICS"));

module.exports = {
  gitLocalPath
};
